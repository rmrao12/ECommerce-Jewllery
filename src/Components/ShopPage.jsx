import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lines from '../Images/lines.png';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useCart } from '../Contexts/CartContext';

const ITEMS_PER_PAGE = 20;

const ShopPage = () => {
  const { addToCart } = useCart(); 
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedProductDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    // Convert object to array
    const productArray = Object.values(storedProductDetails);
    setProducts(productArray);
  }, []);
  const handleAddToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      console.log('Adding to cart:', { ...item, price: numericPrice, id: item.id, quantity: 1 });
      addToCart({ ...item, price: numericPrice, id: item.id }, 1);
    };
  
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
    <div>
      {/* Header Section */}
      <section className="bg-[#99988e] py-24">
        <div className="container mx-auto">
          <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
            <h1 className="text-4xl font-bold text-white text-[50px] font-prata mb-4">Shop</h1>
            <div className="space-x-2">
              <span>
                <Link to="/" className="text-white hover:text-gray-800 underline">
                  Home
                </Link>
              </span>
              <span className="text-white">/</span>
              <span className="text-white">Shop</span>
            </div>
          </header>
        </div>
      </section>
      <section className='bg-[#F4ECE6]'>
        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <div
            key={product.id}
            className="relative bg-white product-box rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
              <Link to={`/product/${product.id}`} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                  </Link>
                <div className="p-4 bg-white mx-3 product-meta px-[1rem] pt-[1rem] pb-[1.5rem] relative rounded">
                  <Link to={`/product/${product.id}`} className="block text-[15px]">
                    <h2 className="text-[17px] font-prata mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-[0.38rem]">{product.price}</p>
                  </Link>
                  <div className="action-btn absolute bottom-[-2rem] left-0 mt-3 px-[1rem] right-0 opacity-[0] font-semibold">
                    <button onClick={() => handleAddToCart(product)} data-quantity="1" class="flex uppercase items-center gap-2 add_to_cart_button text-[15px] font-mulish" data-product_id="${product.id}">Add to cart<MdOutlineArrowRightAlt /></button>
                  </div>
                </div>
            
            </div>
          ))}
        </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 btn-main text-white mr-4"
            >
              Previous
            </button>
            <span className="px-4 py-2 text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 btn-main text-white ml-4"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
    
    
  );
};

export default ShopPage;
