'use server';

import { getTranslations } from 'next-intl/server';
import { connectToDb } from '../connect';
import { CategoryDto } from '../dtos';
import { CategoryModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { ApiError } from '../api-error';

export const getCategoriesInfo = async () => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    connectToDb();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const categories = await CategoryModel.find();

    if (!categories) throw ApiError.NotFound(t('notFound'));

    const categoriesDto = categories.map(category => CategoryDto(category));

    return categoriesDto;
  } catch (error: any) {
    console.error('Failed to fetch categories:', error);
  }
};
