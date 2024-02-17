'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode; }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='data-theme' enableSystem>
      {children}
    </ThemeProvider>
  );
};
