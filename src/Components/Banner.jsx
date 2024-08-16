import React from 'react';
import bannerBg from '../Images/banner-bg.webp';
import bannerRingImg from '../Images/banner-sm-img.jpg';
import bannerContentBg from '../Images/banner-content-bg.webp';
import product1 from '../Images/product-2.jpg';
import product2 from '../Images/product-1.jpg';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row relative">
      {/* Background Image Column */}
      <div 
        className="w-full lg:w-1/2 bg-cover bg-center relative self-stretch"
        style={{backgroundImage: `url(${bannerBg})`}}        
      >
        {/* Overlay to ensure text is readable */}
        <div className="text-right pt-[100px] pb-[300px]">
          <img src={bannerRingImg} className="w-100 max-w-[250px] border-[#ffffff] border-[15px] lg:mr-[-40px] ml-[auto]"/>
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col self-stretch items-center justify-center py-[120px] md:px-[60px] px-[20px] overflow-hidden bg-[#f5ece6] bg-center bg-cover" style={{ backgroundImage: `url(${bannerContentBg})` }}>

        {/* Text and Button */}
        <div className="text-center">
          <p className="mb-[-100px] text-center text-[130px] text-[#ffffff] prata-font">N</p>
          <h1 className="md:text-5xl lg:text-[55px] font-bold text-gray-800 mb-4 prata-font">New Handmade <br />Jewelry Collection</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="px-6 py-3 text-white btn-main prata-font text-[20px] hover:bg-[375944]/[0.6]">
            Explore More
          </button>
        </div>

        {/* Products Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Product 1 */}
          <div className="bg-white p-4 shadow-lg flex items-center">
            <img 
              src={product1} 
              alt="Bliss Golden Ring" 
              className="w-full max-w-[100px] h-auto mr-4"
            />
            <div className="text-left">
              <h5 className="text-xl font-semibold mb-2">Bliss Golden Ring</h5>
              <p className="text-gray-700">$249</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 shadow-lg flex items-center">
            <img 
              src={product2} 
              alt="Bliss Golden Ring" 
              className="w-full max-w-[100px] h-auto mr-4"
            />
            <div className="text-left">
              <h5 className="text-xl font-semibold mb-2">Carla Golden Earrings</h5>
              <p className="text-gray-700">$159</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
