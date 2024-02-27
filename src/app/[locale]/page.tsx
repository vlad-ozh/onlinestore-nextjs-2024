// import { useTranslations } from 'next-intl';
import { ChangeLanguageButton } from '@/ui';
import styles from './styles.module.scss';
import { getTranslations } from 'next-intl/server';
// import { getUser } from '@/lib/data';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ChangeDynamicThemeButton = dynamic(
  () => import('@/ui/change-theme-button/view'),
  { ssr: false }
);

export default async function Home() {
  // const t = useTranslations('Index');
  const t = await getTranslations('Index');

  // const users = await getUser();
  // console.log('🚀 ~ Home ~ post:', users);
  return (
    <main className={styles.main}>
      <h1>{t('title')}</h1>
      <Link href={'/login'}
        style={{
          fontSize: '22px',
          backgroundColor: '#333',
          padding: '12px',
          display: 'block',
        }}
      >To login</Link>
      <div>
        <ChangeDynamicThemeButton />
        <ChangeLanguageButton />
      </div>
    </main>
  );
}
