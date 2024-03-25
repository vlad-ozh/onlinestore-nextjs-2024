import { ThemeProvider } from './ThemeProvider';
import { Footer, Header } from '@/components';
import { Metadata } from 'next';
import { inter } from '@/ui';
import { ClerkProvider } from './ClerkProvider';
import { getTranslations } from 'next-intl/server';

import '@/styles/globals.scss';
import styles from './styles.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Breadcrumbs');

  return {
    title: {
      template: `%s | ${t('home')}`,
      default: t('home'),
    },
    description: t('homeDeskription'),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ClerkProvider locale={locale}>
            <div className={styles.layout}>
              <header className={styles.layoutTop}><Header /></header>
              <div className={styles.layoutContent}>{children}</div>
              <footer className={styles.layoutBottom}><Footer /></footer>
            </div>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
