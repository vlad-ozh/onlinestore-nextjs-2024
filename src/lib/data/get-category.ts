'use server';

import { connectToDb } from '../connect';
import { CategoryDto } from '../dtos/category-dto';
import { CategoryModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';

export const getCategoryInfo = async (categoryParam: string) => {
  noStore();

  try {
    connectToDb();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const category = await CategoryModel.findOne({ name: categoryParam });

    if (!category) return undefined;

    return CategoryDto(category);
  } catch (error: any) {
    console.error('Failed to fetch category:', error);
  }
};
