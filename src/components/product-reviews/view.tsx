import React from 'react';
import { IReviewWithId } from '@/types/products-types';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Link from 'next/link';
import { routes } from '@/utils/navigation-routes';
import { ReviewForm, ShowReviews } from '..';

import styles from './styles.module.scss';

interface IProps {
  isUser: boolean;
  userId: string | undefined;
  productId: string;
  reviews: IReviewWithId[];
}

export const ProductReviews: React.FC<IProps> = ({
  productId,
  isUser,
  userId,
  reviews,
}) => {
  const t = useTranslations('Product');
  const messages = useMessages();

  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviewsTitle}>
        {t('reviews')} {reviews.length}
      </h3>

      {!isUser ?
        <div className={styles.reviewsNoUser}>
          {t('login')}
          <Link
            href={routes.toSignIn()}
            className={styles.reviewsNoUserLink}
          >
            {t('loginLink')}
          </Link>
        </div>
        :
        <NextIntlClientProvider messages={messages}>
          <ReviewForm productId={productId} />
        </NextIntlClientProvider>
      }
      <NextIntlClientProvider messages={messages}>
        <ShowReviews reviews={reviews} userId={userId} productId={productId}/>
      </NextIntlClientProvider>
    </div>
  );
};
