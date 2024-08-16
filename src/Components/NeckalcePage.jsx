import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 12;

const NecklacePage = () => {
  const [necklaces, setNecklaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedProducts = localStorage.getItem('productDetails');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      // Filter only necklace products
      const necklaceProducts = Object.keys(products)
        .map(key => products[key])
        .filter(product => product.category === 'necklace');
      setNecklaces(necklaceProducts);
    }
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = necklaces.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(necklaces.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
  <div>
    <div className="bg-[#99988e] py-24">
          <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
            <h1 className="text-4xl font-bold text-white text-[50px] prata-font mb-4">Necklaces</h1>
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
              <span className="text-white">Necklaces</span>
            </div>
          </header>
    </div>
    <div className="bg-[#e2dacf]">
      <div className="max-w-6xl mx-auto py-10 px-4">
          <p>Showing {currentItems.length} of {necklaces.length} Items</p>
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
                <div className="p-4 bg-white mx-3 product-meta px-[1rem] pt-[1rem] pb-[1.5rem] relative rounded">
                  <h2 className="text-xl prata-font mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-[0.38rem]">{item.price}</p>
                  <div className="action-btn absolute bottom-[-2rem] left-0 mt-0 px-[1rem] right-0 opacity-[0]">
                    <a href="" data-quantity="1" class="add_to_cart_button uppercase prata-font" data-product_id="${item.id}">Add to cart</a>
                  </div>
                </div>
              </Link>
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

export default NecklacePage;
