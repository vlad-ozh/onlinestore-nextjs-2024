import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Footer, Header } from '@/components';
import '@/styles/globals.scss';
import '@/styles/variables.scss';
import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className={styles.layout}>
            <header className={styles.layoutTop}><Header /></header>
            <div className={styles.layoutContent}>{children}</div>
            <footer className={styles.layoutBottom}><Footer /></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
