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
//   openProducts: '/products/:category/:brand/page/:page',     +-
//   openProduct: '/products/:category/:brand/:productId',      +
//   searchProducts: '/products/search/:data',
//   selected: '/products/selected',                            +
//   checkout: '/checkout',
//   confirmation: '/checkout/confirmation',
// };

export const routes = {
  toHome: () => '/',
  toSignIn: () => '/sign-in',
  toAccount: () => '/account',
  toCart: () => '/account/cart',
  toFavorites: () => '/account/favorites',
  toCategories: () => '/products',
  toCategory: ( category: string ) => `/products/${category}`,
  toProducts: ( category: string, brand: string ) =>
    `/products/${category}/${brand}`,
  toProduct: ( category: string, brand: string, id: string ) =>
    `/products/${category}/${brand}/${id}`,
};
