import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../Images/banner-bg.webp';
import bannerRingImg from '../Images/banner-sm-img.jpg';
import lines from '../Images/lines.png';
import product1 from '../Images/product-2.jpg';
import product2 from '../Images/product-1.jpg';

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Background Image Column */}
      <div 
        className="w-full lg:w-1/2 bg-cover bg-center relative self-stretch lg:order-first order-last"
        style={{backgroundImage: `url(${bannerBg})`}}        
      >
        {/* Overlay to ensure text is readable */}
        <div className="text-right pt-[100px] pb-[300px]">
          <img src={bannerRingImg} className="w-100 max-w-[250px] border-[#ffffff] border-[15px] mr-0 lg:mr-[-20px] xl:mr-[-40px] ml-[auto]"/>
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col self-stretch items-center justify-center py-[80px] md:py-[100px] lg:py-[120px] xl:px-[60px] lg:px-[35px] md:px-[60px] px-[20px] overflow-hidden bg-[#f5ece6] bg-center bg-cover" style={{ backgroundImage: `url(${lines})` }}>

        {/* Text and Button */}
        <div className="text-center">
          <h1 className="text-center title-letter text-[#ffffff] font-prata font-bold">N</h1>
          <h1 className="text-4xl md:text-[45px] xl:text-[55px] font-bold text-gray-800 mb-4 font-prata leading-[1.3em]">New Handmade <br />Jewelry Collection</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-6">
            <Link to="/shop" className="px-8 py-4 text-white btn-main hover:bg-[375944]/[0.6]">
              Explore More
            </Link>
          </div>
        </div>
        {/* Products Section */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
        <Link to={`/product/${4}`}>
          <div className="bg-white p-4 shadow-lg flex items-center">
        
            <img 
              src={product1} 
              alt="Bliss Golden Ring" 
              className="xl:w-full max-w-[100px] w-50 h-auto mr-4"
            />
            <div className="text-left">
              <h5 className="text-xl font-semibold mb-2">Bliss Golden Ring</h5>
              <p className="text-gray-700">$249</p>
            </div>
           
          </div>
          </Link>

          <Link to={`/product/${8}`}>
          {/* Product 2 */}
          <div className="bg-white p-4 shadow-lg flex items-center">
            <img 
              src={product2} 
              alt="Bliss Golden Ring" 
              className="xl:w-full max-w-[100px] w-50 h-auto mr-4"
            />
            <div className="text-left">
              <h5 className="text-xl font-semibold mb-2">Round Stud Earrings</h5>
              <p className="text-gray-700">$159</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
