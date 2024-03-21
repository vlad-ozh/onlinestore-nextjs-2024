import { Breadcrumbs, ShowHomeCategories } from '@/components';
import { getTranslations } from 'next-intl/server';
import { ProductCard } from '@/ui';
import { getProducts } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { UserButton } from '@clerk/nextjs';

import styles from './styles.module.scss';

export default async function Home() {
  const t = await getTranslations('Breadcrumbs');
  const products = await getProducts();
  const product = products && products[39];

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: '' },
      ]}/>
      <ShowHomeCategories />
      <UserButton />
      {product && <ProductCard
        name={product.name}
        productId={product.id.toString()}
        image={product.image[0]}
        price={product.price.toLocaleString()}
        toProduct={
          routes.toProduct(product.category, product.brand, product.id)
        }
        amount={Boolean(product.amount)}
        reviews={product.reviews}
      />}
    </main>
  );
}
