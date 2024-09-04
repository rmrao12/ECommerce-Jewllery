import Order from '../models/order.js';

import Customer from '../models/customer.js';

// Place a new order
export const placeOrder = async (req, res) => {
  const { customerId, trackingNumber } = req.body;

  try {
    // Check if the customer exists
    const customer = await Customer.findById(customerId);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });

   
    // Create the order
    const order = new Order({ customer: customerId,  trackingNumber });
    await order.save();
    
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
