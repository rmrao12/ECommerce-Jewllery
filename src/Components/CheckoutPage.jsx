import React from 'react';
import { useCart } from '../Contexts/CartContext';
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addCustomer, placeOrder } from '../Redux/StoreAPIs';
import Cookies from 'js-cookie';
const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart,getCartData } = useCart();
  let tPrice = () => {
    let tp= 0;

    if(cart.items != undefined){ 
      cart.items.map((item) =>{
        tp +=item.product.price * item.quantity;
    });
    }
    return tp;
  };
  const dispatch = useDispatch();
  // const posts = useSelector((state) => {
  //   return state.post.categories;});
  // const error = useSelector((state) => state.post.error);
  // const status = useSelector((state) => state.post.status);
  const [customerDetails, setCustomerDetails] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    phone: '',
    email: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();    
    handleCheckout(customerDetails,customerDetails)
  };

  const deleteCookie = () => {
    // Log all cookies before deleting
    console.log('Current cookies:', document.cookie);
  
    // Remove the sessionId cookie using js-cookie
    Cookies.remove('sessionId', { path: '/' });
  
    // Log to verify it's deleted
    console.log('Session cookie deleted');
  };
  
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }


   // Example: Delete the 'username' cookie
 
const handleCheckout = async (customerDetails) => { 

  const customerData = {
    name: customerDetails.firstName+customerDetails.lastName,               // Example name
    email: customerDetails.email,    // Example email
    address: customerDetails.address,          // Example address
    country: customerDetails.country,                  // Example country
    state_province: customerDetails.state,    // Example state or province
    city: customerDetails.city,             // Example city
    zipcode: customerDetails.zipCode,                // Example ZIP code
    phone: customerDetails.phone,        // Example phone number
    cart: cart._id // Example ObjectId for the cart
  };

  try {
    // Dispatch addCustomer and wait for it to finish
    const addCustomerResult = await dispatch(addCustomer(customerData)).unwrap();
    const customerId = addCustomerResult.customer._id;
    console.log('customer id : '+customerId);
    const trackingNumber=cart.sessionId;
    const cartId = cart._id;
    // If addCustomer succeeded, dispatch placeOrder
    const placeOrderResult = await dispatch(placeOrder({customerId,trackingNumber,cartId})).unwrap();
console.log(getCookie('sessionId'))
Cookies.remove("sessionId", { path: '/' });

    getCartData();
    navigate('/order');
//     let cookieVar=Cookies.get('sessionId')
// if(!cookieVar){
// console.log("cookies remove")
// }
// else{
//   console.log("cookies not remove")
// }
// console.log(cookieVar,"cookiee")
//     Cookies.remove("sessionId",{path:'/order'})
//document.cookie='sessionId=;max-age=0'

   // Cookies.remove('sessionId')
    // Delete the sessionId cookie
   // deleteCookie();

    // Try to get the sessionId cookie after deletion
    
    console.log('Order placed successfully', placeOrderResult);
  } catch (err) {
    console.error('Failed to place order:', err);
  }
};

  return (
    <div className="bg-[#f5ece6] pt-20">
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
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div className="md:flex gap-8">
                  <div className="w-full">
                    <label htmlFor="first-name" className="block font-semibold mb-1">First Name</label>
                    <input
                      type="text"
                      name='firstName'
                      id="first-name"
                      className="w-full p-2 border focus:outline-none"
                      value={customerDetails.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="last-name" className="block font-semibold mb-1">Last Name</label>
                    <input
                      type="text"
                      id="last-name"
                      name='lastName'
                      className="w-full p-2 border focus:outline-none"
                      value={customerDetails.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block font-semibold mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    name='address'
                    className="w-full p-2 border focus:outline-none"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="md:flex md:gap-8">
                  <div className="w-full">
                    <label htmlFor="country" className="block font-semibold mb-1">Country</label>
                    <input
                      type="text"
                      id="country"
                      name='country'
                      className="w-full p-2 border focus:outline-none"
                      value={customerDetails.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="state" className="block font-semibold mb-1">State/Province</label>
                    <input
                      type="text"
                      id="state"
                      name='state'
                      className="w-full p-2 border focus:outline-none"
                      value={customerDetails.state}
                      onChange={handleInputChange}
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
                      name='city'
                      className="w-full p-2 border focus:outline-none"
                      value={customerDetails.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="zip-code" className="block font-semibold mb-1">Zip Code</label>
                    <input
                      type="text"
                      id="zip-code"
                      name='zipCode'
                      className="w-full p-2 border focus:outline-none"
                      value={customerDetails.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-1">Phone #</label>
                  <input
                    type="tel"
                    id="phone"
                    name='phone'
                    className="w-full p-2 border focus:outline-none"
                    value={customerDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name='email'
                    className="w-full p-2 border focus:outline-none"
                    value={customerDetails.email}
                    onChange={handleInputChange}
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
              {Object.keys(cart).length <=0 || cart.items == undefined || cart.items.length < 1 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                   <div className="flex justify-between border-b py-2">
                      <p className="text-[16px] text-gray-600 font-semibold">Product</p>
                      <p className="text-[16px] text-gray-600 font-semibold">Subtotal</p>
                    </div>
                  {cart.items.map(item => (
                    <div key={item._id} className="flex justify-between border-b py-2">
                      <p className="text-[16px] text-gray-600">{item.product.name} x <span className="font-semibold">{item.quantity}</span></p>
                      <p className="text-[16px] text-gray-600">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="mt-2 text-right flex justify-between">
                    <h3 className="text-[16px] text-gray-600 font-semibold">Total Price</h3>
                    <h3 className="text-[16px] text-gray-600 font-semibold">${tPrice().toFixed(2)}</h3>
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
