import { z } from 'zod';

export const createReviewSchema = z.object({
  text: z.string().trim().min(3),
  rating: z.string().min(1, 'Choose a rating'),
  productId: z.any(),
});
