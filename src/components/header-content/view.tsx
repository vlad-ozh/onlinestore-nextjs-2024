'use client';

import clsx from 'clsx';
import {
  ShoppingCartIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { routes } from '@/utils/navigation-routes';

import styles from './styles.module.scss';

const ChangeDynamicThemeButton = dynamic(
  () => import('@/ui/switch-theme-button/view'),
  { ssr: false }
);

interface IProps {
}

export const HeaderContent: React.FC<IProps> = (props) => {

  const {} = props;

  return (

    <nav className={styles.navigation}>


      <Link
        href={routes.toHome()}
        className={styles.link}
      >
        <HomeIcon />
        {/* {t('home')} */}
      </Link>
      <Link
        href={routes.toProducts()}
        className={styles.link}
      >
        <ListBulletIcon />
        {/* {t('products')} */}
      </Link>

      {/* <SearchForm /> */}

      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Link href={routes.toLogin()} className={styles.navListItemLink}>
            <UserIcon />
          </Link>
        </li>
        <li className={styles.navListItem}>
          {/* <SwitchButtonTheme /> */}
        </li>
        <li className={styles.navListItem}>
          {/* <SwitchButtonLanguage /> */}
        </li>
        <li className={styles.navListItem}>
          <Link
            href={routes.toFavorites()}
            className={styles.navListItemLink}
          >
            <HeartIcon />
          </Link>
        </li>
        <li className={styles.navListItem}>
          <Link href={routes.toCart()} className={styles.navListItemLink}>
            <ShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
