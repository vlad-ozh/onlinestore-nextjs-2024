'use client';

import { ThemeProvider as ThemeProviderLib } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode; }) {
  return (
    <ThemeProviderLib defaultTheme='system' attribute='class' enableSystem>
      {children}
    </ThemeProviderLib>
  );
};
