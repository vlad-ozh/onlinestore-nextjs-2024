'use server';

import { connectToDb } from '../connect';
import { ProductDto } from '../dtos';
import { ProductModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { categoryModelName } from '../models/model-names';
import { IClientProduct } from '@/types/products-types';

export const getPopularProducts = async () => {
  noStore();

  try {
    connectToDb();

    const products = await ProductModel.find().populate({
      path: 'category',
      select: 'name',
      model: categoryModelName,
    });

    products.sort((a, b) => b.salesCount - a.salesCount);

    const productsDto: IClientProduct[] = products.slice(0, 50).map(
      product => ProductDto(product)
    );

    return productsDto;
  } catch (error: any) {
    console.error('Failed to fetch products:', error);
  }
};
