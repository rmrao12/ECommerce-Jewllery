// models/product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
 
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }, 
  additionalInfo: {
    material: { type: String },
    dimensions: { type: String },
    weight: { type: String },
    origin: { type: String }
  }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
