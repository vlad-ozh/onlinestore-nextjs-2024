import React from 'react';
import { HeaderContent } from '../header-content';
import { NextIntlClientProvider } from 'next-intl';
import { getTotalCartProducts, getTotalFavorites } from '@/lib/data';
import { currentUser } from '@clerk/nextjs';
import { getMessages } from 'next-intl/server';

import styles from './styles.module.scss';

export const Header: React.FC = async () => {
  const messages = await getMessages();

  const user = await currentUser();
  const favoriteProducts = user ? await getTotalFavorites(user) : undefined;
  const cartProducts = user ? await getTotalCartProducts(user) : undefined;

  return (
    <NextIntlClientProvider messages={messages} >
      <div className={styles.header}>
        <HeaderContent
          user={Boolean(user)}
          totalFavorites={favoriteProducts}
          totalProductsInCart={cartProducts}
        />
      </div>
    </NextIntlClientProvider>
  );
};
