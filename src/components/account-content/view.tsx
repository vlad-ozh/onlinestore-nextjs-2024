import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import { routes } from '@/utils/navigation-routes';
import {
  UserIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

import styles from './styles.module.scss';

interface IProps {
  userName: string;
}

export const AccountContent: React.FC<IProps> = ({ userName }) => {
  const t = useTranslations('Account');

  return (
    <div className={styles.account}>
      <h2 className={styles.accountTitle}>
        {t('greetings', { name: userName })}
      </h2>
      <div className={styles.accountBox}>
        <ul className={styles.accountList}>
          <li className={styles.accountListItem}>
            <Link
              href={routes.toAccountInfo()}
              className={styles.accountListItemLink}
            >
              <UserIcon width={24} />
              {t('personalInfo')}
            </Link>
          </li>
          <li className={styles.accountListItem}>
            <SignOutButton>
              <div className={styles.accountListItemButton}>
                <ArrowLeftStartOnRectangleIcon width={24}/>
                {t('logout')}
              </div>
            </SignOutButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
