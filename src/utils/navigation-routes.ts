// Example routes
// const routes = {
//   home: '/',                                                 +
//   account: '/account',
//   accountLogin: '/account/login',                            +
//   accountRegister: '/account/register',
//   accountForgotPassword: '/account/reset/password',
//   accountResetPassword: '/account/reset/password/:token',
//   accountCart: '/account/cart',                              +
//   accountInfo: '/account/info',
//   accountOrders: '/account/orders',
//   products: '/products',                                     +
//   openProductsCategory: '/products/:category',               +
//   openProducts: '/products/:category/:brand/page/:page',
//   openProduct: '/products/:category/:brand/:productId',
//   searchProducts: '/products/search/:data',
//   selected: '/products/selected',                            +
//   checkout: '/checkout',
//   confirmation: '/checkout/confirmation',
// };

export const routes = {
  toHome: () => '/',
  toLogin: () => '/login',
  toCart: () => '/account/cart',
  toFavorites: () => '/account/favorites',
  toProducts: () => '/products',
  toCategory: ( category: string ) => `/products/${category}`,
};
