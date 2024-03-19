import React from 'react';
import {
  ShoppingCartIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { routes } from '@/utils/navigation-routes';

import style from './style.module.scss';

interface IProps {
  onCart: () => void;
  isCart: boolean;
  isUser: boolean;
  amount: boolean;
  withText: boolean;
}

export const BuyButton: React.FC<IProps> = ({
  onCart,
  isCart,
  isUser,
  amount,
  withText,
}) => {
  const t = useTranslations('Card');

  return (
    <>
      {!isCart && isUser && (<button
        onClick={onCart}
        disabled={!amount}
        className={clsx(style.cart, {
          [style.cartNoActive]: !amount,
        })}
      >
        <ShoppingCartIcon /> {withText && t('buy')}
      </button>)}

      {isCart && (<Link
        href={routes.toCart()}
        className={style.cartLink}
      >
        <CheckCircleIcon /> {withText && t('inCart')}
      </Link>)}

      {!isUser && (<Link
        href={routes.toSignIn()}
        className={clsx(style.cartLink, {
          [style.cartNoActive]: !amount,
        })}
      >
        <ShoppingCartIcon /> {withText && t('buy')}
      </Link>)}
    </>
  );
};
