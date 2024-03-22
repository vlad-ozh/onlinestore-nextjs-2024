import { Breadcrumbs } from '@/components';
import { getTranslations } from 'next-intl/server';
import { routes } from '@/utils/navigation-routes';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { AccountContent } from '@/components/account-content';

import styles from './styles.module.scss';

export default async function AccountPage() {
  const user = await currentUser();

  if (!user) redirect(routes.toSignIn());

  const t = await getTranslations();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.profile'), path: '' },
      ]}/>

      <AccountContent userName={
        user.firstName ? user.firstName : t('Account.user')
      }/>
    </main>
  );
}
