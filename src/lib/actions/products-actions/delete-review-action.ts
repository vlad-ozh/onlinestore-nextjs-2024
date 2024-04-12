'use server';

import { currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { action } from '../safe-action';
import { getTranslations } from 'next-intl/server';
import { ApiError, returnError } from '@/lib/api-error';
import { ProductModel } from '@/lib/models';
import { deleteReviewSchema } from '@/lib/zod-schemas';

export const deleteReview = action(deleteReviewSchema, async ({
  userId,
  reviewId,
  productId,
}) => {
  try {
    const t = await getTranslations('Errors');

    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const product = await ProductModel.findOne({
      _id: productId,
    });

    if (!product) throw ApiError.NotFound(t('notFound'));

    product.reviews = product.reviews.filter((review) => {
      if (review.userId === userId) return review._id.toString() !== reviewId;
      return review;
    });

    await product.save();
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
