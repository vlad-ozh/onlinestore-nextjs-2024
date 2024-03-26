import React from 'react';
import { BuyButton, FavoriteButton } from '@/ui';
import { IClientProduct } from '@/types/products-types';
import { getTranslations } from 'next-intl/server';
import { inCartProduct, isFavoriteProduct } from '@/lib/data';
import { totalRating } from '@/utils/totalRating';
import { ProductSlider } from '..';
import Image from 'next/image';
import { User } from '@clerk/nextjs/server';

import styles from './styles.module.scss';

interface IProps {
  user: User | null;
  product: IClientProduct;
}

export const ProductMain: React.FC<IProps> = async (props) => {
  const {
    user,
    product,
  } = props;

  const t = await getTranslations('Product');

  const isFavorite = await isFavoriteProduct(product.id, user);
  const inCart = await inCartProduct(product.id, user);

  const amountOfProduct = Boolean(product.amount);

  const rating = totalRating(product.reviews);

  return (
    <>
      <h2 className={styles.productTitle}>
        {product.name}
      </h2>
      <div className={styles.productMain}>
        <div className={styles.productMainImages}>
          <ProductSlider>
            {product.image.map((image, index) => {
              return (
                <li key={index} className={styles.productMainSlide} >
                  <Image
                    src={image}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    alt={product.name}
                    priority
                    className={styles.productMainImage}
                  />
                </li>
              );
            })}
          </ProductSlider>
        </div>

        <div className={styles.productMainInfo}>
          <div className={styles.productMainInfoInner}>
            <div className={styles.productMainInfoRating}>
              {t('rating')}: {rating ? rating : '-'}
            </div>
            <div className={styles.productMainInfoAvailable}>
              {amountOfProduct ?
                t('available')
                :
                t('notAvailable')
              }

              <FavoriteButton
                isUser={Boolean(user)}
                isFavorite={Boolean(isFavorite)}
                productId={product.id}
              />
            </div>
            <div className={styles.productMainInfoBuy}>
              <h3 className={styles.productMainInfoPrice}>
                {product.price.toLocaleString()} ₴
              </h3>
              <BuyButton
                productId={product.id}
                amount={amountOfProduct}
                inCart={Boolean(inCart)}
                isUser={Boolean(user)}
                withText={{ buyText: '', inCartText: '' }}
              />
            </div>
            <div className={styles.productMainInfoDescription}>
              <h3 className={styles.productMainInfoDescTitle}>
                {t('description')}
              </h3>
              <p>{t(`descriptions.${product.description}`)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
