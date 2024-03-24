import { Breadcrumbs, ProductMain } from '@/components';
import { getTranslations } from 'next-intl/server';
import { getProduct } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { TCategoriesList } from '@/types/products-types';
import { notFound } from 'next/navigation';
import { ProductSpecs } from '@/components';
import { currentUser } from '@clerk/nextjs';

import styles from './styles.module.scss';

export default async function ProductPage({ params }: {
  params: {
    category: TCategoriesList,
    brand: string,
    productId: string,
  };
}) {
  const user = await currentUser();
  const product = await getProduct(params.productId);

  if (!product) notFound();

  const t = await getTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: routes.toCategories() },
        { name: t(params.category), path: routes.toCategory(params.category) },
        {
          name: params.brand === 'all' ? t('all') : params.brand,
          path: routes.toProducts(params.category, params.brand),
        },
        { name: product.name, path: '' },
      ]} />

      <ProductMain isUser={Boolean(user)} product={product}/>
      <ProductSpecs specs={product.characteristics}/>

    </main>
  );
}
