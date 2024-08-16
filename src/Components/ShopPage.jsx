import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 20;

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedProductDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    // Convert object to array
    const productArray = Object.values(storedProductDetails);
    setProducts(productArray);
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-5">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/product/${product.id}`} className="block">
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
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-l"
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-100 text-gray-800">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopPage;
