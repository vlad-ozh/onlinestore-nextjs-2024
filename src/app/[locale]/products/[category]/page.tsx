import { Breadcrumbs, ShowCategory } from '@/components';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products';
import { getCategoryInfo } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { NoData } from '@/ui';

import styles from './styles.module.scss';

export default async function Category({ params }: {
  params: { category: TCategoriesList }
}) {
  const categoryParam = params.category;
  const category = await getCategoryInfo(categoryParam);

  const tBreadcrumbs = await getTranslations('Breadcrumbs');
  const tCategory = await getTranslations('Category');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: tBreadcrumbs('home'), path: routes.toHome() },
        { name: tBreadcrumbs('products'), path: routes.toCategories() },
        { name: category ? tBreadcrumbs(category.name) : '...', path: '' },
      ]} />

      {category ?
        <ShowCategory category={category} categoryParam={categoryParam} />
        :
        <NoData text={tCategory('noCategory')} />
      }
    </main>
  );
}
