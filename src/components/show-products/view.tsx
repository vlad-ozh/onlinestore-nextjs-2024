import React from 'react';
import { routes } from '@/utils/navigation-routes';
import { IClientProduct } from '@/types/products-types';
import { ProductCard } from '@/ui';
import { currentUser } from '@clerk/nextjs';

import styles from './styles.module.scss';

interface IProps {
  products: IClientProduct[];
}

export const ShowProducts: React.FC<IProps> = async ({ products }) => {
  const user = await currentUser();

  return (
    <ul className={styles.productsList}>
      {products.map((product) => {
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
          <li key={productId}>
            <ProductCard
              isUser={Boolean(user)}
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
    </ul>
  );
};
