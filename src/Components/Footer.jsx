import React from 'react';
import logo from '../Images/logo.webp';
import lines from '../Images/lines.png';
const Footer = () => {
  return (
    <div className="bg-[#f5ece6] bg-repeat-x" style={{ backgroundImage: `url(${lines})`}}>
    <section className="px-4">
      <div class="container max-w-[1200px] mx-auto py-16">
        <div className="grid md:grid-cols-4 grid-cols-1">
          <div className="lg:col-span-1 md:col-span-2 col-span-1 md:pe-4">
            <img src={logo} className="max-w-[180px]" />
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1 lg:pe-4">
            <h3 className="prata-font text-[23px] mb-5">Help & information</h3>
            <ul id="menu-help" class="menu">
              <li class="uppercase text-[17px] mb-3"><a href="/">Home</a></li>
              <li class="uppercase text-[17px] mb-3"><a href="/aboutus">About</a></li>
              <li class="uppercase text-[17px] mb-3"><a href="/materials">Materials</a></li>
              <li class="uppercase text-[17px] mb-3"><a href="/contactus">Contact Us</a></li>
              </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1 md:pe-4">
            <h3 className="prata-font text-[23px] mb-5">Categories</h3>
            <ul id="menu-help" class="menu">
              <li class="uppercase text-[17px] mb-3"><a href="/">Rings</a></li>
              <li class="uppercase text-[17px] mb-3"><a href="/aboutus">Necklaces</a></li>
              <li class="uppercase text-[17px] mb-3"><a href="/materials">Materials</a></li>
              <li class="uppercase text-[17px] mb-3"><a href="/contactus">Earrings</a></li>
              </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1">
            <img src={logo} className="max-w-[180px]" />
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="copyright border-0 border-t-[1px] border-[#ffffff] px-4">
        <div className="container max-w-[1280px] mx-auto py-4">
          <div>
            <p className="text-[18px] text-[#525252]">© 2024 Jewelry Shop - All Rights Reserved </p>
          </div>
        </div>
      </section>
     </div>
  );
};

export default Footer;
