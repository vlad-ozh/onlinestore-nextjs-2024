'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

import styles from './styles.module.scss';

const darkThemeName = 'dark';
const lightThemeName = 'light';

export const ChangeThemeButton = () => {
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

export default ChangeThemeButton;
