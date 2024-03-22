import React from 'react';
import { BuyButton, FavoriteButton } from '../';
import Link from 'next/link';
import Image from 'next/image';
import { inCartProduct, isFavoriteProduct } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { IReviewWithId } from '@/types/products-types';

import styles from './styles.module.scss';

interface IProps {
  isUser: boolean;
  name: string;
  image: string;
  price: string;
  productId: string;
  toProduct: string;
  amount: boolean;
  reviews: IReviewWithId[];
};

export const ProductCard: React.FC<IProps> = async (props) => {
  const t = await getTranslations();
  const {
    isUser,
    name,
    image,
    price,
    toProduct,
    productId,
    amount,
    reviews,
  } = props;

  const isFavorite = await isFavoriteProduct(productId);
  const inCart = await inCartProduct(productId);

  const totalRating = (reviews: IReviewWithId[]) => {
    if (reviews.length > 1) {
      let sum = 0;

      reviews.forEach(review => sum += review.rating);

      const rating = Math.round((sum / reviews.length) * 10) / 10 ;

      return rating;
    } else if (reviews.length === 1) {
      return reviews[0].rating;
    }

    return 0;
  };

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
            className={styles.cardImage}
            priority
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
            isUser={isUser}
          />
        </div>
        <div className={styles.cardBuy}>
          <h4>{price} ₴</h4>

          <BuyButton
            productId={productId}
            amount={amount}
            inCart={Boolean(inCart)}
            isUser={isUser}
          />
        </div>
      </div>
    </div>
  );
};
