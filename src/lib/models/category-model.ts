import { Document, Model, Schema, model, models } from 'mongoose';
import { categoryModelName } from './model-names';
import { ICategory } from '@/types/products-types';

const CategorySchema = new Schema({
  name: { type: String, unique: true, required: true },
  brands: { type: [String], required: true, default: [] },
});

interface ICategoryDocument extends ICategory, Document { }
interface ICategoryModel extends Model<ICategoryDocument> { }

export const CategoryModel: ICategoryModel =
  models[categoryModelName] || model<ICategoryDocument>(
    categoryModelName,
    CategorySchema
  );
