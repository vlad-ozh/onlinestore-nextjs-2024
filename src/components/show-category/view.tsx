import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { routes } from '@/utils/navigation-routes';
import { ICategory } from '@/types/products';

import style from './style.module.scss';

interface IProps {
  category: ICategory;
  categoryParam: string;
}

export const ShowCategory: React.FC<IProps> = (props) => {
  const { category, categoryParam } = props;

  const tCategoryTitle = useTranslations('Categories');
  const t = useTranslations('Category');

  return (
    <div className={style.category}>
      <h2 className={style.categoryTitle}>
        {category && tCategoryTitle(category.name)}
      </h2>
      <h3 className={style.categoryTitleBrands}>
        {t('brandsTitle')}
      </h3>
      <ul className={style.categoryBrands}>
        {category && category.brands.map((brand, index) => {
          return (
            <li key={index} className={style.categoryBrandsItem}>
              <Link
                href={routes.toProducts(categoryParam, brand)}
                className={style.categoryBrandsItemLink}
              >
                {brand}
              </Link>
            </li>
          );
        })}
        <li className={style.categoryBrandsItem}>
          <Link
            href={routes.toProducts(categoryParam, 'all')}
            className={style.categoryBrandsItemLink}
          >
            {t('all')}
          </Link>
        </li>
      </ul>
    </div>
  );
};
