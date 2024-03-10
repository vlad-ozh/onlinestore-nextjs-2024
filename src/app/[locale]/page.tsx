import { Breadcrumbs, ShowCategories } from '@/components';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

export default async function Home() {
  const t = await getTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: '' },
      ]}/>
      <ShowCategories />
    </main>
  );
}
