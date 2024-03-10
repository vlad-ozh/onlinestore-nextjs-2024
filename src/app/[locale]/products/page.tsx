import { Breadcrumbs } from '@/components';
import { useTranslations } from 'next-intl';
import { routes } from '@/utils/navigation-routes';

import styles from './styles.module.scss';

export default function Products() {
  const t = useTranslations('Breadcrumbs');

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('home'), path: routes.toHome() },
        { name: t('products'), path: '' },
      ]}/>
    </main>
  );
}
