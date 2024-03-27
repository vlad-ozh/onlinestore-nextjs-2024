'use server';

import { ApiError, returnError } from '@/lib/api-error';
import { clerkClient, currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { action } from '../safe-action';
import { metadataCart } from '@/utils/metadata-names';
import { ICartProduct } from '@/types/user-types';

const schema = z.object({
  productId: z.string(),
});

export const deleteProductFromCart = action(schema, async ({
  productId,
}) => {
  try {
    const t = await getTranslations('Errors');

    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const cart: any = user?.privateMetadata[metadataCart];

    if (!cart.some(
      (product: ICartProduct) => product.productId === productId)
    ) return;

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        favorites: cart.filter((product: ICartProduct) =>
          product.productId !== productId
        ),
      },
    });
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
