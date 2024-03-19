'use server';

import { connectToDb } from '../connect';
import { ProductDto } from '../dtos';
import { ProductModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { categoryModelName } from '../models/model-names';

export const getProducts = async () => {
  noStore();

  try {
    connectToDb();

    const products = await ProductModel.find().populate({
      path: 'category',
      select: 'name',
      model: categoryModelName,
    });

    const productsDto = products.map(product => ProductDto(product));

    return productsDto;
  } catch (error: any) {
    console.error('Failed to fetch categories:', error);
  }
};
