import { Breadcrumbs, ShowProducts } from '@/components';
import { getTranslations } from 'next-intl/server';
import { getFavoriteProducts } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { NoData } from '@/ui';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import styles from './styles.module.scss';

export default async function FavoritesPage() {
  const user = await currentUser();

  if (!user) redirect(routes.toSignIn());

  const t = await getTranslations();

  const favoriteProducts = await getFavoriteProducts();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.profile'), path: routes.toAccount() },
        { name: t('Breadcrumbs.favorites'), path: '' },
      ]}/>

      {favoriteProducts?.length ? (
        <ShowProducts products={favoriteProducts}/>
      ) : (
        <NoData
          text={t('NoData.noFavoriteProducts')}
          route={routes.toHome()}
          textLink={t('NoData.goHome')}
        />
      )}
    </main>
  );
}
