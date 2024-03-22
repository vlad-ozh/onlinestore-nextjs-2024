import { Breadcrumbs, ProductsPagination, ShowProducts } from '@/components';
import { getTranslations } from 'next-intl/server';
import { getProducts } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products-types';
import { notFound } from 'next/navigation';

import styles from './styles.module.scss';

export default async function ProductsPage({ params, searchParams }: {
  params: {
    category: TCategoriesList,
    brand: string,
  };
  searchParams?: {
    page?: string;
  };
}) {
  const t = await getTranslations('Breadcrumbs');

  const products = await getProducts(params.category, params.brand);

  if (!products?.length) notFound();

  const currentPage = Number(searchParams?.page) || 1;

  const productsOnOnePage = () => {
    const pageSize = 10;
    const skip = (currentPage - 1) * pageSize;
    const prods = products.slice(skip, skip + 10);

    return prods;
  };

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: routes.toCategories() },
        { name: t(params.category), path: routes.toCategory(params.category) },
        { name: params.brand, path: '' },
      ]}/>

      <ShowProducts products={productsOnOnePage()}/>
      <ProductsPagination totalProducts={products.length}/>
    </main>
  );
}
