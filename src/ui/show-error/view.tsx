import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface IProps {
  error: string;
  className?: string;
}

export const ShowError: React.FC<IProps> = ({
  error,
  className,
}) => {
  return (
    <h4 className={clsx(styles.error, className)}>
      {error}
    </h4>
  );
};
