'use server';

import { connectToDb } from '../connect';
import { CategoryDto } from '../dtos';
import { CategoryModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';

export const getCategoriesInfo = async () => {
  noStore();

  try {
    connectToDb();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const categories = await CategoryModel.find();

    const categoriesDto = categories.map(category => CategoryDto(category));

    return categoriesDto;
  } catch (error: any) {
    console.error('Failed to fetch categories:', error);
  }
};
