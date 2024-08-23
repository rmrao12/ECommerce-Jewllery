import React from 'react';

const CategoriesSection = () => {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between md:grid-cols-3">
          <div className=" col-span-1 sm:col-span-2 md:col-span-1 mb-0">
            <div className="py-[140px] px-8 bg-[#212121]/[30%] bg-blend-overlay bg-cover bg-center text-center" style={{ backgroundImage: "url('/Imagess/category-1.jpg')" }}>
              <h2 className="title-letter text-[#e2dacf]/[53%]">N</h2>
              <h2 className="font-semibold mb-4 font-prata text-white mb-[0.5em]">Necklaces</h2>
            </div>
          </div> 
          <div className=" col-span-1 sm:col-span-2 md:col-span-1 mb-0">
            <div className="py-[140px] px-8 bg-[#212121]/[30%] bg-blend-overlay bg-cover bg-center text-center" style={{ backgroundImage: "url('/Imagess/category-2.jpg')" }}>
              <h2 className="title-letter text-[#e2dacf]/[53%]">R</h2>
              <h2 className="font-semibold mb-4 font-prata text-white mb-[0.5em]">Rings</h2>
            </div>
          </div> 
          <div className=" col-span-1 sm:col-span-2 md:col-span-1 mb-0">
            <div className="py-[140px] px-8 bg-[#212121]/[30%] bg-blend-overlay bg-cover bg-center text-center" style={{ backgroundImage: "url('/Imagess/category-3.jpg')" }}>
              <h2 className="title-letter text-[#e2dacf]/[53%]">E</h2>
              <h2 className="font-semibold mb-4 font-prata text-white mb-[0.5em]">Earrings</h2>
            </div>
          </div>          
        </div>
  );
};

export default CategoriesSection;
