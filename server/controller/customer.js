import Customer from "../models/customer.js";

export const addCustomer = async (req, res) => {
  try {
    const { name, address, city, phone, cart } = req.body;

    // Check for required fields
    if (!name || !address || !city || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new customer
    const newCustomer = new Customer({
      name,
      address,
      city,
      phone,
      cart, 
    });

    // Save the customer to the database
    await newCustomer.save();

    res.status(201).json({
      message: 'Customer created successfully',
      customer: newCustomer,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
