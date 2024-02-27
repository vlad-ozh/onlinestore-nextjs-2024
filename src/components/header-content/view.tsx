import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import clsx from 'clsx';
// import { Button, SearchForm } from '..';
// import { SwitchButtonLanguage } from '../SwitchLanguageButton';
// import { SwitchButtonTheme } from '../SwitchThemeButton';
// import { useTranslation } from 'react-i18next';
const ChangeDynamicThemeButton = dynamic(
  () => import('@/ui/change-theme-button/view'),
  { ssr: false }
);
// import {
//   CartIcon,
//   FavoriteIcon,
//   PersonIcon,
//   DotsIcon,
//   HomeIcon,
//   MenuIcon,
// } from '../../assets/images/svg-images';

import style from './style.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface IProps {
  isAuth: boolean;
  onHome: string;
  onProducts: string;
  onAccount: (isAuth: boolean) => string;
  onSelected: (isAuth: boolean) => string;
  onCart: (isAuth: boolean) => string;
  isSelectedProducts: boolean;
  isCartProducts: boolean;
  totalSelectedProducts: number;
  totalProductsInCart: number;
}

export const HeaderContent: React.FC<IProps> = (props) => {
  const [navMobile, setNavMobile] = useState(false);
  // const { t } = useTranslation(['header']);

  const {
    isAuth,
    onHome,
    onProducts,
    onAccount,
    onSelected,
    onCart,
    isSelectedProducts,
    isCartProducts,
    totalSelectedProducts,
    totalProductsInCart,
  } = props;

  return (
    <div className={style.header}>
      {/* <>
        <aside className={clsx(
          style.navigationMobileDisabled, {
            [style.navigationMobileAbled]: navMobile,
          })}
        >
          <header className={style.asideHeader}>
            <Link
              to={onHome}
              className={clsx(style.link, style.linkAside)}
            >
              <HomeIcon />
              {t('home')}
            </Link>

            <div className={style.asideHeaderOptions}>
              <SwitchButtonLanguage />
              <SwitchButtonTheme />
            </div>
          </header>
          <Link
            to={onAccount(isAuth)}
            className={style.asideHeaderProfile}
          >
            <PersonIcon />
            {t('profile')}
          </Link>
          <Link to={onProducts} className={style.asideHeaderProducts}>
            <DotsIcon />
            {t('products')}
          </Link>
          <Link to={onSelected(isAuth)} className={style.asideHeaderSelected}>
            <span className={clsx(style.counter, {
              [style.noCount]: !isSelectedProducts,
            })}>
              {totalSelectedProducts}
            </span>
            <FavoriteIcon />
            {t('selected')}
          </Link>
        </aside>

        <button
          onClick={() => setNavMobile(false)}
          className={clsx(
            style.navigationMobileDisabledBlur, {
              [style.navigationMobileAbledBlur]: navMobile,
            }
          )}
        />
      </>
      <nav className={style.navigation}>
        <Button
          skin='icon'
          size='medium'
          onClick={() => setNavMobile(!navMobile)}
          className={style.navBurgerButton}
        >
          <MenuIcon />
        </Button>

        <Link
          to={onHome}
          className={style.link}
        >
          <HomeIcon />
          {t('home')}
        </Link>
        <Link
          to={onProducts}
          className={style.link}
        >
          <DotsIcon />
          {t('products')}
        </Link>

        <SearchForm />

        <ul className={style.navList}>
          <li className={style.navListItem}>
            <Link to={onAccount(isAuth)} className={style.navListItemLink}>
              <PersonIcon />
            </Link>
          </li>
          <li className={style.navListItem}>
            <SwitchButtonTheme />
          </li>
          <li className={style.navListItem}>
            <SwitchButtonLanguage />
          </li>
          <li className={style.navListItem}>
            <Link to={onSelected(isAuth)} className={style.navListItemLink}>
              <span className={clsx(style.counter, {
                [style.noCount]: !isSelectedProducts,
              })}>
                {totalSelectedProducts}
              </span>
              <FavoriteIcon />
            </Link>
          </li>
          <li className={style.navListItem}>
            <Link to={onCart(isAuth)} className={style.navListItemLink}>
              <span className={clsx(style.counter, style.cartCounter, {
                [style.noCount]: !isCartProducts,
              })}>
                {totalProductsInCart}
              </span>
              <CartIcon />
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
