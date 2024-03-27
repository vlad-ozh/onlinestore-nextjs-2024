'use client';

import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { routes } from '@/utils/navigation-routes';
import {
  addProductToFavorites,
  deleteFavoriteProduct,
} from '@/lib/actions';
import { useAction } from 'next-safe-action/hooks';

import styles from './styles.module.scss';

interface IProps {
  productId: string;
  isFavorite: boolean;
  isUser: boolean;
}

export const FavoriteButton: React.FC<IProps> = ({
  productId,
  isFavorite,
  isUser,
}) => {
  const {
    execute: executeAddProduct,
    status: statusAddProduct,
  } = useAction(addProductToFavorites);
  const {
    execute: executeDeleteProduct,
    status: statusDeleteProduct,
  } = useAction(deleteFavoriteProduct);

  return (
    <>
      {isUser ?
        (
          <button
            disabled={
              statusAddProduct === 'executing' ||
              statusDeleteProduct === 'executing'
            }
            onClick={async () =>
              isFavorite ?
                executeDeleteProduct({productId})
                :
                executeAddProduct({productId})
            }
            className={clsx(styles.favorite, {
              [styles.isFavorite]: isFavorite,
            })}
          >
            <HeartIcon
              width={24}
              className={clsx({ [styles.isFavorite]: isFavorite })}
            />
          </button>
        )
        :
        (
          <Link
            href={routes.toSignIn()}
            className={styles.favoriteLink}
          >
            <HeartIcon width={24} />
          </Link>
        )
      }
    </>
  );
};
