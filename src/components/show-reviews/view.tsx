import React from 'react';
import { IReviewWithId } from '@/types/products-types';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

interface IProps {
  reviews: IReviewWithId[];
}

export const ShowReviews: React.FC<IProps> = ({ reviews }) => {
  const t = useTranslations('Product');

  return (
    <div className={styles.reviewsShow}>
      <ul className={styles.reviewsList}>
        {reviews.map(review => {
          return(
            <li key={review.id} className={styles.reviewsItem}>
              <div className={styles.reviewsItemInfo}>
                <div>
                  <div className={styles.reviewsItemInfoName}>
                    {review.userName}
                  </div>
                  <div className={styles.reviewsItemInfoRating}>
                    {t('rating')}: {review.rating}
                  </div>
                </div>
                <div className={styles.reviewsItemInfoDate}>
                  {review.date}
                </div>
              </div>
              <div className={styles.reviewsItemText}>
                {review.text}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
