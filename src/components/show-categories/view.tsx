import React from 'react';
// import { IProductsCategories } from '../../model/types/IProducts';
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { routes } from '@/utils/navigation-routes';

import style from './style.module.scss';

const categories = {
  smartphones: 'smartphones',
  tablets: 'tablets',
  laptops: 'laptops',
};

export const ShowCategories: React.FC = () => {
  const t = useTranslations();

  return (
    <div className={style.categories}>
      <ul className={style.categoriesList}>
        <li className={style.categoriesItem}>
          <Link
            href={routes.toCategory(categories.smartphones)}
            className={style.categoriesItemLink}
          >
            <DevicePhoneMobileIcon width={48}/>
            {t('Categories.smartphones')}
          </Link>
        </li>
        <li className={style.categoriesItem}>
          <Link
            href={routes.toCategory(categories.tablets)}
            className={style.categoriesItemLink}
          >
            <DeviceTabletIcon width={48}/>
            {t('Categories.tablets')}
          </Link>
        </li>
        <li className={style.categoriesItem}>
          <Link
            href={routes.toCategory(categories.laptops)}
            className={style.categoriesItemLink}
          >
            <ComputerDesktopIcon width={48}/>
            {t('Categories.laptops')}
          </Link>
        </li>
      </ul>
    </div>
  );
};
