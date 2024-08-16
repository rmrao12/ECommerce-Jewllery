// src/EarringsPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
const ITEMS_PER_PAGE = 12;

const RingsPage = () => {
 
  const { addToCart } = useCart(); 
  const [rings, setRings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const storedProducts = localStorage.getItem('productDetails');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      // Filter only earring products
      const ringProducts = Object.keys(products).map(key => products[key]).filter(
        (product) => product.category === 'ring'
      );
      setRings(ringProducts);
    }
  }, []);
 
  
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = rings.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(rings.length / ITEMS_PER_PAGE);

  const handleAddToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    console.log('Adding to cart:', { ...item, price: numericPrice, id: item.id, quantity: 1 });
    addToCart({ ...item, price: numericPrice, id: item.id }, 1);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div>
    <div className="bg-[#99988e] py-24">
      <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
            <h1 className="text-4xl font-bold text-white text-[50px] prata-font mb-4">Rings</h1>
            <div className="space-x-2">
              <span>
                <Link to="/" className="text-white hover:text-gray-800 underline">
                  Home
                </Link>
              </span>
              <span className="text-white">/</span>
              <span>
                <Link to="/shop" className="text-white hover:text-gray-800 underline">
                  Shop
                </Link>
              </span>
              <span className="text-white">/</span>
              <span className="text-white">Rings</span>
            </div>
          </header>
  </div>
  <div className="bg-[#e2dacf]">
    <div className="max-w-6xl mx-auto py-10 px-4">
    
     <p>Showing {currentItems.length} of {rings.length} Items</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map(item => (
          <div
          key={item.id}
          className="relative bg-white product-box rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Link to={`/product/${item.id}`} className="block">
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-cover h-64"
            />
            </Link>
            <div className="p-4 bg-white mx-3 product-meta px-[1rem] pt-[1rem] pb-[1.5rem] relative rounded">
            <Link to={`/product/${item.id}`} className="block">
              <h2 className="text-xl prata-font mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-[0.38rem]">{item.price}</p>
              </Link>
              <div className="action-btn absolute bottom-[-2rem] left-0 mt-0 px-[1rem] right-0 opacity-[0]">
              <button
             onClick={() => handleAddToCart(item)} data-quantity="1" class="add_to_cart_button uppercase prata-font" data-product_id="${item.id}">Add to cart</button>
              </div>
            </div>
          
        </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#375944]/[0.9] text-white"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#375944] text-white"
            >
              Next
            </button>
          </div>
      </div>
      </div>
    </div>
  );
};

export default RingsPage;
