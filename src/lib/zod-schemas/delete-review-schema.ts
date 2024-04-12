import { z } from 'zod';

export const deleteReviewSchema = z.object({
  userId: z.any(),
  reviewId: z.any(),
  productId: z.any(),
});
