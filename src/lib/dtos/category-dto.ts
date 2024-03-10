import { TCategoriesList } from '@/types/products';

interface IModel {
  name: TCategoriesList;
  brands: string[];

  [key: string]: any;
}

export const CategoryDto = (model: IModel) => ({
  name: model.name,
  brands: model.brands,
});
