import React from 'react';
import { routes } from '@/utils/navigation-routes';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getCategoryInfo } from '@/lib/data';
import { LinkAnimated } from '@/ui';

import styles from './styles.module.scss';

interface IProps {
  categoryParam: string;
}

export const ShowCategory: React.FC<IProps> = async (props) => {
  const { categoryParam } = props;
  const category = await getCategoryInfo(categoryParam);

  if (!category) notFound();

  const t = await getTranslations('Category');
  const tCategoryTitle = await getTranslations('Categories');

  return (
    <div className={styles.category}>
      <h2 className={styles.categoryTitle}>
        {category && tCategoryTitle(category.name)}
      </h2>
      <h3 className={styles.categoryTitleBrands}>
        {t('brandsTitle')}
      </h3>
      <ul className={styles.categoryBrands}>
        {category && category.brands.map((brand, index) => {
          return (
            <li key={index} className={styles.categoryBrandsItem}>
              <LinkAnimated
                href={routes.toProducts(categoryParam, brand)}
              >
                {brand}
              </LinkAnimated>
            </li>
          );
        })}
        <li className={styles.categoryBrandsItem}>
          <LinkAnimated
            href={routes.toProducts(categoryParam, 'all')}
          >
            {t('all')}
          </LinkAnimated>
        </li>
      </ul>
    </div>
  );
};
