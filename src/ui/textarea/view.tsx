import React from 'react';
import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ShowError } from '..';

import styles from './styles.module.scss';

interface IProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

export const Textarea: React.FC<IProps> = ({
  register,
  placeholder,
  error,
  className,
}) => {
  return (
    <fieldset className={styles.fieldset}>
      <textarea
        {...register}
        placeholder={placeholder}
        className={clsx(styles.fieldsetTextarea, className)}
      />
      {error && <ShowError error={error} />}
    </fieldset>
  );
};
