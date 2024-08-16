import React, { useState } from 'react';
import '../index.css';
import logo from '../Images/logo.webp';
import { FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart } from 'react-icons/fa'; // Correct import
import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Example cart count
  
  const { getTotalQuantity } = useCart();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-xl font-bold text-gray-800">
                <img src={logo} className="max-w-[180px]"/>
              </a>
            </div>
            
          </div>
          <div className="flex items-center">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex">
             
              <Link to="/" className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Home
              </Link>
             
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase"
                >
                    <Link to="/shop">
                Shop
              </Link>
                  <svg
                    className="w-5 h-5 inline ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg z-[999]">
                    <div className="py-1 bg-white shadow-xs">
                     
                          <Link to="/rings"
                        className="block text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
               Rings
              </Link>
                    
                    
                         <Link to="/necklaces"
                        className="block text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
               Necklaces
              </Link>
                      
                    
              <Link to="/earrings"
                        className="block text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
              Earrings
              </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/materials" className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Materials
              </Link>
              <Link to="/aboutus" className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Blog
              </Link>
              <Link to="/contactus" className="text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-500 hover:text-gray-800 text-md">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 text-md">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 text-md">
              <FaTwitter />
            </a>
            {/* Checkout Cart */}
            <Link to="/cart" className="relative flex items-center text-gray-500 hover:text-gray-800 mx-2">
           
              <FaShoppingCart />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center -translate-x-2 translate-y-1/2">
              {getTotalQuantity()}
              </span>
           </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <div>
              <button
                onClick={toggleDropdown}
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                Shop
                <svg
                  className="w-5 h-5 inline ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Rings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Necklaces
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Earrings
                  </a>
                </div>
              )}
            </div>
            <a
              href="/materials"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Materials
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacts
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
