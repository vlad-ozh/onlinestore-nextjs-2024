import { Breadcrumbs, ShowCategory } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';
import { Suspense } from 'react';
import { ShowCategorySkeleton } from '@/skeletons';

export default function Category({ params }: {
  params: { category: TCategoriesList }
}) {
  const categoryParam = params.category;

  const t = useTranslations('Breadcrumbs');

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
    </main>
  );
}
