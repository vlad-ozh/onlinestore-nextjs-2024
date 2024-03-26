import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface CustomArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SampleNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={clsx(className, styles.arrow)}
      onClick={onClick}
    >
      <ChevronRightIcon />
    </div>
  );
};

export const SamplePrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={clsx(className, styles.arrow)}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </div>
  );
};
