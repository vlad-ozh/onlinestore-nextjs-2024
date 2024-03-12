import { Breadcrumbs, ShowAllCategories } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { ShowCategorySkeleton } from '@/skeletons';

import styles from './styles.module.scss';

export default function Products() {
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
