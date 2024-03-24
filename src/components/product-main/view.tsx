import React from 'react';
import { BuyButton, FavoriteButton } from '@/ui';
import { IClientProduct } from '@/types/products-types';
import { getTranslations } from 'next-intl/server';
import { inCartProduct, isFavoriteProduct } from '@/lib/data';
import { totalRating } from '@/utils/totalRating';
import { ProductSlider } from '..';
import Image from 'next/image';

import style from './style.module.scss';

interface IProps {
  isUser: boolean;
  product: IClientProduct;
}

export const ProductMain: React.FC<IProps> = async (props) => {
  const {
    isUser,
    product,
  } = props;

  const t = await getTranslations('Product');

  const isFavorite = await isFavoriteProduct(product.id);
  const inCart = await inCartProduct(product.id);

  const amountOfProduct = Boolean(product.amount);

  const rating = totalRating(product.reviews);

  return (
    <>
      <h2 className={style.productTitle}>
        {product.name}
      </h2>
      <div className={style.productMain}>
        <div className={style.productMainImages}>
          <ProductSlider>
            {product.image.map((image, index) => {
              return (
                <li key={index} className={style.productMainSlide} >
                  <Image
                    src={image}
                    width={0}
                    height={0}
                    sizes={'100vw'}
                    alt={product.name}
                    priority
                    className={style.productMainImage}
                  />
                </li>
              );
            })}
          </ProductSlider>
        </div>

        <div className={style.productMainInfo}>
          <div className={style.productMainInfoInner}>
            <div className={style.productMainInfoRating}>
              {t('rating')}: {rating ? rating : '-'}
            </div>
            <div className={style.productMainInfoAvailable}>
              {amountOfProduct ?
                t('available')
                :
                t('notAvailable')
              }

              <FavoriteButton
                isUser={isUser}
                isFavorite={Boolean(isFavorite)}
                productId={product.id}
              />
            </div>
            <div className={style.productMainInfoBuy}>
              <h3 className={style.productMainInfoPrice}>
                {product.price.toLocaleString()} ₴
              </h3>
              <BuyButton
                productId={product.id}
                amount={amountOfProduct}
                inCart={Boolean(inCart)}
                isUser={isUser}
                withText={{ buyText: '', inCartText: '' }}
              />
            </div>
            <div className={style.productMainInfoDescription}>
              <h3 className={style.productMainInfoDescTitle}>
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
