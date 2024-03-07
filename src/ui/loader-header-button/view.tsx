import React from 'react';

import styles from './styles.module.scss';

export const LoaderHeaderButton: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLoader} />
    </div>
  );
};
