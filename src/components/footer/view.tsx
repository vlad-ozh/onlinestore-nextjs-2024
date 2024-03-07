import React from 'react';
import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  const getCurrentYear = () => {
    const date = new Date();

    return date.getFullYear();
  };

  return (
    <div className={styles.footer}>
      <h3 className={styles.footerTitle}>© {getCurrentYear()}</h3>
    </div>
  );
};

