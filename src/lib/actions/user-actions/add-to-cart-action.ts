'use server';

import { clerkClient, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { action } from '../safe-action';
import { getTranslations } from 'next-intl/server';
import { ApiError, returnError } from '@/lib/api-error';
import { metadataCart } from '@/utils/metadata-names';
import { ICartProduct } from '@/types/user-types';

const schema = z.object({
  productId: z.string(),
});

export const addProductToCart = action(schema, async ({ productId }) => {
  const t = await getTranslations('Errors');

  try {
    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const cartProducts: any = user?.privateMetadata[metadataCart];

    const newProduct: ICartProduct = {
      productId,
      quantity: 1,
    };

    if (!cartProducts) {
      await clerkClient.users.updateUserMetadata(user.id, {
        privateMetadata: {
          cart: [newProduct],
        },
      });

      return revalidatePath('/');
    };

    if (cartProducts.some((product: string) => product === productId)) return;

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        cart: cartProducts.concat(newProduct),
      },
    });
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
