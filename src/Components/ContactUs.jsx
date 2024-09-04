import React from 'react';
import flowerGirl from '../Images/flowerGirl.jpg';
import fromBg from '../Images/fromBg.png';
import ringBox from '../Images/ringBox.jpg';
import lines from '../Images/lines.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaShoppingCart,FaEnvelope,FaMap,FaPhone } from 'react-icons/fa';
import MapSection from './MapSection';
import FAQSection from './FAQSection';



const ContactUs = () => {
  return (
    <div className="bg-white pt-20">
      {/* Header Section */}
      <section className='bg-[#F4ECE6] py-12 mb-10'
       style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto">
          <div className="mb-5 max-w-[600px] mx-auto text-center"> 
            <h1 className="title-letter text-center text-[#ffffff]">C</h1>
            <h1 className="text-[34px] font-semibold font-prata mb-[.5em]">Contact Us</h1>
            <p className="text-gray-700 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
        </div>
      </section>
      {/* Image and Intro Section */}
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center m-auto mb-12 px-5 justify-between xl:max-w-[1200px] 2xl:max-w-[1500px]">
        <div className="md:w-1/2">
          <img src={flowerGirl} alt="Flower Girl" className='lg:max-w-[500px] mr-auto' />
        </div>
        <div className="md:w-1/2 md:px-16 px-8">
          <div className="mb-5 max-w-[600px] mx-auto mb-8"> 
            <h2 className="title-letter text-[#f5ece6]">H</h2>
            <h2 className="font-semibold font-prata mb-[.5em]">Have A Question? Contact Us!</h2>
          </div>
          <p className="text-gray-700 mb-4 font-lato text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc. Turpis in eu mi bibendum.
          </p>
          <p className="text-gray-700 mb-4 font-lato text-[18px]">
            Feugiat vivamus at augue eget arcu dictum varius duis at. Id aliquet lectus proin nibh nisl. <span className="font-semibold text-[#557662] italic underline">Egestas integer eget aliquet nibh praesent</span> tristique. Aliquet sagittis id consectetur purus ut faucibus. Interdum varius sit amet mattis. Id leo in vitae.
          </p>
        </div>
      </div>
      <section>

      </section>

      {/* Contact Form Section */}
      <div className="flex flex-col lg:flex-row items-start bg-white pt-4 pb-0 px-0 mb-0">
        <div className="w-full lg:w-1/2 h-full p-10 sm:p-12 lg:p-16 xl:p-24"
         style={{ backgroundImage: `url(${fromBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
         
          <form action="#" method="POST">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-lato text-white">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 border-white bg-transparent rounded-0 focus:outline-none focus:ring-none focus:border-white" 
                required 
              />
            </div>
            <div className="mb-6 w-[49%] mr-[1%] float-left">
              <label htmlFor="email" 
              className="block text-lg font-lato text-white">Email<span className='text-red-500'> *</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 border-white bg-transparent rounded-0 focus:outline-none focus:ring-none focus:border-white" 
                required 
              />
            </div>
            <div className="mb-6 w-[49%] ml-[1%] float-left">
              <label htmlFor="phone" className="block text-lg font-lato text-white">Phone Number<span className='text-red-500'> *</span></label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 border-white bg-transparent rounded-0 focus:outline-none focus:ring-none focus:border-white" 
                required
              />
            </div>
            <div className="mb-6 text-left">
              <label htmlFor="subject" className="block text-lg font-lato text-white">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 border-white bg-transparent rounded-0 focus:outline-none focus:ring-none focus:border-white" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-lato text-white">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="mt-1 block w-full px-3 py-2 border-0 border-b-2 border-white bg-transparent rounded-0 focus:outline-none focus:ring-none focus:border-white" 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-[#375944] text-white px-8 py-3 font-prata text-[18px] rounded-md shadow-sm hover:bg-[#375944]/[90%] focus:outline-none focus:ring-none focus:border-0"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 relative">
          <MapSection />
        </div>
      </div>
      {/* Contact Info Section */}
      <div className="flex flex-col gap-10 md:flex-row justify-center sm:justify-around bg-[#F4ECE6] py-12 px-4"
      style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className=" md:text-left flex flex-row gap-5">
          <span className='h-[65px] w-[65px] bg-white place-content-center'>
            <FaEnvelope size={30} className='m-auto' color='#375944'  />            
          </span>
          <span>
            <h2 className="text-3xl font-bold mb-2 ">Email Us</h2>
            <p>handmade@jewelry.com</p>
            <p>support@jewelry.com</p>
          </span>
        </div>
        <div className="md:text-left flex flex-row gap-5">
          <span className='h-[65px] w-[65px] bg-white place-content-center'>
            <FaMap size={30} className='m-auto' color='#375944' />
          </span>
          <span>
            <h2 className="text-3xl font-bold mb-2">Address</h2>
            <p>Manhattan Beach,</p>
            <p>Los Angeles</p>
          </span>
        </div>
        <div className="md:text-left flex flex-row gap-5">
          <span className='h-[65px] w-[65px] bg-white place-content-center'>
            <FaPhone size={30} className='m-auto' color='#375944' />            
          </span>
          <span>
            <h2 className="text-3xl font-bold mb-2">Call Us</h2>
            <p>+1 (323)-456-91-23</p>
            <p>+1 (987)-654-32-11</p>
          </span>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="bg-black/40 bg-blend-overlay bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url(${ringBox})`}}>
        <FAQSection />
      </section>
    </div>
  );
}

export default ContactUs;
