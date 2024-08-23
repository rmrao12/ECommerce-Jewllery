import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom';
import lines from '../Images/lines.png';
import CategoriesSection from './CategoriesSection'
import ProductList from './ProductList'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <section className="pt-16 px-8">
        <div class="container mx-auto mb-[-80px]">
          <div class="max-w-[550px] mx-auto text-center">
            <h2 className="title-letter text-[#f5ece6]">C</h2>
            <h2 className="font-semibold mb-4 font-prata text-black mb-[0.5em]">All Categories</h2>
            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <CategoriesSection/>
        </div>
      </section>
      <section className="bg-[#f5ece6] bg-center bg-cover pt-32 pb-16 px-8" style={{ backgroundImage: `url(${lines})` }}>
        <div class="container mx-auto">
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
      <section className="pt-16 px-0">
        <div class="container max-w-[100%] px-0">
          <div class="max-w-[600px] mx-auto text-center md:px-0 px-8">
            <h2 className="title-letter text-[#f5ece6]">F</h2>
            <h2 className="font-semibold mb-4 font-prata text-black mb-[0.5em]">Follow Us</h2>
            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            <div class="col-span-1">
              <img src="./Imagess/story1.jpg" />
            </div>
            <div class="col-span-1">
              <img src="./Imagess/story2.jpg" />
            </div>
            <div class="col-span-1">
              <img src="./Imagess/story3.jpg" />
            </div>
            <div class="col-span-1">
              <img src="./Imagess/story4.jpg" />
            </div>
            <div class="col-span-1">
              <img src="./Imagess/story5.jpg" />
            </div>
            <div class="col-span-1">
              <img src="./Imagess/story6.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
