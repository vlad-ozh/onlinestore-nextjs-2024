import React from 'react';
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { routes } from '@/utils/navigation-routes';
import { ICategoriesList } from '@/types/products';

import style from './style.module.scss';

const categories: ICategoriesList = {
  smartphones: 'smartphones',
  tablets: 'tablets',
  laptops: 'laptops',
};

export const ShowCategories: React.FC = () => {
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
