import React from 'react';
import { BuyButton, SelectButton } from '../';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import { useTranslations } from 'next-intl';

interface IProps {
  name: string;
  image: string;
  price: string;
  toProduct: string;
  // onSelect: () => void;
  // onRemoveSelected: () => void;
  // isSelect: boolean;
  // onCart: () => void;
  // isCart: boolean;
  // isUser: boolean;
  amount: boolean;
  rating: number;
};

export const ProductCard: React.FC<IProps> = (props) => {
  const t = useTranslations();
  const {
    name,
    image,
    price,
    toProduct,
    // onSelect,
    // onRemoveSelected,
    // isSelect,
    // onCart,
    // isCart,
    // isUser,
    amount,
    rating,
  } = props;

  return (
    <div className={styles.card}>
      <Link href={toProduct} className={styles.cardLink}>
        <div className={styles.cardImageContainer}>
          <Image className={styles.cardImage} src={image} alt={name} width={100} height={174} />
        </div>
      </Link>
      <div className={styles.cardInfo}>
        <h4 className={styles.cardTitle}>
          <Link href={toProduct} className={styles.cardLink}>
            {name}
          </Link>
        </h4>
        <div className={styles.cardMain}>
          {t('Card.rating')}: {rating}
          adsdsd
          {/* <SelectButton
            onSelect={onSelect}
            onRemoveSelected={onRemoveSelected}
            isSelect={isSelect}
            isUser={isUser}
          /> */}
        </div>
        <div className={styles.cardBuy}>
          <h4>{price} ₴</h4>
          sdsdsd
          {/* <BuyButton
            amount={amount}
            isCart={isCart}
            isUser={isUser}
            onCart={onCart}
            withText={false}
          /> */}
        </div>
      </div>
    </div>
  );
};
