import React from 'react';
import { useCart } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { GoTrash } from "react-icons/go";
import { Link } from 'react-router-dom';
const OrderSuccess = () => {
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
            <div className="text-center">
                <h2 className="text-gray-500 font-semibold text-4xl mb-8">Your Order has been placed successfully.</h2>
                <Link to="/shop" className="px-8 py-4 mt-6 text-white btn-main hover:bg-[#375944]/[0.6]">
                  Go Back to Shop
                </Link>
                </div>
            {/* {cart.length === 0 ? (
              <div className="text-center">
                <h2 className="text-gray-500 font-semibold text-4xl mb-8">Your Order has been placed successfully.</h2>
                <Link to="/shop" className="px-8 py-4 mt-6 text-white btn-main hover:bg-[#375944]/[0.6]">
                  Go Back to Shop
                </Link>
              </div>
              ) : (
              <div>
                <h2 className="text-[34px] font-bold mb-5 font-prata">Shopping Cart</h2>
                {cart.items.map(item => (
                  <div>
                    
                    <div key={item._id} className="flex justify-between items-center border-b border-gray-200 py-6">
                      <div className="flex items-center w-full">
                        <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg mr-6" />
                        <div className="flex-grow">
                          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                          <p className="text-gray-600 mb-2">Price: ${item.price}</p>
                          <div className="flex items-center mb-2 ">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-0 w-[30px] h-[30px]"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="w-12 text-center border-t  border-b border-gray-300 h-[30px]"
                            />
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="flex items-center justify-center bg-gray-200 text-gray-800 rounded-0 w-[30px] h-[30px]"
                            >
                              +
                            </button>
                            <div className="ml-3">
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                              >
                                <GoTrash />
                              </button>
                            </div>
                          </div>
                          
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">Total: ${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-6 border-t border-gray-200 pt-6 text-right">
                  <h2 className="text-2xl font-bold">Total Price: ${getTotalPrice()}</h2>
                  <button
                    onClick={handleProceedToCheckout}
                    className="mt-8 px-8 py-4 text-white btn-main hover:bg-[375944]/[0.6]"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )} */}
          </div>
        </section>
      </div>
    );
};

export default OrderSuccess;
