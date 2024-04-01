import React from 'react';
import Link from 'next/link';
import { routes } from '@/utils/navigation-routes';
import { IClientProductCart } from '@/types/products-types';
import { ProductCardInCart } from '@/ui';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

interface IProps {
  products: IClientProductCart[];
}

export const CartContent: React.FC<IProps> = ({ products }) => {
  const t = useTranslations('Cart');

  const totalPrice = (products: IClientProductCart[]) => {
    let totalPrice = 0;

    products.forEach(product => totalPrice += product.price * product.quantity);

    return totalPrice.toLocaleString();
  };

  return (
    <div className={styles.cart}>
      <ul className={styles.cartList}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCardInCart product={product}/>
            </li>
          );
        })}
      </ul>

      <div className={styles.cartOrder}>
        <div className={styles.cartTotalPrice}>
          <h3 className={styles.cartText}>
            {t('totalPrice')}
          </h3>
          <h3 className={styles.cartPrice}>
            {totalPrice(products)} ₴
          </h3>
        </div>
        <Link
          href={routes.toHome()}
          className={styles.cartOrderLink}
        >
          {t('order')}
        </Link>
      </div>
    </div>
  );
};
