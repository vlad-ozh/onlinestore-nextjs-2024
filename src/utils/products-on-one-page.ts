import { IClientProduct } from '@/types/products-types';

export const productsOnOnePage = (
  products: IClientProduct[],
  currentPage: number
) => {
  const pageSize = 10;
  const skip = (currentPage - 1) * pageSize;
  const prods = products.slice(skip, skip + 10);

  return prods;
};
