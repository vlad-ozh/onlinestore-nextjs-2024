'use server';

import { connectToDb } from '../connect';
import { ProductDto } from '../dtos';
import { ProductModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { categoryModelName } from '../models/model-names';
import { getTranslations } from 'next-intl/server';
import { ApiError } from '../api-error';
import { IClientProduct } from '@/types/products-types';

export const getProduct = async (productId: string) => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    connectToDb();

    const product = await ProductModel.findOne({
      _id: productId,
    }).populate({
      path: 'category',
      select: 'name',
      model: categoryModelName,
    });

    if (!product) throw ApiError.NotFound(t('notFound'));

    const productDto: IClientProduct = ProductDto(product);

    return productDto;
  } catch (error: any) {
    console.error('Failed to fetch product:', error);
  }
};
