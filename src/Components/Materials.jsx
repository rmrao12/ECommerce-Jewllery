import React from 'react';
import { Link } from 'react-router-dom';
import lines from '../Images/lines.png';
import CategoriesSection from './CategoriesSection'
import ProductList from './ProductList'
const Materials = () => {
  return (
    <div className="bg-white pt-20">
      {/* Header Section */}
      <section className='bg-[#F4ECE6] py-12 mb-10 bg-repeat-x' style={{ backgroundImage: `url(${lines})`}}>
        <div className="container mx-auto px-4">        
          <div className="text-center mx-auto mb-8 max-w-[600px]">
            <div className="mb-5 max-w-[600px] mx-auto text-center"> 
              <h1 className="title-letter text-center text-[#ffffff]">M</h1>
              <h1 className="text-[34px] font-semibold font-prata mb-[.5em]">Our Materials</h1>
              <p className="text-gray-700 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Materials Section */}
      <section>
        <div className="container mx-auto px-4"> {/* Adjust max-width here */}
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row mb-12 lg:mb-16 items-center gap-8"> {/* Added gap */}
            <div className="lg:w-1/2 place-content-center md:pe-10 lg:pe-20">
                <div className="mb-8"> 
                  <h2 className="title-letter text-[#f5ece6]">G</h2>
                  <h2 className="font-semibold font-prata mb-[.5em]">14k Solid Gold</h2>
                </div>
                <p>Solid gold is a precious metal that will not oxidize or discolor since it is the least reactive metal. The 14k alloy gives our pieces their beautiful, subtle hue. It is also an active lifestyle’s best friend; it scratches less and doesn’t bend or wear out as easily as 18k.</p>
            </div>
            <div className="lg:w-1/2">
              <img src="/Imagess/mat1.jpg" alt="14k Solid Gold" className="w-full h-auto object-cover"/> {/* Adjusted image height */}
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row mb-12 lg:mb-16 gap-8">
            <div className="lg:w-1/4 self-end">
              <div className="mb-8"> 
                <h2 className="title-letter text-[#f5ece6]">S</h2>
                <h2 className="text-[34px] font-semibold font-prata mb-[.5em]">Sterling Silver</h2>
              </div>
              <p>925 Sterling Silver is an alloy made of 92.5% pure silver and 7.5% copper. We plate our silver jewelry in rhodium, which gives it extra shine and durability. Rhodium is one of the costliest precious metals due to its rarity.</p>
            </div>
            <div className="w-full lg:w-1/2"> 
              <img src="/Imagess/mat.jpg" alt="Sterling Silver" className="max-w-[400px] full mx-auto"/> 
            </div>
            <div className="lg:w-1/4 ">
              <div className="mb-8"> 
                  <h2 className="title-letter text-[#f5ece6]">D</h2>
                  <h2 className="font-semibold font-prata mb-[.5em]">Diamonds</h2>
              </div>
              <p>Diamonds are one of the hardest natural substances found on earth. Our high-quality diamonds are ethically sourced from our suppliers who follow conflict-free and socially responsible practices.</p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex flex-col-reverse lg:flex-row-reverse mb-12 lg:mb-16 items-center gap-8"> 
            <div className="lg:w-1/2 lg:ps-20">
              <div className="mb-8"> 
                <h2 className="title-letter text-[#f5ece6]">P</h2>
                <h2 className="font-semibold font-prata mb-[.5em]">Pearls</h2>
              </div>
              <p className="mb-5">Pearls are a symbol of elegance and refinement. They are the only gemstones created by living organisms, and our pearls are sourced from sustainable farms that prioritize the health of the oceans.</p>
              <Link to="/aboutus" className="inline-block px-6 py-3 bg-[#375944] text-white font-semibold text-lg rounded-0 hover:bg-[#375944]">More About Us</Link>
            </div>
            <div className="lg:w-1/2">
              <img src="/Imagess/mat2.jpg" alt="Pearls" className="w-full h-auto object-cover"/> 
            </div>
          </div>       
        </div>
      </section>
      <section className="bg-[#f5ece6] bg-center bg-cover py-16 px-8" style={{ backgroundImage: `url(${lines})` }}>
      <div class="container mx-auto">
          <div class="max-w-[600px] mx-auto text-center">
            <h2 className="title-letter text-[#ffffff]/[90%]">C</h2>
            <h2 className="font-semibold mb-4 font-prata text-black mb-[0.5em]">All Categories</h2>
            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <CategoriesSection/>
        </div>
        <div class="container mx-auto mt-20 lg:mt-24">
          <div class="max-w-[600px] mx-auto text-center">
            <h2 className="title-letter text-[#ffffff]/[90%]">B</h2>
            <h2 className="font-semibold mb-4 font-prata text-black mb-[0.5em]">Best Seller Product</h2>
            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <ProductList/>
          <div className="mt-8 text-center">
            <Link to="/shop" className="px-8 py-4 text-white btn-main hover:bg-[375944]/[0.6]">
              View All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Materials;
