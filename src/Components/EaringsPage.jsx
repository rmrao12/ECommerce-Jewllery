import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';

const ITEMS_PER_PAGE = 12;

const EarringsPage = () => {
  const [earrings, setEarrings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const storedProducts = localStorage.getItem('productDetails');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      // Filter only earring products
      const earringProducts = Object.keys(products).map(key => products[key]).filter(
        (product) => product.category === 'earrings'
      );
      setEarrings(earringProducts);
      setTotalPages(Math.ceil(earringProducts.length / ITEMS_PER_PAGE));
    }
  }, []);

  const { addToCart } = useCart(); 
 
  const handleAddToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    console.log('Adding to cart:', { ...item, price: numericPrice, id: item.id, quantity: 1 });
    addToCart({ ...item, price: numericPrice, id: item.id }, 1);
  };
  // Paginate the earrings list
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedEarrings = earrings.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
        <div className="bg-[#99988e] py-24">
          <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
            <h1 className="text-4xl font-bold text-white text-[50px] prata-font mb-4">Earrings</h1>
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
              <span className="text-white">Earrings</span>
            </div>
          </header>
        </div>
      <div className="bg-[#e2dacf]">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedEarrings.map((item) => (
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

export default EarringsPage;
