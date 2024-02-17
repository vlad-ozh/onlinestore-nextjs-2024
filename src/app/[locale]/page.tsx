import { useTranslations } from 'next-intl';
import { ChangeThemeButton } from '@/ui';
import styles from './styles.module.scss';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <h1>{t('title')}</h1>
      <div><ChangeThemeButton /></div>
      <div className={styles.block}></div>
    </main>
  );
}
