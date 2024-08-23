import React from 'react';
import { useCart } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';
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
      <div>
        {/* Header Section */}
        <section className="bg-[#99988e] py-24">
          <div class="container mx-auto">
            <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
              <h1 className="text-[34px] font-bold text-white font-prata mb-4">Cart</h1>
              <div className="space-x-2">
                <span>
                  <Link to="/" className="text-white hover:text-gray-800 underline">
                    Home
                  </Link>
                </span>
                <span className="text-white">/</span>
                <span className="text-white">Cart</span>
              </div>
            </header>
          </div>        
        </section>
        <section className="xl:px-0 px-6 py-16 bg-[#f5ece6]">
          <div className="container mx-auto py-10 px-4 bg-white shadow-md md:p-10">
            {cart.length === 0 ? (
              <div className="text-center">
                <h2 className="text-gray-500 font-semibold text-4xl mb-8">Your cart is currently empty.</h2>
                <Link to="/shop" className="px-8 py-4 mt-6 text-white btn-main hover:bg-[#375944]/[0.6]">
                  Go Back to Shop
                </Link>
              </div>
              ) : (
              <div className="grid cols-1 lg:grid-cols-3 gap-8">                
                <div class="lg:col-span-2 col-span-1">
                  <h2 className="text-[28px] font-bold mb-5 font-prata">Cart Summary</h2>
                  <table className="min-w-full divide-y text-left divide-gray-200 cart-summary">
                    <thead className="hidden sm:table-header-group">
                      <tr className="py-2">
                        <th></th>
                        <th className="font-semibold">Product</th>
                        <th className="font-semibold">Price</th>
                        <th className="font-semibold">Quantity</th>
                        <th className="font-semibold">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="block sm:table-row">
                          <td className="flex justify-between items-center sm:table-cell px-4 py-2">
                            <span className="block sm:hidden text-[16px] font-semibold text-gray-500">
                              Action
                            </span>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="px-4 py-2 text-red-500 hover:bg-[#f5f5f5]"
                            >
                              <GoTrash />
                            </button>
                          </td>
                          <td className="flex justify-between items-center sm:table-cell px-4 py-2">
                            <span className="block sm:hidden text-[16px] font-semibold text-gray-500">
                              Product
                            </span>
                            <div className="flex items-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-[55px] h-[55px] object-cover rounded-lg mr-6"
                              />
                              <p className="text-[16px] mb-0">{item.name}</p>
                            </div>
                          </td>
                          <td className="flex justify-between items-center sm:table-cell px-4 py-2">
                            <span className="block sm:hidden text-[16px] font-semibold text-gray-500">
                              Price
                            </span>
                            <p className="text-gray-600 mb-0 text-[16px]">${item.price}</p>
                          </td>
                          <td className="flex justify-between items-start sm:table-cell px-4 py-2">
                            <span className="block sm:hidden text-[16px] font-semibold text-gray-500">
                              Quantity
                            </span>
                            <div className="flex items-center mb-0 border max-w-[120px] border-gray-300 p-1">
                              <button
                                onClick={() => handleQuantityChange(item.id, -1)}
                                className="border-0 flex items-center justify-center bg-transparent text-gray-800 rounded-0 w-[30px] h-[30px]"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                                className="w-12 text-center border-0 border-gray-300 h-[30px]"
                              />
                              <button
                                onClick={() => handleQuantityChange(item.id, 1)}
                                className="border-0 flex items-center justify-center bg-transparent text-gray-800 rounded-0 w-[30px] h-[30px]"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="flex justify-between items-start sm:table-cell px-4 py-2">
                            <span className="block sm:hidden text-[16px] font-semibold text-gray-500">
                              Subtotal
                            </span>
                            <p className="text-lg text-[16px]">${item.price * item.quantity}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
                <div class="col-span-1">
                  <h2 className="text-[28px] font-bold mb-5 font-prata text-left">Cart total</h2>
                  <div className="flex justify-between">
                    <p className="font-semibold">Total Price:</p>
                    <p className="text-right">${getTotalPrice()}</p>
                  </div>
                  <hr className="my-4"></hr>
                  <button
                    onClick={handleProceedToCheckout}
                    className="mt-2 px-8 py-4 text-white btn-main hover:bg-[375944]/[0.6]"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
};

export default CartPage;
