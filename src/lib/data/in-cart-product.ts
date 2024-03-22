'use server';

import { currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';
import { unstable_noStore as noStore } from 'next/cache';
import { ApiError } from '../api-error';

export const inCartProduct = async (productId: string) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const cartProducts: any = user?.privateMetadata.cart;

    if (!cartProducts) return false;

    const inCart: boolean = cartProducts.some(
      (product: string) => product === productId
    );

    return inCart;
  } catch (error: any) {
    console.error('Failed to find product in cart:', error);
  }
};
