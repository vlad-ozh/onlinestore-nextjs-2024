'use server';

import { ApiError, returnError } from '@/lib/api-error';
import { clerkClient, currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { action } from '../safe-action';
import { metadataFavorites } from '@/utils/metadata-names';

const schema = z.object({
  productId: z.string(),
});

export const deleteFavoriteProduct = action(schema, async ({
  productId,
}) => {
  try {
    const t = await getTranslations('Errors');

    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const favorites: any = user?.privateMetadata[metadataFavorites];

    if (!favorites.some((product: string) => product === productId)) return;

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        [metadataFavorites]: favorites.filter((product: string) =>
          product !== productId
        ),
      },
    });
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
