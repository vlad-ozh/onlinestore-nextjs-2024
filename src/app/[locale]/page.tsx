// import { getUser } from '@/lib/data';
import { Breadcrumbs, ShowCategories } from '@/components';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export default function Home() {
  const t = useTranslations('Breadcrumbs');
  // const users = await getUser();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: '' },
      ]}/>
      <ShowCategories />
    </main>
  );
}
