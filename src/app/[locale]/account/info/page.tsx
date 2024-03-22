import { Breadcrumbs } from '@/components';
import { getTranslations } from 'next-intl/server';
import { routes } from '@/utils/navigation-routes';
import { UserProfile, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import styles from './styles.module.scss';

export default async function AccountInfoPage() {
  const user = await currentUser();

  if (!user) redirect(routes.toSignIn());

  const t = await getTranslations();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.profile'), path: routes.toAccount() },
        { name: t('Breadcrumbs.profileInfo'), path: '' },
      ]}/>

      <div className={styles.mainInfo}>
        <UserProfile />
      </div>
    </main>
  );
}
