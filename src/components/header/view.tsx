import { HeaderContent } from '../header-content';
import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <HeaderContent />
    </div>
  );
}
