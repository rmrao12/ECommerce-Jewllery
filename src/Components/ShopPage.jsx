import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lines from '../Images/lines.png';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useCart } from '../Contexts/CartContext';

import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/StoreAPIs.jsx'

const ITEMS_PER_PAGE = 20;

const ShopPage = () => {
 

   
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const [currentItems, setCurrentItems] = useState([]);


  const [products, setProducts] = useState([]); 

  const dispatch = useDispatch();
    // Use the correct state access here
    const posts = useSelector((state) => {
      console.log('State:', state);
      return state.post.products;});
    const error = useSelector((state) => state.post.error);
    const status = useSelector((state) => state.post.status);

    useEffect(()=>
    {
       // if(status==='Succeeded')
      //  {
          console.log("fetchPosts");
            dispatch(fetchProducts());
        //}

    },[dispatch]);

    let content;
    const [totalPages, setTotalPages] = useState(0);
    // Update products only when posts data is fetched and status is 'Succeeded'
  useEffect(() => {
    console.log("status"+status);
    if (status === 'Succeeded') {
      //console.log(posts);
      setProducts(posts.data);
      let tempProducts = posts.data;
      if(tempProducts != undefined && tempProducts.length > 0)
        {
      setCurrentItems(tempProducts.slice(indexOfFirstItem, indexOfLastItem));
      setTotalPages(Math.ceil(tempProducts.length / ITEMS_PER_PAGE));
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
  //   const storedProductDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
  //   // Convert object to array and limit to the first 8 items
  //   const productArray = Object.values(storedProductDetails).slice(0, 8);
  //   setProducts(productArray);
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
      {/* Header Section */}
      <section className="bg-[#99988e] py-24">
        <div className="container mx-auto pt-20">
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
            key={product._id}
            className="relative bg-white product-box rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
              <Link to={`/product/${product._id}`} className="block">
                <img
                  src={`https://jewllerystorebackend.vercel.app/${product.image.replace(/\\/g, '/')}`}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                  </Link>
                <div className="p-4 bg-white mx-3 product-meta px-[1rem] pt-[1rem] pb-[1.5rem] relative rounded">
                  <Link to={`/product/${product._id}`} className="block text-[15px]">
                    <h2 className="text-[17px] font-prata mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-[0.38rem]">${product.price}</p>
                  </Link>
                  <div className="action-btn absolute bottom-[-2rem] left-0 mt-3 px-[1rem] right-0 opacity-[0] font-semibold">
                    <button onClick={() => handleAddToCart(product._id)} data-quantity="1" class="flex uppercase items-center gap-2 add_to_cart_button text-[15px] font-mulish" data-product_id="${product.id}">Add to cart<MdOutlineArrowRightAlt /></button>
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
