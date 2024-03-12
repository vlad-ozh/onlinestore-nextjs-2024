'use server';

import { ICategory } from '@/types/products';
import { connectToDb } from '../connect';
import { CategoryDto } from '../dtos/category-dto';
import { CategoryModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';

export const getCategoriesInfo = async () => {
  noStore();

  try {
    connectToDb();
    const categories = await CategoryModel.find();

    const categoriesDto = categories
      .map(category => {
        if (!category.brands.length) return;

        return CategoryDto(category);
      })
      .reduce((acc: ICategory[], category) => {
        if (category !== undefined) acc.push(category);

        return acc;
      }, []).reverse();

    return categoriesDto;
  } catch (error: any) {
    console.error('Failed to fetch categories:', error);
  }
};
