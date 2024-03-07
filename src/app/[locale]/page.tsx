// import { getUser } from '@/lib/data';
import { ShowCategories } from '@/components';

import styles from './styles.module.scss';

export default function Home() {
  // const users = await getUser();
  // console.log('🚀 ~ Home ~ post:', users);

  return (
    <main className={styles.main}>
      <ShowCategories />
    </main>
  );
}
