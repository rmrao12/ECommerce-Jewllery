import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); 
  const productDetails = JSON.parse(localStorage.getItem("productDetails"));
  const product = productDetails[id];
  const handleAddToCart = () => {
    const numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
    console.log('Adding to cart:', { ...product, price: numericPrice,id, quantity });
    addToCart({ ...product, price: numericPrice, id: id }, quantity);
  };
  useEffect(() => {
    const storedProductDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    // Convert object to array and limit to the first 4 items
    const productArray = Object.values(storedProductDetails).slice(0, 8);
    setProducts(productArray);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-5">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
          key={product.id}
          className="relative bg-white product-box rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            {/* <Link to={`/product/${product.id}`} className="block"> */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-white p-4 transition-transform duration-300 transform translate-y-full hover:translate-y-0 flex flex-col items-center">
                <p className="text-gray-800 mb-2">Product Info</p>
                {/* Add other product info here if needed */}
                <button
            onClick={handleAddToCart} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
