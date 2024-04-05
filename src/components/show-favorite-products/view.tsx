import React from 'react';
import { getFavoriteProducts } from '@/lib/data';
import { ProductsList, ProductsPagination } from '..';
import { productsOnOnePage } from '@/utils/products-on-one-page';
import { NoData } from '@/ui';
import { routes } from '@/utils/navigation-routes';
import { getTranslations } from 'next-intl/server';
import { User } from '@clerk/nextjs/server';

interface IProps {
  currentPage: number;
  user: User | null;
}

export const ShowFavoriteProducts: React.FC<IProps> = async ({
  user,
  currentPage,
}) => {
  const t = await getTranslations();
  const products = await getFavoriteProducts();

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
          text={t('NoData.noFavoriteProducts')}
          route={routes.toHome()}
          textLink={t('NoData.goHome')}
        />
      )}
    </>
  );
};
