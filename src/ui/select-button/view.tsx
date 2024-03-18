import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { routes } from '@/utils/navigation-routes';

import style from './style.module.scss';

interface IProps {
  onSelect: () => void;
  onRemoveSelected: () => void;
  isSelect: boolean;
  isUser: boolean;
}

export const SelectButton: React.FC<IProps> = ({
  onSelect,
  onRemoveSelected,
  isSelect,
  isUser,
}) => {
  return (
    <>
      {isUser ?
        (
          <button
            onClick={isSelect ? onRemoveSelected : onSelect}
            className={clsx(style.select, {
              [style.onSelect]: isSelect,
            })}
          >
            <HeartIcon />
          </button>
        )
        :
        (
          <Link
            href={routes.toLogin()}
            className={style.selectLink}
          >
            <HeartIcon />
          </Link>
        )
      }
    </>
  );
};
