import { IClientProduct } from '@/types/products-types';
import { IProductDocument } from '../models/product-model';

export const ProductDto = (model: IProductDocument): IClientProduct => {
  const reviews = model.reviews.map(review => ({
    id: review._id,
    userId: review.userId,
    userName: review.userName,
    rating: review.rating,
    text: review.text,
    date: review.date,
  }));

  return {
    id: model._id,
    name: model.name,
    brand: model.brand,
    category: model.category.name,
    price: model.price,
    description: model.description,
    image: model.image,
    salesCount: model.salesCount,
    amount: model.amount,
    reviews,
    characteristics: model.characteristics,
  };
};
