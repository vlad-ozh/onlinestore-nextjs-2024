import { Breadcrumbs, ShowHomeCategories } from '@/components';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

import { ProductCard } from '@/ui';
import { getProducts } from '@/lib/data';
import { routes } from '@/utils/navigation-routes';
import { IReviewWithId } from '@/types/products-types';
import { UserButton } from '@clerk/nextjs';

export default async function Home() {
  const t = await getTranslations('Breadcrumbs');
  const products = await getProducts();
  const product = products && products[25];

  const totalRating = (reviews: IReviewWithId[]) => {
    if (reviews.length > 0) {
      let sum = 0;

      reviews.forEach(review => sum += review.rating);

      const rating = Math.round((sum / reviews.length) * 10) / 10 ;

      return rating;
    }

    return 0;
  };

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: '' },
      ]}/>
      <ShowHomeCategories />
      <UserButton />
      {product && <ProductCard
        name={product.name}
        image={product.image[0]}
        price={product.price.toLocaleString()}
        toProduct={
          routes.toProduct(product.category, product.brand, product.id)
        }
        // onSelect={() => commonLogic.onSelect(user.id, productId)}
        // onRemoveSelected={
        //   () => commonLogic.onRemoveSelected(user.id, productId)
        // }
        // isSelect={
        //   commonLogic.isSelect(productId, user.selectedProducts)
        // }
        // onCart={() => commonLogic.onCart(user.id, productId)}
        // isCart={commonLogic.isCart(productId, user.cart)}
        // isUser={user.isAuth}
        amount={Boolean(product.amount)}
        rating={totalRating(product.reviews)}
      />}
    </main>
  );
}
