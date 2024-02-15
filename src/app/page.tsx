import Theme from '@/components/theme';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.block}></div>
      <div><Theme/></div>
    </main>
  );
}
