import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

interface IBreadcrumbs {
  breadcrumbs: {
    path: string;
    name: string;
  }[];
};

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ breadcrumbs }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map(({ name, path }, index) => (
        <li key={index} className={styles.breadcrumbsItem}>
          {index === breadcrumbs.length - 1 ? (
            <span>{name}</span>
          ) : (
            <Link href={path} className={styles.breadcrumbsItemLink}>
              {name}
            </Link>
          )}

          {index < breadcrumbs.length - 1 &&
            <span className={styles.breadcrumbsItemSlash}>/</span>
          }
        </li>
      ))}
    </ul>
  );
};
