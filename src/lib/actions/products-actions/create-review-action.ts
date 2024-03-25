'use server';

import { currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { action } from '../safe-action';
import { getTranslations } from 'next-intl/server';
import { ApiError, returnError } from '@/lib/api-error';
import { createReviewSchema } from '@/lib/zod-schemas';
import { ProductModel } from '@/lib/models';
import { Types } from 'mongoose';

export const createReview = action(createReviewSchema, async ({
  rating,
  text,
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


    const getDate = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    };

    product.reviews.unshift({
      _id: new Types.ObjectId(),
      userName: user.firstName ?
        user.firstName
        :
        user.emailAddresses[0].emailAddress,
      userId: user.id,
      rating: +rating,
      text,
      date: getDate(),
    });

    await product.save();
  } catch (error) {
    return await returnError(error);
  }

  revalidatePath('/');
});
