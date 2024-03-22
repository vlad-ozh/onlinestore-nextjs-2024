import { routes } from '@/utils/navigation-routes';
import { Breadcrumbs } from '@/components';
import { useTranslations } from 'next-intl';
import { NoData } from '@/ui';

import styles from './styles.module.scss';

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={[
        { name: t('Breadcrumbs.home'), path: routes.toHome() },
        { name: t('Breadcrumbs.products'), path: routes.toCategories() },
        { name: '...', path: '' },
        { name: '...', path: '' },
      ]} />

      <NoData
        text={t('NoData.noProducts')}
        route={routes.toHome()}
        textLink={t('NoData.goHome')}
      />
    </main>
  );
}
