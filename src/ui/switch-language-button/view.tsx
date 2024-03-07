'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

import styles from './styles.module.scss';

export const SwitchLanguageButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = React.useTransition();

  const changeLocale = () => {
    const nextLocale = locale === locales[0] ? locales[1] : locales[0];

    const splitPathname = pathname.split('/');
    splitPathname.splice(1, 1, nextLocale);
    const newPathname = splitPathname.join('/');

    startTransition(() => {
      router.replace(newPathname, { scroll: false });
      router.refresh();
    });
  };

  return (
    <>
      {
        locale === locales[0] ?
          <button
            onClick={changeLocale}
            disabled={isPending}
            className={styles.langButton}
          >
            UK
          </button>
          :
          <button
            onClick={changeLocale}
            disabled={isPending}
            className={styles.langButton}
          >
            EN
          </button>
      }
    </>
  );
};

export default SwitchLanguageButton;
