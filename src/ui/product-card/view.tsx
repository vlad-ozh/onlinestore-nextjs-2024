import React from 'react';
import { BuyButton, FavoriteButton } from '../';
import Link from 'next/link';
import Image from 'next/image';
import { inCartProduct, isFavoriteProduct } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { IReviewWithId } from '@/types/products-types';
import { totalRating } from '@/utils/totalRating';
import { User } from '@clerk/nextjs/server';

import styles from './styles.module.scss';

interface IProps {
  user: User | null;
  name: string;
  image: string;
  price: string;
  productId: string;
  toProduct: string;
  amount: boolean;
  reviews: IReviewWithId[];
};

export const ProductCard: React.FC<IProps> = async (props) => {
  const {
    user,
    name,
    image,
    price,
    toProduct,
    productId,
    amount,
    reviews,
  } = props;

  const t = await getTranslations();

  const isFavorite = user ? await isFavoriteProduct(productId, user) : false;
  const inCart = user ? await inCartProduct(productId, user) : false;

  const rating = totalRating(reviews);

  return (
    <div className={styles.card}>
      <Link href={toProduct} className={styles.cardLink}>
        <div className={styles.cardImageContainer}>
          <Image
            src={image}
            width={0}
            height={0}
            sizes={'100vw'}
            alt={name}
            priority
            className={styles.cardImage}
          />
        </div>
      </Link>
      <div className={styles.cardInfo}>
        <h4 className={styles.cardTitle}>
          <Link href={toProduct} className={styles.cardLink}>
            {name}
          </Link>
        </h4>
        <div className={styles.cardMain}>
          {t('Card.rating')}: {rating ? rating : '-'}

          <FavoriteButton
            productId={productId}
            isFavorite={Boolean(isFavorite)}
            isUser={Boolean(user)}
          />
        </div>
        <div className={styles.cardBuy}>
          <h4>{price} ₴</h4>

          <BuyButton
            productId={productId}
            amount={amount}
            inCart={Boolean(inCart)}
            isUser={Boolean(user)}
          />
        </div>
      </div>
    </div>
  );
};
