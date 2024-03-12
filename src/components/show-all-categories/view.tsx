import React from 'react';
import { getCategoriesInfo } from '@/lib/data';
import { getTranslations } from 'next-intl/server';
import { LinkAnimated, NoData } from '@/ui';
import { routes } from '@/utils/navigation-routes';

import styles from './styles.module.scss';

export const ShowAllCategories: React.FC = async () => {
  const categories = await getCategoriesInfo();

  const t = await getTranslations();

  if (!categories) return (
    <NoData
      text={t('NoData.noCategories')}
      route={routes.toHome()}
      textLink={t('NoData.goHome')}
    />
  );

  return (
    <ul className={styles.categories}>
      {categories.map(category => {
        return (
          <li key={category.name} className={styles.category}>
            <h2 className={styles.categoryTitle}>
              {t(`Categories.${category.name}`)}
            </h2>
            <h3 className={styles.categoryTitleBrands}>
              {t('Category.brandsTitle')}
            </h3>
            <ul className={styles.categoryBrands}>
              {category.brands.map((brand, index) => {
                return (
                  <li key={index} className={styles.categoryBrandsItem}>
                    <LinkAnimated
                      href={''}
                    >
                      {brand}
                    </LinkAnimated>
                  </li>
                );
              })}
              <li className={styles.categoryBrandsItem}>
                <LinkAnimated
                  href={''}
                >
                  {t('Category.all')}
                </LinkAnimated>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
