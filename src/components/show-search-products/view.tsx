import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { getSearchProducts } from '@/lib/data';
import { ProductsList, ProductsPagination } from '..';
import { productsOnOnePage } from '@/utils/products-on-one-page';
import { NoData } from '@/ui';
import { routes } from '@/utils/navigation-routes';
import { getTranslations } from 'next-intl/server';

interface IProps {
  searchQuery: string;
  currentPage: number;
}

export const ShowSearchProducts: React.FC<IProps> = async ({
  searchQuery,
  currentPage,
}) => {
  const t = await getTranslations();
  const user = await currentUser();
  const products = await getSearchProducts(searchQuery);

  return (
    <>
      {products?.length ? (
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
      ) : (
        <NoData
          text={t('NoData.noProducts')}
          route={routes.toHome()}
          textLink={t('NoData.goHome')}
        />
      )}
    </>
  );
};
