import React from 'react';
import { useCart } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();
    const navigate = useNavigate(); // Hook for navigation

    const handleQuantityChange = (id, delta) => {
      const item = cart.find(item => item.id === id);
      if (item) {
        const newQuantity = item.quantity + delta;
        if (newQuantity > 0) {
          updateQuantity(id, newQuantity);
        }
      }
    };

    const handleDelete = (id) => {
      removeFromCart(id);
    };

    const handleProceedToCheckout = () => {
      navigate('/checkout'); // Navigate to checkout page
    };

    return (
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-6">
                <div className="flex items-center w-full">
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg mr-6" />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                    <div className="flex items-center mb-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-l"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-12 text-center border-t border-b border-gray-300"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">Total: ${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-6 border-t border-gray-200 pt-6 text-right">
              <h2 className="text-2xl font-bold">Total Price: ${getTotalPrice()}</h2>
              <button
                onClick={handleProceedToCheckout}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default CartPage;
