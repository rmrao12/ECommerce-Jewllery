import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Reference to the Customer model
    required: true
  },

  trackingNumber: {
    type: String,
    required: true,
    unique: true
  }
},
{
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
