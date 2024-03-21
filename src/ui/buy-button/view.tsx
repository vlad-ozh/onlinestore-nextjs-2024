'use client';

import React from 'react';
import { ShoppingCartIcon, CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { routes } from '@/utils/navigation-routes';
import { addProductToCart } from '@/lib/actions';
import { useAction } from 'next-safe-action/hooks';

import styles from './styles.module.scss';

interface IProps {
  productId: string;
  inCart: boolean;
  isUser: boolean;
  amount: boolean;
  withText?: {
    buyText: string;
    inCartText: string;
  };
}

export const BuyButton: React.FC<IProps> = ({
  productId,
  inCart,
  isUser,
  amount,
  withText,
}) => {
  const { execute, status } = useAction(addProductToCart);

  return (
    <>
      {isUser ? (
        !inCart ? (
          <button
            onClick={async () => execute({productId})}
            disabled={!amount || status === 'executing'}
            className={clsx(styles.cart, {
              [styles.cartNoActive]: !amount,
            })}
          >
            <ShoppingCartIcon width={24} /> {withText && withText.buyText}
          </button>
        ) : (
          <Link
            href={routes.toCart()}
            className={styles.cartLink}
          >
            <CheckIcon width={24} /> {withText && withText.inCartText}
          </Link>
        )
      ) : (
        <Link
          href={routes.toSignIn()}
          className={clsx(styles.cartLink, {
            [styles.cartNoActive]: !amount,
          })}
        >
          <ShoppingCartIcon width={24} /> {withText && withText.buyText}
        </Link>
      )}
    </>
  );
};
