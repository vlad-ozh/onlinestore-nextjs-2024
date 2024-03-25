import React from 'react';
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { routes } from '@/utils/navigation-routes';
import { categories } from '@/utils/categories';

import styles from './styles.module.scss';

export const ShowHomeCategories: React.FC = () => {
  const t = useTranslations('Categories');

  return (
    <div className={styles.categories}>
      <ul className={styles.categoriesList}>
        <li className={styles.categoriesItem}>
          <Link
            href={routes.toCategory(categories.smartphones)}
            className={styles.categoriesItemLink}
          >
            <DevicePhoneMobileIcon width={48}/>
            {t('smartphones')}
          </Link>
        </li>
        <li className={styles.categoriesItem}>
          <Link
            href={routes.toCategory(categories.tablets)}
            className={styles.categoriesItemLink}
          >
            <DeviceTabletIcon width={48}/>
            {t('tablets')}
          </Link>
        </li>
        <li className={styles.categoriesItem}>
          <Link
            href={routes.toCategory(categories.laptops)}
            className={styles.categoriesItemLink}
          >
            <ComputerDesktopIcon width={48}/>
            {t('laptops')}
          </Link>
        </li>
      </ul>
    </div>
  );
};
