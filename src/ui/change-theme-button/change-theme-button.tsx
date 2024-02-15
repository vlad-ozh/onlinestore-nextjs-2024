'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import styles from './styles.module.scss';

export function ChangeThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && <p>The current theme is: {resolvedTheme}</p>}
      <button className={styles.button} onClick={() => setTheme('light')}>
        Light Mode
      </button>
      <button className={styles.button} onClick={() => setTheme('dark')}>
        Dark Mode
      </button>
    </div>
  );
}
