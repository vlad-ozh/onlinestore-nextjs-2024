import styles from './styles.module.scss';

export const Footer = () => {
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

