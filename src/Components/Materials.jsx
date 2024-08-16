import React from 'react';
import { Link } from 'react-router-dom';
import lines from '../Images/lines.png';
const Materials = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className='bg-[#F4ECE6] py-12 mb-10 bg-repeat-x' style={{ backgroundImage: `url(${lines})`}}>        
        <div className="text-center m-auto mb-8 max-w-[350px] sm:max-w-[500px]">
          <div className="mb-5"> 
            <h1 className="mb-[-90px] font-bold text-center text-[100px] text-[#ffffff] prata-font">M</h1>
            <h1 className="text-4xl font-semi prata-font">Our Materials
          
            </h1>
          </div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </div>

      {/* Materials Section */}
      <div className="container mx-auto px-4 max-w-[1200px]"> {/* Adjust max-width here */}
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row mb-16 items-center gap-8"> {/* Added gap */}
          <div className="lg:w-1/2 place-content-center md:pe-10 lg:pe-20">
              <div className="mb-5"> 
                <h1 className="mb-[-90px] prata-font font-semibold text-[100px] text-[#f5ece6]">G</h1>
                <h1 className="text-4xl prata-font font-semibold">14k Solid Gold</h1>
              </div>
              <p>Solid gold is a precious metal that will not oxidize or discolor since it is the least reactive metal. The 14k alloy gives our pieces their beautiful, subtle hue. It is also an active lifestyle’s best friend; it scratches less and doesn’t bend or wear out as easily as 18k.</p>
          </div>
          <div className="lg:w-1/2">
            <img src="/Imagess/mat1.jpg" alt="14k Solid Gold" className="w-full h-auto object-cover"/> {/* Adjusted image height */}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row mb-16 items-center gap-8"> {/* Added gap */}
          <div className="lg:w-1/4">
            <div className="mb-5"> 
              <h1 className="mb-[-90px] prata-font font-semibold text-[100px] text-[#f5ece6]">S</h1>
              <h1 className="text-4xl prata-font font-semibold">Sterling Silver</h1>
            </div>
            <p>925 Sterling Silver is an alloy made of 92.5% pure silver and 7.5% copper. We plate our silver jewelry in rhodium, which gives it extra shine and durability. Rhodium is one of the costliest precious metals due to its rarity.</p>
          </div>
          <div className="lg:w-1/2 flex justify-center"> 
            <img src="/Imagess/mat.jpg" alt="Sterling Silver" className="w-[300px] h-auto object-cover max-h-[300px] mx-auto"/> 
          </div>
          <div className="lg:w-1/4">
            <div className="mb-5"> 
              <h1 className="mb-[-90px] prata-font font-semibold text-[100px] text-[#f5ece6]">D</h1>
              <h1 className="text-4xl prata-font font-semibold">Diamonds</h1>
            </div>
            <p>Diamonds are one of the hardest natural substances found on earth. Our high-quality diamonds are ethically sourced from our suppliers who follow conflict-free and socially responsible practices.</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row-reverse mb-16 items-center gap-8"> 
          <div className="lg:w-1/2 md:ps-10 lg:ps-20">
            <div className="mb-5"> 
              <h1 className="mb-[-90px] prata-font font-semibold text-[100px] text-[#f5ece6]">P</h1>
              <h1 className="text-4xl prata-font font-semibold">Pearls</h1>
            </div>
            <div className="mt-6">
              <p>Pearls are a symbol of elegance and refinement. They are the only gemstones created by living organisms, and our pearls are sourced from sustainable farms that prioritize the health of the oceans.</p>
              <Link to="/aboutus" className="inline-block px-6 py-3 bg-[#375944] text-white font-semibold text-lg rounded-0 hover:bg-[#375944]">More About Us</Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/Imagess/mat2.jpg" alt="Pearls" className="w-full h-auto object-cover"/> 
          </div>
        </div>

        {/* More About Us Button */}
       
      </div>
    </div>
  );
}

export default Materials;
