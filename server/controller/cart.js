import Cart from '../models/cart.js';
import Product from '../models/product.js';

// Add or update item in the cart
export const addToCart = async (req, res) => {
  try {
      const { product, quantity,sign } = req.body;

      
      // Check if quantity is valid
      if (quantity <= 0) {
          return res.status(400).json({ error: 'Quantity must be greater than 0' });
      }

      // Find the product by ID
      const foundProduct = await Product.findById(product);
      if (!foundProduct) {
          return res.status(404).json({ error: 'Product not found' });
      }

      // Find or create cart based on sessionId
      let cart = await Cart.findOne({ sessionId: req.sessionId });
      if (!cart) {
          cart = new Cart({ sessionId: req.sessionId, items: [] });
      }

      // Check if the product already exists in the cart
      const existingItem = cart.items.find(item => item.product.equals(product));
      if (existingItem) {
          // Update quantity if the item exists
          console.log('Sign : '+sign);
          if(sign == '-')
            {
              if(existingItem.quantity - quantity < 0)
                existingItem.quantity = 0;
              else
              existingItem.quantity -= quantity;
            
          }
          else{
            existingItem.quantity += quantity;
            }
          
          // Optionally, remove item if quantity is zero
          // if (existingItem.quantity <= 0) {
          //     cart.items = cart.items.filter(item => !item.product.equals(product));
          // }
      } else {
          // Add new item to cart if it doesn't exist
          cart.items.push({ product: foundProduct._id, quantity });
      }

      // Save the updated cart
      await cart.save();

      // Respond with success message
      res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (error) {
      // Handle any errors
      res.status(500).json({ error: error.message });
  }
};
// Remove item from the cart
export const removeFromCart = async (req, res) => {
  try {
    const  productId  = req.params.id;
    const sessionId = req.sessionId; // Use sessionId from session middleware

    console.log('Session ID:', sessionId);
    console.log('Product ID:', productId);
    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID not found' });
    }
    const cart = await Cart.findOne({ sessionId: req.sessionId });
//console.log(sessionId);

    if (!cart) return res.status(404).json({ error: 'Cart not found' });
console.log(productId);
    const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
    if (itemIndex === -1) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }

    // Remove the item from the array
    cart.items.splice(itemIndex, 1);   
    console.log('Cart items after removal:', cart.items);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get cart details
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.sessionId }).populate('items.product');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Calculate total quantity and price
export const getCartTotals = async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.sessionId }).populate('items.product');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    const totalQuantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.items.reduce((acc, item) => acc + item.quantity * parseFloat(item.product.price), 0);

    res.status(200).json({cart,totalQuantity,totalPrice});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
