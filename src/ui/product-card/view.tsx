import React from 'react';
import { BuyButton, FavoriteButton } from '../';
import Link from 'next/link';
import Image from 'next/image';
import { inCartProduct, isFavoriteProduct } from '@/lib/data';
import { currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

import styles from './styles.module.scss';

interface IProps {
  name: string;
  image: string;
  price: string;
  productId: string;
  toProduct: string;
  amount: boolean;
  rating: number;
};

export const ProductCard: React.FC<IProps> = async (props) => {
  const t = await getTranslations();
  const {
    name,
    image,
    price,
    toProduct,
    productId,
    amount,
    rating,
  } = props;

  const user = await currentUser();
  const isFavorite = await isFavoriteProduct(productId);
  const inCart = await inCartProduct(productId);

  return (
    <div className={styles.card}>
      <Link href={toProduct} className={styles.cardLink}>
        <div className={styles.cardImageContainer}>
          <Image
            src={image}
            width={200}
            height={174}
            alt={name}
            className={styles.cardImage}
            priority={true}
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
