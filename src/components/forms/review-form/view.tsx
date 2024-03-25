'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { IReviewForm } from '@/types/form-types';
import { createReview } from '@/lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea, Submit, RatingSelect } from '@/ui';
import { createReviewSchema } from '@/lib/zod-schemas';

import styles from './styles.module.scss';

interface IProps {
  productId: string;
}

export const ReviewForm: React.FC<IProps> = ({ productId }) => {

  const t = useTranslations('Product');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>({
    resolver: zodResolver(createReviewSchema),
    mode: 'onChange',
  });

  return (
    <form
      onSubmit={handleSubmit(async ({rating, text}) => {
        await createReview({rating, text, productId});
        reset();
      })}
      className={styles.reviewsCreate}
    >
      <Textarea
        placeholder={t('textareaPlaceholder')}
        register={register('text')}
        error={errors.text?.message}
      />
      <div className={styles.reviewsCreateAndRating}>
        <RatingSelect
          register={register('rating')}
          error={errors.rating?.message}
        />

        <Submit
          text={t('create')}
          className={styles.reviewsSubmit}
        />
      </div>
    </form>
  );
};
