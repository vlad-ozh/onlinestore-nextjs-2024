'use server';

import { getTranslations } from 'next-intl/server';
import { unstable_noStore as noStore } from 'next/cache';
import { ApiError } from '../api-error';
import { User } from '@clerk/nextjs/server';

export const inCartProduct = async (
  productId: string,
  user: User | null
) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const cartProducts: any = user.privateMetadata.cart;

    if (!cartProducts) return false;

    const inCart: boolean = cartProducts.some(
      (product: string) => product === productId
    );

    return inCart;
  } catch (error: any) {
    console.error('Failed to find product in cart:', error);
  }
};
