import { Breadcrumbs, ShowFavoriteProducts } from '@/components';
import { getTranslations } from 'next-intl/server';
import { routes } from '@/utils/navigation-routes';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { ShowProductsSkeleton } from '@/skeletons';

import styles from './styles.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: t('favorites'),
  };
}

export default async function FavoritesPage({ searchParams }: {
  searchParams?: {
    page?: string;
  };
}) {
  const user = await currentUser();

  if (!user) redirect(routes.toSignIn());

  const t = await getTranslations();

  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.profile'), path: routes.toAccount() },
        { name: t('Breadcrumbs.favorites'), path: '' },
      ]}/>

      <Suspense fallback={<ShowProductsSkeleton />}>
        <ShowFavoriteProducts user={user} currentPage={currentPage}/>
      </Suspense>
    </main>
  );
}
