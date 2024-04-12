'use client';

import React from 'react';
import { IReviewWithId } from '@/types/products-types';
import { useTranslations } from 'next-intl';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useAction } from 'next-safe-action/hooks';
import { deleteReview } from '@/lib/actions';

import styles from './styles.module.scss';

interface IProps {
  reviews: IReviewWithId[];
  userId: string | undefined;
  productId: string;
}

export const ShowReviews: React.FC<IProps> = ({
  reviews,
  userId,
  productId,
}) => {
  const t = useTranslations('Product');

  const { execute, status } = useAction(deleteReview);

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
                  {userId === review.userId &&
                    <button
                      disabled={status === 'executing'}
                      onClick={() => {
                        const confirm = window.confirm(
                          t('deleteReviewConfirm')
                        );
                        confirm && execute({
                          userId,
                          reviewId: review.id,
                          productId,
                        });
                      }}
                      className={styles.reviewsItemDelete}
                    >
                      <span className={styles.reviewsItemDeleteText}>
                        {t('deleteReview')}
                      </span>
                      <TrashIcon width={24} />
                    </button>
                  }
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
