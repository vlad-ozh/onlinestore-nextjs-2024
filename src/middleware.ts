import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { authMiddleware } from '@clerk/nextjs';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },

  publicRoutes: [
    '/',
    '/:locale',
    '/:locale/account',
    '/:locale/account/info',
    '/:locale/account/cart',
    '/:locale/sign-up',
    '/:locale/sign-in',
    '/:locale/products',
    '/:locale/products/:category',
    '/:locale/products/:category/:brand',
    '/:locale/products/:category/:brand/:productId',
    '/:locale/account/favorites',
  ],
});

export const config = {
  matcher: [
    '/',
    '/(uk|en)/:path*',
    '/(api|trpc)(.*)',
    '/((?!.+\\.[\\w]+$|_next|_vercel|.*\\..*).*)',
  ],
};
