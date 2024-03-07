import { useTranslations } from 'next-intl';
// import { getTranslations } from 'next-intl/server';
// import { getUser } from '@/lib/data';

import styles from './styles.module.scss';

export default function Home() {
  const t = useTranslations('Index');
  // const t = await getTranslations('Index');

  // const users = await getUser();
  // console.log('🚀 ~ Home ~ post:', users);
  return (
    <main className={styles.main}>
      <h1>{t('title')}</h1>
    </main>
  );
}
