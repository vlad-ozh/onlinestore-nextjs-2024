import {
  Breadcrumbs,
  ShowProducts,
  ShowPopularProducts,
} from '@/components';
import { getTranslations } from 'next-intl/server';
import { getPopularProductsByBrand } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products-types';
import { Metadata } from 'next';
import { ShowProductsSkeleton } from '@/skeletons';
import { Suspense } from 'react';

import styles from './styles.module.scss';

export async function generateMetadata(
  { params }: {params: { brand: string, }}
): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: params.brand === 'all' ? t('all') : params.brand,
  };
}

export default async function ProductsPage({ params, searchParams }: {
  params: {
    category: TCategoriesList,
    brand: string,
  };
  searchParams?: {
    page?: string;
  };
}) {
  const t = await getTranslations('Breadcrumbs');

  const popularProducts = await getPopularProductsByBrand(
    params.category,
    params.brand
  );

  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: routes.toCategories() },
        { name: t(params.category), path: routes.toCategory(params.category) },
        { name: params.brand === 'all' ? t('all') : params.brand, path: '' },
      ]}/>

      <Suspense fallback={<ShowProductsSkeleton />}>
        <ShowProducts
          categoryParam={params.category}
          brandParam={params.brand}
          currentPage={currentPage}
        />
      </Suspense>
      {popularProducts && <ShowPopularProducts
        popularProducts={popularProducts}
      />}
    </main>
  );
}
