import Rating from '../models/ratings.js';
import Product from '../models/product.js';


export const addRating = async (req, res) => {
  const { product, name, email, rating, review } = req.body;
  const ratings=new Rating(req.body);
  // Validate the product
  const productFind = await Product.findById(product);
  if (!productFind) return res.status(404).json({ error: 'Product not found' });

  try {
    // Check if the user has already reviewed this product
    const existingRating = await Rating.findOne({ product: product, email });
    if (existingRating) {
      return res.status(400).json({ message: 'You have already reviewed this product.' });
    }

    // Create the rating if it doesn't already exist
    const ratingDoc = await ratings.save();
    res.status(201).json(ratingDoc);
  } catch (error) {  
    res.status(500).json({ error: error.message });
  }
};

// Get ratings for a product
export const getRatings = async (req, res) => {
  const productId  = req.params.id;

  try {
    const ratings = await Rating.find({ product: productId });
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
