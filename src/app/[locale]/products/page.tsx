import { Breadcrumbs, ShowAllCategories } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { ShowCategorySkeleton } from '@/skeletons';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: t('products'),
  };
}

export default function AllCategoriesPage() {
  const t = useTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: '' },
      ]}/>

      <Suspense fallback={<ShowCategorySkeleton />}>
        <ShowAllCategories />
      </Suspense>
    </main>
  );
}
