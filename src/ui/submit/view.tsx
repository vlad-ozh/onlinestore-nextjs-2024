import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface IProps {
  text: string;
  className?: string;
}

export const Submit: React.FC<IProps> = ({
  text,
  className,
}) => {
  return (
    <button
      type='submit'
      className={clsx(styles.submit, className)}
    >
      {text}
    </button>
  );
};
