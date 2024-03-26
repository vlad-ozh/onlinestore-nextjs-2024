import React from 'react';
import { IClientProduct } from '@/types/products-types';
import { ProductCard } from '@/ui';
import { PopularProductsSlider } from '..';
import { routes } from '@/utils/navigation-routes';
import { currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

interface IProps {
  popularProducts: IClientProduct[];
}

export const ShowPopularProducts: React.FC<IProps> = async ({
  popularProducts,
}) => {
  const t = await getTranslations('Product');

  const user = await currentUser();

  return (
    <div className={styles.products}>
      <h2 className={styles.productsTitle}>
        {t('popularProducts')}
      </h2>
      <div className={styles.productsSlider}>
        <PopularProductsSlider>
          {popularProducts.map((product) => {
            const {
              id: productId,
              brand,
              category,
              image,
              name,
              price,
              reviews,
              amount,
            } = product;

            return (
              <li key={product.id} className={styles.productsItem}>
                <ProductCard
                  user={user}
                  name={name}
                  productId={productId}
                  image={image[0]}
                  price={price.toLocaleString()}
                  toProduct={
                    routes.toProduct(category, brand, productId)
                  }
                  amount={Boolean(amount)}
                  reviews={reviews}
                />
              </li>
            );
          })}
        </PopularProductsSlider>
      </div>
    </div>
  );
};
