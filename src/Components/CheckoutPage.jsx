import React from 'react';
import { useCart } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';
const CheckoutPage = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="bg-[#f5ece6]">
      {/* Header Section */}
      <section className="bg-[#99988e] py-24">
          <div class="container mx-auto">
            <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
              <h1 className="text-[34px] font-bold text-white font-prata mb-4">Checkout</h1>
              <div className="space-x-2">
                <span>
                  <Link to="/" className="text-white hover:text-gray-800 underline">
                    Home
                  </Link>
                </span>
                <span className="text-white">/</span>
                <span className="text-white">Checkout</span>
              </div>
            </header>
          </div>        
      </section>
      <section className="xl:px-0 px-6 py-16">
        <div className="container mx-auto py-10 px-4 bg-white shadow-md md:p-10">
          <div className="flex flex-col md:flex-row">
            {/* Checkout Form */}
            <div className="w-full md:w-1/2 md:pr-4">
              <h2 className="font-prata md:text-[28px] font-bold mb-3">Billing Details</h2>
              <form className="flex flex-col space-y-4">
                {/* Form Fields */}
                <div className="md:flex gap-8">
                  <div className="w-full">
                    <label htmlFor="first-name" className="block font-semibold mb-1">First Name</label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full p-2 border focus:outline-none"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="last-name" className="block font-semibold mb-1">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full p-2 border focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block font-semibold mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-2 border focus:outline-none"
                    required
                  />
                </div>
                <div className="md:flex md:gap-8">
                  <div className="w-full">
                    <label htmlFor="country" className="block font-semibold mb-1">Country</label>
                    <input
                      type="text"
                      id="country"
                      className="w-full p-2 border focus:outline-none"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="state" className="block font-semibold mb-1">State/Province</label>
                    <input
                      type="text"
                      id="state"
                      className="w-full p-2 border focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="md:flex md:gap-8">
                  <div className="w-full">
                    <label htmlFor="city" className="block font-semibold mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      className="w-full p-2 border focus:outline-none"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="zip-code" className="block font-semibold mb-1">Zip Code</label>
                    <input
                      type="text"
                      id="zip-code"
                      className="w-full p-2 border focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-1">Phone #</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border focus:outline-none"
                    required
                  />
                </div>
                 {/* <Link to="/order"> */}
                <button type="submit" className="mt-8 px-8 py-4 text-white btn-main hover:bg-[375944]/[0.6]">
                  Place Order
                </button>
                {/* </Link> */}
              </form>
            </div>
            {/* Order Summary */}
            <div className="w-full md:w-1/2 md:pl-4 mb-5 md:mb-0">
              <h2 className="font-prata md:text-[28px] font-bold mb-3">Order Summary</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                   <div className="flex justify-between border-b py-2">
                      <p className="text-[16px] text-gray-600 font-semibold">Product</p>
                      <p className="text-[16px] text-gray-600 font-semibold">Subtotal</p>
                    </div>
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between border-b py-2">
                      <p className="text-[16px] text-gray-600">{item.name} x <span className="font-semibold">{item.quantity}</span></p>
                      <p className="text-[16px] text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="mt-2 text-right flex justify-between">
                    <h3 className="text-[16px] text-gray-600 font-semibold">Total Price</h3>
                    <h3 className="text-[16px] text-gray-600 font-semibold">${getTotalPrice().toFixed(2)}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
