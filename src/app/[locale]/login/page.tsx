import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export default function Login() {
  const t = useTranslations();
  return (
    <main className={styles.main}>
      <h1>{t('Breadcrumbs.login')}</h1>
    </main>
  );
}
