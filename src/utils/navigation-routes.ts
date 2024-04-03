export const routes = {
  toHome: () => '/',
  toSignIn: () => '/sign-in',
  toAccount: () => '/account',
  toAccountInfo: () => '/account/info',
  toCart: () => '/account/cart',
  toFavorites: () => '/account/favorites',
  toCategories: () => '/products',
  toCategory: ( category: string ) => `/products/${category}`,
  toProducts: ( category: string, brand: string ) =>
    `/products/${category}/${brand}`,
  toProduct: ( category: string, brand: string, productId: string ) =>
    `/products/${category}/${brand}/${productId}`,
  toSearchProducts: (query: string) => {
    const params = new URLSearchParams();
    params.set('query', query);

    return `/products/search?${params.toString()}`;
  },
};
