'use server';

import { connectToDb } from '../connect';
import { ProductDto } from '../dtos';
import { CategoryModel, ProductModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { categoryModelName } from '../models/model-names';
import { IClientProduct } from '@/types/products-types';
import { ApiError } from '../api-error';
import { getTranslations } from 'next-intl/server';

export const getPopularProductsByBrand = async (
  categoryName: string,
  brand: string
) => {
  noStore();

  try {
    const t = await getTranslations('Errors');
    connectToDb();

    const category = await CategoryModel.findOne({ name: categoryName});

    if (!category) throw ApiError.NotFound(t('notFound'));

    let settingsFindProducts = {};

    if (brand === 'all') {
      settingsFindProducts = { category };
    } else {
      settingsFindProducts = { category, brand };
    }

    const products = await ProductModel.find(
      settingsFindProducts
    ).populate({
      path: 'category',
      select: 'name',
      model: categoryModelName,
    });

    if (!products) throw ApiError.NotFound(t('notFound'));

    products.sort((a, b) => b.salesCount - a.salesCount);

    const productsDto: IClientProduct[] = products.slice(0, 50).map(
      product => ProductDto(product)
    );

    return productsDto;
  } catch (error: any) {
    console.error('Failed to fetch products:', error);
  }
};
