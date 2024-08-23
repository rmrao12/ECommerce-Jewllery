
import React, { useState } from 'react';
import logo from '../Images/logo.webp';
import { LuFacebook, LuInstagram, LuTwitter, LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { getTotalQuantity } = useCart();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="bg-white shadow-md  fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              <img src={logo} className="max-w-[180px]" alt="Logo" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="-ml-2 mr-2 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-0 text-gray-400 hover:text-white focus:outline-none focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block border-[#375944] bg-[#375944] h-10 w-10 p-1 active:outline-none focus:outline-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="normal"
                    strokeLinejoin="normal"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex">
              <Link to="/" className="menu-item text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Home
              </Link>
              <div className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>
                <button
                  className="menu-item text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase"
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
                  <div className="absolute mt-1 w-48 rounded-md shadow-lg z-[999]">
                    <div className="py-1 bg-white shadow-xs">
                      <Link to="/rings" className="menu-item block text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase" onClick={closeDropdown}>
                        Rings
                      </Link>
                      <Link to="/necklaces" className="menu-item block text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase" onClick={closeDropdown}>
                        Necklaces
                      </Link>
                      <Link to="/earrings" className="menu-item block text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase" onClick={closeMenu}>
                        Earrings
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/materials" className="menu-item text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Materials
              </Link>
              <Link to="/aboutus" className="menu-item text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                About Us
              </Link>
              <Link to="/blog" className="menu-item text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Blog
              </Link>
              <Link to="/contactus" className="menu-item text-gray-500 hover:text-gray-800 px-4 py-2 rounded-md text-md uppercase">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Social Media Icons */}
            <a href="#" className="hidden sm:block text-gray-500 hover:text-gray-800 text-md">
              <LuFacebook />
            </a>
            <a href="#" className="hidden sm:block text-gray-500 hover:text-gray-800 text-md">
              <LuInstagram />
            </a>
            <a href="#" className="hidden sm:block text-gray-500 hover:text-gray-800 text-md">
              <LuTwitter />
            </a>
            {/* Checkout Cart */}
            <Link to="/cart" className="relative flex items-center text-gray-500 hover:text-gray-800 mx-2">
              <LuShoppingCart />
              <span className="bg-[#375944] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center -translate-x-2 translate-y-1/2">
                {getTotalQuantity()}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full w-full max-w-[280px] bg-white shadow-xl p-4">
            <button
              onClick={closeMenu}
              className="text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="mt-5">
              <Link to="/" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 text-md uppercase" onClick={closeMenu}>
                Home
              </Link>
              <div>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 text-md uppercase w-full text-left"
                >
                  <Link to="/shop" onClick={closeMenu}>
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
                  <div className="w-full">
                      <Link to="/rings" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 text-md uppercase" onClick={closeMenu}>
                        Rings
                      </Link>
                      <Link to="/necklaces" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 text-md uppercase" onClick={closeMenu}>
                        Necklaces
                      </Link>
                      <Link to="/earrings" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 text-md uppercase" onClick={closeMenu}>
                        Earrings
                      </Link>
                  </div>
                )}
              </div>
              <Link to="/materials" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 uppercase" onClick={closeMenu}>
                Materials
              </Link>
              <Link to="/aboutus" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 uppercase" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/blog" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 uppercase" onClick={closeMenu}>
                Blog
              </Link>
              <Link to="/contactus" className="block text-gray-500 hover:text-gray-800 border-b-[1px] border-[#cfcfcf] px-4 py-3 uppercase" onClick={closeMenu}>
                Contact Us
              </Link>
              <div className="sm:hidden flex items-center space-x-4 mt-6">
                {/* Social Media Icons */}
                <a href="#" className="h-10 w-10 p-2 flex items-center justify-center text-white text-lg bg-[#375944] hover:bg-[#375944]/[0.9]">
                  <LuFacebook />
                </a>
                <a href="#" className="h-10 w-10 p-2 flex items-center justify-center text-white text-lg bg-[#375944] hover:bg-[#375944]/[0.9]">
                  <LuInstagram />
                </a>
                <a href="#" className="h-10 w-10 p-2 flex items-center justify-center text-white text-lg bg-[#375944] hover:bg-[#375944]/[0.9]">
                  <LuTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
