import {
  Breadcrumbs,
  ProductsPagination,
  ShowProducts,
} from '@/components';
import { getTranslations } from 'next-intl/server';
import { getSearchProducts } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { IClientProduct } from '@/types/products-types';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { NoData } from '@/ui';

import styles from './styles.module.scss';

export async function generateMetadata({ searchParams }: {
  searchParams?: { query?: string; };
}): Promise<Metadata> {
  return {
    title: searchParams?.query || '',
  };
}

export default async function SeacrhPage({ searchParams }: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  if (!searchParams?.query) notFound();

  const products = await getSearchProducts(searchParams?.query);

  const t = await getTranslations();

  const currentPage = Number(searchParams?.page) || 1;

  const productsOnOnePage = (products: IClientProduct[]) => {
    const pageSize = 10;
    const skip = (currentPage - 1) * pageSize;
    const prods = products.slice(skip, skip + 10);

    return prods;
  };

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.products'), path: routes.toCategories() },
        {
          name: t('Breadcrumbs.search', { search: searchParams?.query }),
          path: '',
        },
      ]}/>

      {products?.length ? (
        <>
          <ShowProducts products={productsOnOnePage(products)}/>
          <ProductsPagination totalProducts={products.length}/>
        </>
      ) : (
        <NoData
          text={t('NoData.noProducts')}
          route={routes.toHome()}
          textLink={t('NoData.goHome')}
        />
      )}
    </main>
  );
}
