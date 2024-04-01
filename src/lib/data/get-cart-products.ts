'use server';

import { connectToDb } from '../connect';
import { ProductDto } from '../dtos';
import { ProductModel } from '../models';
import { unstable_noStore as noStore } from 'next/cache';
import { categoryModelName } from '../models/model-names';
import { getTranslations } from 'next-intl/server';
import { ApiError } from '../api-error';
import { currentUser } from '@clerk/nextjs';
import { IClientProduct } from '@/types/products-types';
import { metadataCart } from '@/utils/metadata-names';
import { ICartProduct } from '@/types/user-types';

export const getCartProducts = async () => {
  noStore();

  try {
    const t = await getTranslations('Errors');

    connectToDb();

    const user = await currentUser();

    if (!user) throw ApiError.UnauthorizedError(t('unauth'));

    const cart: any = user?.privateMetadata[metadataCart];

    if (!cart || cart.length === 0)
      throw ApiError.NotFound(t('notFound'));

    const cartProducts: string[] = cart.map(
      (product: ICartProduct) => product.productId
    );

    const products = await ProductModel.find({
      _id: { $in: cartProducts },
    }).populate({
      path: 'category',
      select: 'name',
      model: categoryModelName,
    });

    if (!products) throw ApiError.NotFound(t('notFound'));

    const productsDto: IClientProduct[] =
      products.map(product => ProductDto(product));

    const productsDtoWithQuantity = productsDto.map(product => {
      const productInCart: ICartProduct = cart.find(
        (cartProduct: ICartProduct) => cartProduct.productId === product.id
      );

      return {
        ...JSON.parse(JSON.stringify(product)),
        quantity: productInCart.quantity,
      };

    });

    return productsDtoWithQuantity;
  } catch (error: any) {
    console.error('Failed to fetch products:', error);
  }
};
