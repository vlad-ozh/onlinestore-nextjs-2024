import { TCategoriesList } from '@/types/products';

interface ICategoryDto {
  name: TCategoriesList;
  brands: string[];

  [key: string]: any;
}

export const CategoryDto = (model: ICategoryDto) => ({
  name: model.name,
  brands: model.brands,
});
