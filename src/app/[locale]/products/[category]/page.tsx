import { Breadcrumbs, ShowCategory } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products';
import { getCategoryInfo } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import styles from './styles.module.scss';

export default async function Category({ params }: {
  params: { category: TCategoriesList }
}) {
  const categoryParam = params.category;
  const category = await getCategoryInfo(categoryParam);

  const t = await getTranslations('Breadcrumbs');

  if (!category) notFound();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: routes.toCategories() },
        { name: t(category.name), path: '' },
      ]} />

      <ShowCategory category={category} categoryParam={categoryParam} />
    </main>
  );
}
