import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ProductList = () => {
  const { addToCart } = useCart(); 
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    const storedProductDetails = JSON.parse(localStorage.getItem('productDetails')) || {};
    // Convert object to array and limit to the first 8 items
    const productArray = Object.values(storedProductDetails).slice(0, 8);
    setProducts(productArray);
  }, []);
  const handleAddToCart = (item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      console.log('Adding to cart:', { ...item, price: numericPrice, id: item.id, quantity: 1 });
      addToCart({ ...item, price: numericPrice, id: item.id }, 1);
    };
  
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
                    <button onClick={() => handleAddToCart(product)} data-quantity="1" class="flex uppercase items-center gap-2 add_to_cart_button text-[15px] font-mulish" data-product_id={product.id} >Add to cart<MdOutlineArrowRightAlt /></button>
                  </div>
                </div>
            
            </div>
          ))}
        </div>
  );
};

export default ProductList;
