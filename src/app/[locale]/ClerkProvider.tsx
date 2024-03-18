'use client';

import { locales } from '@/i18n';
import { darkThemeName } from '@/utils/theme-names';
import { ukUA } from '@clerk/localizations';
import { ClerkProvider as ClerkProviderLib } from '@clerk/nextjs';
import { dark, neobrutalism } from '@clerk/themes';
import { useTheme } from 'next-themes';

export function ClerkProvider({ children, locale }: {
  children: React.ReactNode;
  locale: string;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <ClerkProviderLib
      localization={locale === locales[1] ? ukUA : undefined}
      appearance={{
        baseTheme: resolvedTheme === darkThemeName ? dark : neobrutalism,
      }}
    >
      {children}
    </ClerkProviderLib>
  );
};
