'use server';

import { getTranslations } from 'next-intl/server';
import { connectToDb } from '../connect';
import { CategoryDto } from '../dtos';
import { CategoryModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { ApiError } from '../api-error';

export const getCategoryInfo = async (categoryParam: string) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    connectToDb();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const category = await CategoryModel.findOne({ name: categoryParam });

    if (!category) throw ApiError.NotFound(t('notFound'));

    return CategoryDto(category);
  } catch (error: any) {
    console.error('Failed to fetch category:', error);
  }
};
