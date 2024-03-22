import { useTranslations } from 'next-intl';
import { SignUp } from '@clerk/nextjs';
import { Breadcrumbs } from '@/components';
import { routes } from '@/utils/navigation-routes';

import styles from './styles.module.scss';

export default function SignUpPage() {
  const t = useTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('signUp'), path: '' },
      ]}/>
      <div className={styles.mainForm}>
        <SignUp
          afterSignUpUrl={routes.toAccount()}
          afterSignInUrl={routes.toAccount()}
        />
      </div>
    </main>
  );
}
