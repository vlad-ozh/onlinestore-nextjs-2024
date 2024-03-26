import {
  Breadcrumbs,
  ShowHomeCategories,
  ShowPopularProducts,
} from '@/components';
import { getTranslations } from 'next-intl/server';
import { getPopularProducts } from '@/lib/data';

import styles from './styles.module.scss';

export default async function HomePage() {
  const t = await getTranslations('Breadcrumbs');

  const popularProducts = await getPopularProducts();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: '' },
      ]}/>
      <ShowHomeCategories />
      {popularProducts && <ShowPopularProducts
        popularProducts={popularProducts}
      />}
    </main>
  );
}
