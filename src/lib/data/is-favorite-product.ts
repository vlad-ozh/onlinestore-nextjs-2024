'use server';

import { currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';
import { unstable_noStore as noStore } from 'next/cache';
import { ApiError } from '../api-error';

export const isFavoriteProduct = async (productId: string) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const favorites: any = user?.privateMetadata.favorites;

    const isFavorite: boolean = favorites.some(
      (product: string) => product === productId
    );

    return isFavorite;
  } catch (error: any) {
    console.error('Failed to find product in favorites:', error);
  }
};
