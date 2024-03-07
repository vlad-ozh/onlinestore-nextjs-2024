import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface IProps {
  icon: React.ReactNode;
  className?: string;
}

export const SubmitIcon: React.FC<IProps> = ({
  icon,
  className,
}) => {
  return (
    <button
      type='submit'
      className={clsx(styles.submit, className)}
    >
      {icon}
    </button>
  );
};
