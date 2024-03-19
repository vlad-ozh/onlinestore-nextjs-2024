'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

import styles from './styles.module.scss';
import { darkThemeName, lightThemeName } from '@/utils/theme-names';

export const SwitchThemeButton: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      {
        resolvedTheme === darkThemeName ?
          <button
            onClick={() => setTheme(lightThemeName)}
            className={styles.themeButton}
          >
            <SunIcon className={styles.themeButtonIcon}/>
          </button>
          :
          <button
            onClick={() => setTheme(darkThemeName)}
            className={styles.themeButton}
          >
            <MoonIcon className={styles.themeButtonIcon}/>
          </button>
      }
    </>
  );
};

export default SwitchThemeButton;
