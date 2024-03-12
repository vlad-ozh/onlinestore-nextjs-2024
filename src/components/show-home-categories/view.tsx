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

import style from './style.module.scss';

export const ShowHomeCategories: React.FC = () => {
  const t = useTranslations('Categories');

  return (
    <div className={style.categories}>
      <ul className={style.categoriesList}>
        <li className={style.categoriesItem}>
          <Link
            href={routes.toCategory(categories.smartphones)}
            className={style.categoriesItemLink}
          >
            <DevicePhoneMobileIcon width={48}/>
            {t('smartphones')}
          </Link>
        </li>
        <li className={style.categoriesItem}>
          <Link
            href={routes.toCategory(categories.tablets)}
            className={style.categoriesItemLink}
          >
            <DeviceTabletIcon width={48}/>
            {t('tablets')}
          </Link>
        </li>
        <li className={style.categoriesItem}>
          <Link
            href={routes.toCategory(categories.laptops)}
            className={style.categoriesItemLink}
          >
            <ComputerDesktopIcon width={48}/>
            {t('laptops')}
          </Link>
        </li>
      </ul>
    </div>
  );
};