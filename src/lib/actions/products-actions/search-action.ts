'use server';

import { action } from '../safe-action';
import { z } from 'zod';
// import { connectToDb } from '../../connect';

const schema = z.object({
  value: z.string(),
});


export const searchProducts = action(schema, async (value) => {

});
