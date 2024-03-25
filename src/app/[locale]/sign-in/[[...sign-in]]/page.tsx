import { useTranslations } from 'next-intl';
import { SignIn } from '@clerk/nextjs';
import { Breadcrumbs } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: t('signIn'),
  };
}

export default function SignInPage() {
  const t = useTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('signIn'), path: '' },
      ]}/>
      <div className={styles.mainForm}>
        <SignIn
          afterSignInUrl={routes.toAccount()}
          afterSignUpUrl={routes.toAccount()}
        />
      </div>
    </main>
  );
}
