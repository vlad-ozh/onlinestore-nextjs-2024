import { Breadcrumbs, ShowSearchProducts } from '@/components';
import { getTranslations } from 'next-intl/server';
import { routes } from '@/utils/navigation-routes';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { ShowProductsSkeleton } from '@/skeletons';

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

  const t = await getTranslations();

  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.products'), path: routes.toCategories() },
        {
          name: t('Breadcrumbs.search', { search: searchParams.query }),
          path: '',
        },
      ]}/>

      <Suspense fallback={<ShowProductsSkeleton />}>
        <ShowSearchProducts
          searchQuery={searchParams.query}
          currentPage={currentPage}
        />
      </Suspense>
    </main>
  );
}
