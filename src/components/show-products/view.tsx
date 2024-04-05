import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { getProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProductsList, ProductsPagination } from '..';
import { productsOnOnePage } from '@/utils/products-on-one-page';

interface IProps {
  categoryParam: string;
  brandParam: string;
  currentPage: number;
}

export const ShowProducts: React.FC<IProps> = async ({
  categoryParam,
  brandParam,
  currentPage,
}) => {
  const user = await currentUser();
  const products = await getProducts(categoryParam, brandParam);

  if (!products?.length) notFound();

  return (
    <>
      <ProductsList
        user={user}
        products={productsOnOnePage(products, currentPage)}
      />
      {
        products.length > 10
        &&
        <ProductsPagination totalProducts={products.length} />
      }
    </>
  );
};
