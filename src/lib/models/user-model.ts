import { Schema, model, models } from 'mongoose';
import { userModelName } from './model-names';

const UserSchema = new Schema({
  id: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  selectedProducts: {type: [String], default: []},
  cart: {
    type: [{
      id: {type: String, required: true},
      amount: {type: Number, required: true},
    }],
    default: [],
  },
  isActivated: {type: Boolean, default: false},
  activationLink: {type: String},
}, { timestamps: true });

export const User =  models[userModelName] || model(userModelName, UserSchema);
