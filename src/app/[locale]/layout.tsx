import { Providers } from './providers';
import { Footer, Header } from '@/components';
import { Metadata } from 'next';
import { inter } from '@/ui';
import '@/styles/globals.scss';
import { ClerkProvider } from '@clerk/nextjs';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Online store',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <Providers>
            <div className={styles.layout}>
              <header className={styles.layoutTop}><Header /></header>
              <div className={styles.layoutContent}>{children}</div>
              <footer className={styles.layoutBottom}><Footer /></footer>
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
