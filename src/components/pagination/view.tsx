'use client';

import React from 'react';
import Pagination from 'rc-pagination/lib/Pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './styles.module.scss';

interface IProps {
  totalProducts: number;
}

export const ProductsPagination: React.FC<IProps> = ({ totalProducts }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = searchParams.get('page');

  const pages = Math.ceil(totalProducts / 10);

  if (currentPage && Number(currentPage) < 1) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  if (Number(currentPage) > pages) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pages.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());

    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  };

  return (
    <div className={styles.pagination}>
      <Pagination
        simple
        total={totalProducts}
        onChange={createPageURL}
        current={Number(currentPage) || 1}
      />
    </div>
  );
};

