'use client';

import React from 'react';
import {
  ShoppingCartIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
  ListBulletIcon,
  Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { routes } from '@/utils/navigation-routes';
import { SearchForm } from '..';
import { LoaderHeaderButton } from '@/ui';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

const SwitchThemeButton = dynamic(
  () => import('@/ui/switch-theme-button/view'),
  { ssr: false, loading: () => <LoaderHeaderButton /> }
);
const SwitchLanguageButton = dynamic(
  () => import('@/ui/switch-language-button/view'),
  { ssr: false, loading: () => <LoaderHeaderButton /> }
);

interface IProps {
  user: boolean;
  totalFavorites: number | undefined;
}

export const HeaderContent: React.FC<IProps> = ({
  user,
  totalFavorites,
}) => {
  const t = useTranslations('Header');

  const [ navMobile, setNavMobile ] = React.useState<boolean>(false);

  const {
    toHome,
    toCategories,
    toSignIn,
    toFavorites,
    toCart,
  } = routes;

  return (
    <>
      <>
        <div className={clsx(
          styles.navMobile, {
            [styles.navMobileAbled]: navMobile,
          })}
        >
          <div className={styles.navMobileTop}>
            <Link
              href={toHome()}
              onClick={() => setNavMobile(false)}
              className={clsx(styles.navLink, styles.navMobileTopLink)}
            >
              <HomeIcon width={24}/>
              {t('home')}
            </Link>

            <div className={styles.navMobileTopOptions}>
              <SwitchThemeButton />
              <SwitchLanguageButton />
            </div>
          </div>
          <Link
            href={toSignIn()}
            onClick={() => setNavMobile(false)}
            className={styles.navMobileProfile}
          >
            <UserIcon width={24} />
            {t('profile')}
          </Link>
          <Link
            href={toCategories()}
            onClick={() => setNavMobile(false)}
            className={styles.navMobileProducts}
          >
            <ListBulletIcon width={24} />
            {t('products')}
          </Link>
          <Link
            href={user ? toFavorites() : toSignIn()}
            onClick={() => setNavMobile(false)}
            className={styles.navMobileSelected}
          >
            <span className={clsx(styles.counter, {
              [styles.noCount]: !totalFavorites,
            })}>
              {totalFavorites}
            </span>
            <HeartIcon width={24} />
            {t('selected')}
          </Link>
        </div>

        <button
          onClick={() => setNavMobile(false)}
          className={clsx(
            styles.navMobileBlur, {
              [styles.navMobileAbledBlur]: navMobile,
            }
          )}
        />
      </>

      <nav className={styles.nav}>
        <button
          onClick={() => setNavMobile(!navMobile)}
          className={styles.navMenuButton}
        >
          <Bars3CenterLeftIcon width={24} />
        </button>
        <div className={styles.navLinks}>
          <Link
            href={toHome()}
            className={styles.navLink}
          >
            <HomeIcon width={24} />
            {t('home')}
          </Link>
          <Link
            href={toCategories()}
            className={styles.navLink}
          >
            <ListBulletIcon width={24} />
            {t('products')}
          </Link>
        </div>

        <SearchForm />

        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link
              href={toSignIn()}
              className={styles.navListItemLink}
            >
              <UserIcon width={24} />
            </Link>
          </li>
          <li className={styles.navListItem}>
            <SwitchThemeButton />
          </li>
          <li className={styles.navListItem}>
            <SwitchLanguageButton />
          </li>
          <li className={styles.navListItem}>
            <Link
              href={user ? toFavorites() : toSignIn()}
              className={styles.navListItemLink}
            >
              <span className={clsx(styles.counter, {
                [styles.noCount]: !totalFavorites,
              })}>
                {totalFavorites}
              </span>
              <HeartIcon width={24} />
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link
              href={user ? toCart() : toSignIn()}
              className={styles.navListItemLink}
            >
              <ShoppingCartIcon width={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
