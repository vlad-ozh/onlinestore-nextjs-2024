import React from 'react';
import { HeaderContent } from '../header-content';
import {NextIntlClientProvider, useMessages} from 'next-intl';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={ messages } >
      <div className={styles.header}>
        <HeaderContent />
      </div>
    </NextIntlClientProvider>
  );
};
