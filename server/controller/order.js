import Order from '../models/order.js';

import Customer from '../models/customer.js';
import Cart from '../models/cart.js';

// Place a new order
export const placeOrder = async (req, res) => {
  const { customerId, trackingNumber } = req.body;  // Removed cartId since we are fetching from customer

  try {
    // Check if the customer exists
    const customer = await Customer.findById(customerId).populate('cart');
    if (!customer) return res.status(404).json({ error: 'Customer not found' });

    // Get the cartId from the customer object
    const cartId = customer.cart?._id;
    if (!cartId) return res.status(404).json({ error: 'No cart found for this customer' });

    // Fetch the cart details
    const cart = await Cart.findById(cartId).populate('items.product');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    let totalPrice = 0
    let items =  [];
    cart.items.forEach(item => {
      items.push( {        
        product: item.product._id
        ,
        
        quantity: item.quantity
        ,
        price: item.product.price
        
      });

      totalPrice +=item.quantity*item.product.price;
      });

    console.log(cart.items);
    console.log(cart);
    // Create the order with cart information
    const order = new Order({
      customer: customerId,
      trackingNumber,
      items: items,  // Assuming you have items in your cart schema
      totalPrice: totalPrice,  // Assuming you have a totalPrice field in the cart
    });

    console.log(1);
    // Save the order
    await order.save();
    console.log(2);
    // Delete the cart
    await Cart.findByIdAndDelete(cartId);
    console.log(3);
    // Clear the cart reference in the customer document
    customer.cart = null;
    console.log(4);
    await customer.save();
    console.log(5);
   // res.clearCookie('sessionId',{path:'/order'})
    console.log(6)
    // Respond with the created order
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all orders for a customer
export const getOrdersByCustomer = async (req, res) => {
  const customerId=req.params.id

  try {
    // Fetch the customer and populate the cart
    const customer = await Customer.findById(customerId).populate('cart');

    if (!customer) return res.status(404).json({ error: 'Customer not found' });

    // Fetch orders for the customer and populate products and cart
    const orders = await Order.find({ customer: customerId })
     
      .populate({
        path: 'customer',
        populate: { path: 'cart' } 
      });

    res.status(200).json({ customer, orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
