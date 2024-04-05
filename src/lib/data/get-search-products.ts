'use server';

import { connectToDb } from '../connect';
import { ProductDto } from '../dtos';
import { ProductModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { categoryModelName } from '../models/model-names';
import { getTranslations } from 'next-intl/server';
import { ApiError } from '../api-error';
import { IClientProduct } from '@/types/products-types';

export const getSearchProducts = async (searchData: string) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    connectToDb();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const products = await ProductModel.find().populate({
      path: 'category',
      select: 'name',
      model: categoryModelName,
    });

    if (!products) throw ApiError.NotFound(t('notFound'));

    const productsFound = products.filter(product =>
      product.name.toLowerCase().includes(searchData.toLowerCase())
    );

    const productsDto: IClientProduct[] =
      productsFound.map(product => ProductDto(product));

    return productsDto;
  } catch (error: any) {
    console.error('Failed to fetch products:', error);
  }
};
