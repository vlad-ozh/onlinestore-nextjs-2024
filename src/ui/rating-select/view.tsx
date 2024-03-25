import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { ShowError } from '..';

import styles from './styles.module.scss';

interface IProps {
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

export const RatingSelect: React.FC<IProps> = ({
  register,
  error,
  className,
}) => {
  const t = useTranslations('Product');

  return (
    <fieldset className={styles.fieldset}>
      <label htmlFor="rating" className={styles.fieldsetLabel}>
        {t('rating')}
      </label>
      <select
        {...register}
        name="rating"
        id="rating"
        defaultValue={0}
        className={styles.fieldsetSelect}
      >
        <option value={''} hidden>{t('chooseRating')}</option>
        <option value={1} className={styles.fieldsetOption}>1</option>
        <option value={2} className={styles.fieldsetOption}>2</option>
        <option value={3} className={styles.fieldsetOption}>3</option>
        <option value={4} className={styles.fieldsetOption}>4</option>
        <option value={5} className={styles.fieldsetOption}>5</option>
      </select>
      {error && <ShowError error={error}/>}
    </fieldset>
  );
};
