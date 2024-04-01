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
  amountProduct: z.number(),
  newQuantity: z.number(),
});

export const changeQuantityProduct = action(schema, async ({
  productId,
  amountProduct,
  newQuantity,
}) => {
  try {
    const t = await getTranslations('Errors');
    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const cartProducts: any = user?.privateMetadata[metadataCart];

    let correctQuantity = newQuantity;

    if (newQuantity < 1) {
      correctQuantity = 1;
    } else if (newQuantity > amountProduct) {
      correctQuantity = amountProduct;
    }

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        [metadataCart]: cartProducts.map((product: ICartProduct) => {
          if (product.productId === productId) {
            return {
              ...product,
              quantity: correctQuantity,
            };
          }

          return product;
        }),
      },
    });
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
