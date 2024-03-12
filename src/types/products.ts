export interface ICategoriesList {
  smartphones: 'smartphones';
  tablets: 'tablets';
  laptops: 'laptops';
};

export type TCategoriesList = 'smartphones' | 'tablets' | 'laptops';

export interface ICategory {
  name: TCategoriesList;
  brands: string[];
};
