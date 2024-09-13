// src/EarringsPage.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import { MdOutlineArrowRightAlt } from "react-icons/md";

import { useDispatch,useSelector } from 'react-redux';

import { fetchProductsByCategory } from '../Redux/StoreAPIs.jsx'
const ITEMS_PER_PAGE = 12;

const RingsPage = () => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const [currentItems, setCurrentItems] = useState([]);
  

  const [rings, setRings] = useState([]);

  const dispatch = useDispatch();
    // Use the correct state access here
    const posts = useSelector((state) => {
      return state.post.categories;});
    const error = useSelector((state) => state.post.error);
    const status = useSelector((state) => state.post.status);
const catId = "66d55d9f8f17d5a5755631da";
    useEffect(()=>
    {
      
       
          if(catId!="")
            dispatch(fetchProductsByCategory(catId));
        

    },[catId,dispatch]);

    let content;
    const [totalPages, setTotalPages] = useState(0);
    // Update products only when posts data is fetched and status is 'Succeeded'
  useEffect(() => {
    if (status === 'Succeeded') 
    {     
      setRings(posts.data);
      let tempRings = posts.data;
      if(tempRings != undefined && tempRings.length > 0)
      {
        setCurrentItems(tempRings.slice(indexOfFirstItem, indexOfLastItem));
        setTotalPages(Math.ceil(tempRings.length / ITEMS_PER_PAGE));
      }
    }
  }, [status, posts]);

  if (status === 'Loading') {
    content = <div>...loading</div>;
  } 
  else if (status === 'Failed') {
    content = <div>{error}</div>;
  }


  const { addToCart } = useCart(); 
  
  // useEffect(() => {
  //   const storedProducts = localStorage.getItem('productDetails');
  //   if (storedProducts) {
  //     const products = JSON.parse(storedProducts);
  //     // Filter only earring products
  //     const ringProducts = Object.keys(products).map(key => products[key]).filter(
  //       (product) => product.category === 'ring'
  //     );
  //     setRings(ringProducts);
  //   }
  // }, []);
 
  
  

  const handleAddToCart = (id) => {
    // const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    //   console.log('Adding to cart:', { ...item, price: numericPrice, id: item.id, quantity: 1 });
    //   addToCart({ ...item, price: numericPrice, id: item.id }, 1);
      // const numericPrice = parseFloat(product.price);
      // console.log('Adding to cart:', { ...product, price: numericPrice,id, quantity });
      addToCart( id , 1);
    };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div>
      <section className="bg-[#99988e] py-24">
        <div class="container mx-auto pt-20">
          <header className="text-center m-auto max-w-[350px] sm:max-w-[500px]">
            <h1 className="text-4xl font-bold text-white text-[50px] font-prata mb-4">Rings</h1>
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
      </section>
      <section className="bg-[#F4ECE6]">
        <div className="container mx-auto py-10 px-4">
          <p>Showing {currentItems.length} of {rings != undefined ? rings.length : 0} Items</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map(item => (
              <div key={item._id} className="relative bg-white product-box rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link to={`/product/${item._id}`} className="block">
                  <img
                    src={`http://localhost:5000/${item.image.replace(/\\/g, '/')}`}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  </Link>
                  <div className="p-4 bg-white mx-3 product-meta px-[1rem] pt-[1rem] pb-[1.5rem] relative rounded">
                    <Link to={`/product/${item._id}`} className="block text-[15px]">
                      <h2 className="text-[17px] font-prata mb-2">{item.name}</h2>
                      <p className="text-gray-600 mb-[0.38rem]">${item.price}</p>
                    </Link>
                    <div className="action-btn absolute bottom-[-2rem] left-0 mt-3 px-[1rem] right-0 opacity-[0] font-semibold">
                      <button onClick={() => handleAddToCart(item._id)} data-quantity="1" class="flex uppercase items-center gap-2 add_to_cart_button text-[15px] font-mulish" data-product_id={item.id} >Add to cart<MdOutlineArrowRightAlt /></button>
                    </div>
                  </div>
                
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
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

export default React.memo(RingsPage);
