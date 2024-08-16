import React from 'react';
import { useCart } from '../Contexts/CartContext';

const CheckoutPage = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-5">Checkout</h1>
      <div className="flex flex-col md:flex-row">
        {/* Order Summary */}
        <div className="w-full md:w-1/2 pr-4 mb-5 md:mb-0">
          <h2 className="text-2xl font-bold mb-3">Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between border-b py-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="text-right font-semibold">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="mt-5 text-right">
                <h3 className="text-xl font-bold">Total Price: ${getTotalPrice().toFixed(2)}</h3>
              </div>
            </div>
          )}
        </div>

        {/* Checkout Form */}
        <div className="w-full md:w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-3">Billing Details</h2>
          <form className="flex flex-col space-y-4">
            {/* Form Fields */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block font-semibold mb-1">Shipping Address</label>
              <input
                type="text"
                id="address"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
