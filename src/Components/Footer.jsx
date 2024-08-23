import React from 'react';
import logo from '../Images/logo.webp';
import lines from '../Images/lines.png';
const Footer = () => {
  return (
    <div className="">
    <section className="px-4">
      <div class="container max-w-[1200px] mx-auto py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-3">
          <div className="lg:col-span-2 col-span-3 md:pe-4 lg:text-left md:text-center text-left">
            <img src={logo} className="max-w-[180px] mb-4 mr-auto md:mx-auto lg:ml-0" />
            <p className="text-gray-600 mb-4 lg:max-w-[300px] font-lato leading-[1.8em]">
            Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec. Vitae turpis massa sed elementum tempus egestas volutpat diam ut venenati.
            </p>
          </div>
          <div className="lg:col-span-1 col-span-1">
            <h3 className="font-prata font-semibold text-[16px] md:text-[20px] mb-5">Help & information</h3>
            <ul id="menu-help" class="menu">
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/">Home</a></li>
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/aboutus">About</a></li>
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/blog">Blogs</a></li>
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/contactus">Contact Us</a></li>
            </ul>
          </div>
          <div className="lg:col-span-1 col-span-1">
            <h3 className="font-prata font-semibold text-[16px] md:text-[20px] mb-5">Categories</h3>
            <ul id="menu-help" class="menu">
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/rings">Rings</a></li>
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/aboutus">Necklaces</a></li>
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/materials">Materials</a></li>
              <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/contactus">Earrings</a></li>
              </ul>
          </div>
          <div className="lg:col-span-1 col-span-1 md:pe-4">
            <h3 className="font-prata font-semibold text-[16px] md:text-[20px] mb-5">Shop</h3>
              <ul id="menu-help" class="menu">
                <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/shop">Shop</a></li>
                <li class="text-[16px] md:text-[18px] font-lato mb-3"><a href="/cart">Cart</a></li>
                <li class="v font-lato mb-3"><a href="/checkout">Checkout</a></li>
              </ul>
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
