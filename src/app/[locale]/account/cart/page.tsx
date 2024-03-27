import { Breadcrumbs, ShowProducts } from '@/components';
import { getTranslations } from 'next-intl/server';
import { getCartProducts } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { NoData } from '@/ui';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

import styles from './styles.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: t('cart'),
  };
}

export default async function CartPage() {
  const user = await currentUser();

  if (!user) redirect(routes.toSignIn());

  const t = await getTranslations();

  const cartProducts = await getCartProducts();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.profile'), path: routes.toAccount() },
        { name: t('Breadcrumbs.cart'), path: '' },
      ]}/>

      {cartProducts?.length ? (
        <ShowProducts products={cartProducts}/>
      ) : (
        <NoData
          text={t('NoData.noCartProducts')}
          route={routes.toHome()}
          textLink={t('NoData.goHome')}
        />
      )}
    </main>
  );
}
