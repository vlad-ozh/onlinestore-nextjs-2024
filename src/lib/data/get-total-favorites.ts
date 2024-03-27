'use server';

import { unstable_noStore as noStore } from 'next/cache';
import { getTranslations } from 'next-intl/server';
import { ApiError } from '../api-error';
import { User } from '@clerk/nextjs/server';
import { metadataFavorites } from '@/utils/metadata-names';

export const getTotalFavorites = async (user: User | null) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const favorites: any = user?.privateMetadata[metadataFavorites];

    const totalFavorites: number | undefined = favorites?.length;

    return totalFavorites;
  } catch (error: any) {
    console.error('Failed to fetch products:', error);
  }
};
