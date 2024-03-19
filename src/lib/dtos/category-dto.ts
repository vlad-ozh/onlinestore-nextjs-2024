import { ICategory } from '@/types/products-types';

interface ICategoryDto extends ICategory {
  [key: string]: any;
}

export const CategoryDto = (model: ICategoryDto) => ({
  name: model.name,
  brands: model.brands,
});
