import React from 'react';
import { routes } from '@/utils/navigation-routes';
import { IClientProduct } from '@/types/products-types';
import { ProductCard } from '@/ui';
import { User } from '@clerk/nextjs/server';

import styles from './styles.module.scss';

interface IProps {
  user: User | null;
  products: IClientProduct[];
}

export const ProductsList: React.FC<IProps> = ({ user, products }) => {
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
    </ul>
  );
};
