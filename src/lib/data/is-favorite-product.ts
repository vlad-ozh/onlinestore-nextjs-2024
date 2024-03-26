'use server';

import { getTranslations } from 'next-intl/server';
import { unstable_noStore as noStore } from 'next/cache';
import { ApiError } from '../api-error';
import { User } from '@clerk/nextjs/server';

export const isFavoriteProduct = async (
  productId: string,
  user: User | null
) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const favorites: any = user.privateMetadata.favorites;

    if (!favorites) return false;

    const isFavorite: boolean = favorites.some(
      (product: string) => product === productId
    );

    return isFavorite;
  } catch (error: any) {
    console.error('Failed to find product in favorites:', error);
  }
};
