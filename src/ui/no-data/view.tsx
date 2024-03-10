import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  text: string;
}

export const NoData: React.FC<IProps> = ({ text }) => {

  return (
    <h3 className={styles.noData}>
      {text}
    </h3>
  );
};
