'use client';

import React from 'react';
import { QuantityInput } from '..';
import { TrashIcon } from '@heroicons/react/24/outline';
import { IClientProductCart } from '@/types/products-types';
import Link from 'next/link';
import Image from 'next/image';
import { useAction } from 'next-safe-action/hooks';
import { changeQuantityProduct, deleteProductFromCart } from '@/lib/actions';
import { routes } from '@/utils/navigation-routes';

import styles from './styles.module.scss';

interface IProps {
  product: IClientProductCart;
};

export const ProductCardInCart: React.FC<IProps> = ({ product }) => {
  const {
    execute: executeDelete,
    status: statusDelete,
  } = useAction(deleteProductFromCart);
  const {
    execute: executeChange,
  } = useAction(changeQuantityProduct);

  const productPrice = (product: IClientProductCart) => {
    return (product.price * product.quantity).toLocaleString();
  };

  return (
    <div className={styles.product}>
      <button
        disabled={statusDelete === 'executing'}
        onClick={() => executeDelete({productId: product.id})}
        className={styles.productRemoveButton}
      >
        <TrashIcon width={24} />
      </button>
      <Link
        href={routes.toProduct(product.category, product.brand, product.id)}
        className={styles.productLink}
      >
        <Image
          src={product.image[0]}
          width={0}
          height={0}
          sizes={'100vw'}
          alt={product.name}
          priority
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productInfo}>
        <h4 className={styles.productTitle}>
          <Link
            href={routes.toProduct(product.category, product.brand, product.id)}
            className={styles.productLink}
          >
            {product.name}
          </Link>
        </h4>
        <div className={styles.productPrice}>
          <QuantityInput
            onBlur={(value: number) => {
              if (value !== product.quantity) {
                executeChange({
                  productId: product.id,
                  amountProduct: product.amount,
                  newQuantity: value,
                });
              }
            }}
            value={product.quantity}
            max={product.amount}
          />
          <h4>
            {productPrice(product)} ₴
          </h4>
        </div>
      </div>
    </div>
  );
};
