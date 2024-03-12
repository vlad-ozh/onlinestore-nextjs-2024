import React from 'react';
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

import styles from './styles.module.scss';

interface IProps {
  text: string;
  route: string;
  textLink: string;
}

export const NoData: React.FC<IProps> = ({ text, route, textLink }) => {
  return (
    <div className={styles.noData}>
      <FaceFrownIcon width={56} className={styles.noDataIcon} />
      <h3 className={styles.noDataTitle}>
        {text}
      </h3>
      <Link href={route} className={styles.noDataLink}>
        {textLink}
      </Link>
    </div>
  );
};
