import React from 'react';
import { routes } from '@/utils/navigation-routes';
import { IClientProduct } from '@/types/products-types';
import { ProductCard } from '@/ui';

import styles from './styles.module.scss';

interface IProps {
  products: IClientProduct[];
}

export const ShowProducts: React.FC<IProps> = async ({ products }) => {

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
          <li key={productId.toString()}>
            <ProductCard
              name={name}
              productId={productId.toString()}
              image={image[0]}
              price={price.toLocaleString()}
              toProduct={
                routes.toProduct(category, brand, productId.toString())
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