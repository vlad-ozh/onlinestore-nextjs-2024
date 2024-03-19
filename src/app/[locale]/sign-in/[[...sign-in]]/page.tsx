import { useTranslations } from 'next-intl';
import { SignIn } from '@clerk/nextjs';
import { Breadcrumbs } from '@/components';
import { routes } from '@/utils/navigation-routes';

import styles from './styles.module.scss';

export default function SignInPage() {
  const t = useTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('signIn'), path: '' },
      ]}/>
      <div className={styles.mainForm}>
        <SignIn />
      </div>
    </main>
  );
}
