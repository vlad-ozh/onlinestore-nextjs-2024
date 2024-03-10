import { Schema, model, models } from 'mongoose';
import { categoryModelName } from './model-names';

const CategorySchema = new Schema({
  name: { type: String, unique: true, required: true },
  brands: { type: [String], required: true, default: [] },
});

export const CategoryModel = models[categoryModelName] || model(
  categoryModelName,
  CategorySchema
);
