import React from 'react';
import { HeaderContent } from '../header-content';
import { NextIntlClientProvider } from 'next-intl';
import { getFavoriteProducts } from '@/lib/data';
import { currentUser } from '@clerk/nextjs';
import { getMessages } from 'next-intl/server';

import styles from './styles.module.scss';

export const Header: React.FC = async () => {
  const messages = await getMessages();

  const user = await currentUser();
  const favoriteProducts = await getFavoriteProducts();

  const totalFavorites = favoriteProducts?.length;

  return (
    <NextIntlClientProvider messages={messages} >
      <div className={styles.header}>
        <HeaderContent totalFavorites={totalFavorites} user={Boolean(user)} />
      </div>
    </NextIntlClientProvider>
  );
};
