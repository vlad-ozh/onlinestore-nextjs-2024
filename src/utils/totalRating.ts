import { IReviewWithId } from '@/types/products-types';

export const totalRating = (reviews: IReviewWithId[]) => {
  if (reviews.length > 1) {
    let sum = 0;

    reviews.forEach(review => sum += review.rating);

    const rating = Math.round((sum / reviews.length) * 10) / 10 ;

    return rating;
  } else if (reviews.length === 1) {
    return reviews[0].rating;
  }

  return 0;
};
