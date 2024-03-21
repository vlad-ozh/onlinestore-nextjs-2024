'use server';

import { getTranslations } from 'next-intl/server';
import { action } from './../safe-action';
import { clerkClient, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { ApiError, returnError } from '@/lib/api-error';

const schema = z.object({
  productId: z.string(),
});

export const addProductToFavorites = action(schema, async ({ productId }) => {
  const t = await getTranslations('Errors');

  try {
    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const favorites: any = user?.privateMetadata.favorites;

    if (favorites.some((product: string) => product === productId)) return;

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        favorites: !favorites ? [productId] : favorites.concat(productId),
      },
    });
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
