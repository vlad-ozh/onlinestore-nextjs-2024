import React from 'react';

import styles from './styles.module.scss';

export const ShowCategorySkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonInner}/>
    </div>
  );
};
