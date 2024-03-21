'use server';

import { ApiError, returnError } from '@/lib/api-error';
import { clerkClient, currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { action } from '../safe-action';

const schema = z.object({
  productId: z.string(),
});

export const deleteProductFromFavorites = action(schema, async ({
  productId,
}) => {
  const t = await getTranslations('Errors');

  try {
    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const favorites: any = user?.privateMetadata.favorites;

    if (!favorites.some((product: string) => product === productId)) return;

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        favorites: favorites.filter((product: string) =>
          product !== productId
        ),
      },
    });
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
