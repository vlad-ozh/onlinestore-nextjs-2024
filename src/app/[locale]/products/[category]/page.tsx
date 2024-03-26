import { Breadcrumbs, ShowCategory, ShowPopularProducts } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products-types';
import { Suspense } from 'react';
import { ShowCategorySkeleton } from '@/skeletons';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getCategoryInfo, getPopularProductsByCategory } from '@/lib/data';

import styles from './styles.module.scss';

export async function generateMetadata(
  { params }: {params: { category: TCategoriesList }}
): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  const category = await getCategoryInfo(params.category);

  return {
    title: category ? t(category.name) : '...',
  };
}

export default async function CategoryPage({ params }: {
  params: { category: TCategoriesList }
}) {
  const categoryParam = params.category;

  const t = await getTranslations('Breadcrumbs');

  const popularProducts = await getPopularProductsByCategory(params.category);

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: routes.toCategories() },
        { name: t(categoryParam), path: '' },
      ]} />

      <Suspense fallback={<ShowCategorySkeleton />}>
        <ShowCategory categoryParam={categoryParam} />
      </Suspense>

      {popularProducts && <ShowPopularProducts
        popularProducts={popularProducts}
      />}
    </main>
  );
}
