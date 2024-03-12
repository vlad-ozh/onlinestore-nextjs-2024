import React from 'react';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

import styles from './styles.module.scss';

interface IProps {
  href: Url;
  children: React.ReactNode;
}

export const LinkAnimated: React.FC<IProps> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
};
