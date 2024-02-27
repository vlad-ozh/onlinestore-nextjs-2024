import { useTranslations } from 'next-intl';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ChangeLanguageButton } from '@/ui';

export default function Login() {
  const t = useTranslations('Index');
  return (
    <main className={styles.main}>
      <h1>{t('login')}</h1>
      <Link href={'/'}
        style={{
          fontSize: '22px',
          backgroundColor: '#333',
          padding: '12px',
          display: 'block',
        }}
      >To home</Link>
      <ChangeLanguageButton />
    </main>
  );
}
