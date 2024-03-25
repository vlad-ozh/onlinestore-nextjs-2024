import { useTranslations } from 'next-intl';
import { SignUp } from '@clerk/nextjs';
import { Breadcrumbs } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: t('signUp'),
  };
}

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
