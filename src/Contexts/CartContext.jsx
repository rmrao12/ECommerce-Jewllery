// import React, { createContext, useState, useContext, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product, quantity) => {
//     setCart(prevCart => {
//       const existingProduct = prevCart.find(item => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity }];
//     });
//   };

//   const updateQuantity = (id, newQuantity) => {
//     setCart(prevCart => {
//       return prevCart.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       ).filter(item => item.quantity > 0); // Remove items with zero or negative quantity
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prevCart => prevCart.filter(item => item.id !== id));
//   };

//   function getTotalQuantity() {
//     return cart.reduce((acc, item) => acc + item.quantity, 0);
//   }

//   function getTotalPrice() {
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, getTotalQuantity, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart,addToCart as addToCartAPI,removeFromCart as removeFromCartAPI, fetchCartTotals} from '../Redux/StoreAPIs.jsx'
const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.post.cart);
  const status = useSelector(state => state.post.status);
  const error = useSelector(state => state.post.error);

  const totals = useSelector(state => state.post.cartTotals);

  // Fetch the cart from the server when the component mounts
  useEffect(() => {
    console.log("fetch Cart ");
    dispatch(fetchCart());
  }, [dispatch]);

  const getCartData = async (p) => {
    try {
      await dispatch(fetchCart());
    } catch (err) {

      console.error("Failed to add product to cart:", err);
    }
  };

  // Add a product to the cart (calls the API to add it on the server)
  const addToCart = async (product, quantity,sign) => {
    try {
      await dispatch(addToCartAPI({ product, quantity,sign }));
      dispatch(fetchCart());
    } catch (err) {
      console.error("Failed to add product to cart:", err);
    }
  };

  // Update the quantity of a product in the cart (calls the API to update it on the server)
  const updateQuantity = async (product, quantity,sign) => {
    try {
      console.log('quantity : '+quantity);
      await dispatch(addToCartAPI({ product, quantity,sign }));
      dispatch(fetchCart());
    } catch (err) {
      console.error("Failed to update product quantity:", err);
    }
  };

  // Remove a product from the cart (calls the API to remove it from the server)
  const removeFromCart = async (id) => {
    try {
      console.log("Cart removeFromCart");
      await dispatch(removeFromCartAPI(id));
      dispatch(fetchCart());
    } catch (err) {
      console.error("Failed to remove product from cart:", err);
    }
  };

  // Get the total quantity of items in the cart
  const getTotalQuantity = () => {
    console.log("Cart getTotalQuantity");
    if(cart.items != undefined){
    return cart.items.reduce((acc, item) => acc + item.quantity, 0);}
  else{
    return 0;
  }
  };

   // Get the total price of items in the cart
   const getTotalPrice = async () => {
    try {
      console.log("Cart fetchCartTotals");
      const result = await dispatch(fetchCartTotals());
      if (fetchCartTotals.fulfilled.match(result)) {
        console.log('Cart totals:', result.payload); // payload contains the result
        // Access the totals from the resolved action payload
        return result.payload.totalPrice;
      } else {
        console.error('Failed to fetch cart totals:', result.error.message);
        return 0;
      }
    } catch (err) {
      console.error("Failed to fetch cart totals:", err);
      return 0;
    }
  };


  return (
    <CartContext.Provider value={{ cart, status, error, addToCart, updateQuantity, removeFromCart, getTotalQuantity, getTotalPrice,getCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
