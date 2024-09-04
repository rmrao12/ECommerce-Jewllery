import React, { useEffect, useState } from 'react';
import about from '../Images/about.jpg'
import lines from '../Images/lines.png';
import c1 from '../Images/cone.jpg';
import c2 from '../Images/c2.jpg';
import c3 from '../Images/c3.jpg';
import Discounts from '../Images/Discounts.jpg';

import { FaStar,FaFacebookF, FaInstagram, FaYoutube, FaShoppingCart,FaEnvelope,FaMap,FaPhone } from 'react-icons/fa';

import { Link } from 'react-router-dom';


function Counter({ target, duration, className ,decimalPlaces = 0}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 100);

    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= target) {
          clearInterval(timer);
          return target;
        }
        return prevCount + increment;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={`font-semibold text-center ${className}`}>
      {count.toFixed(decimalPlaces)}
    </span>
  );
}
const AboutUs = () => {
  
  return (
    <div className="bg-white pt-20">
      {/* Header Section */}
      <section className='bg-[#F4ECE6] py-12 mb-10'
       style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto">
          <div className="mb-5 max-w-[600px] mx-auto text-center"> 
            <h1 className="title-letter text-center text-[#ffffff]">A</h1>
            <h1 className="text-[34px] font-semibold font-prata mb-[.5em]">About Us</h1>
            <p className="text-gray-700 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
        </div>
      </section>

     {/* Our Mission  */}
     <section>
        <div class="container mx-auto">
          <div className="m-auto mb-12 px-5 sm:px-0 mx-auto sm:max-w-[600px]">
            <div>
              <div class="mx-auto text-center mb-8">
                <h2 className="title-letter text-[#f5ece6]">O</h2>
                <h2 className="font-semibold mb-4 font-prata text-black mb-[0.5em]">Our Mission</h2>
              </div>
              <p className="text-gray-700 my-4 text-center text-[18px]">
              Nulla posuere sollicitudin aliquam ultrices. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Vitae purus faucibus ornare suspendisse sed. <span className="italic text-[#000000] font-semibold">Sapien et ligula ullamcorper</span> malesuada proin libero nunc consequat. Metus dictum at tempor commodo. 
              </p>
              <p className="text-gray-700 mb-4 text-center text-[18px]">
              Erat nam at lectus urna duis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Id aliquet risus
              feugiat in ante metus dictum. Ac tortor vitae purus faucibus ornare suspendisse sed. <span className="font-semibold text-[#375944] italic underline">Montes nascetur ridiculus mus mauris </span>
                vitae ultricies leo. Tincidunt augue interdum velit euismod in pellentesque massa. Sit amet cursus sit amet dictum. Euismod quis viverra nibh cras 
              pulvinar.
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row m-auto gap-20 place-content-center px-5'>
            <div className='flex flex-col gap-2 text-center' >
              <h2><Counter target={12} duration={800} className="font-prata text-5xl text-[#375944] text-center font-normal" /></h2>
              <p className='font-semibold text-xl text-center uppercase'>Years Experience</p>
            </div>
            <div className='flex flex-col gap-2 text-center' >
              <h2> <Counter target={46} duration={800} className="font-prata text-5xl text-[#375944] text-center font-normal" /></h2>
              <p className='font-semibold text-xl text-center uppercase'>Expert Partners</p>
            </div>
            <div className='flex flex-col gap-2 text-center' >
              <h2 className="font-prata text-5xl text-[#375944] text-center font-normal"><Counter target={1.6} duration={800} decimalPlaces={1} className="font-normal"/>K</h2>
              <p className='font-semibold text-xl text-center uppercase'>Happy Customers</p>
            </div>
            <div className='flex flex-col gap-2 text-center' >
              <h2><Counter target={15} duration={800} className="font-prata text-5xl text-[#375944] text-center font-normal" /></h2>
              <p className='font-semibold text-xl text-center uppercase'>Active Projects</p>
            </div>
          </div>
        </div>
     </section>
    {/* Followers  */}
    {/* Image and Intro Section */}
      <section style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        className="bg-[#F4ECE6] py-24 my-10">
        <div class="conatiner mx-auto">
          <div className='flex flex-col gap-10 md:gap-0 md:flex-row items-center m-auto mb-12 px-5 justify-between xl:max-w-[1200px] 2xl:max-w-[1500px]'>
            <div className="md:w-1/2">
              <img src={about} alt="Flower Girl" className='lg:h-[500px] m-auto' />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div class="max-w-[600px] ml-0 mb-8">
                <h2 className="title-letter text-[#ffffff] mb-8">H</h2>
                <h2 className="font-semibold mb-4 font-prata text-black mb-[0.5em]">
                  Hi! I’m Ghulam Mustafa Rao.
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc. Turpis in eu mi bibendum.
              </p>
              <p className="text-gray-700 mb-4 text-md">
                Feugiat vivamus at augue eget arcu dictum varius duis at. Id aliquet lectus proin nibh nisl. <span className="font-semibold">Egestas integer eget aliquet nibh praesent</span> tristique. Aliquet sagittis id consectetur purus ut faucibus. Interdum varius sit amet mattis. Id leo in vitae.
              </p>
              <div class="flex items-center">
                <a href="#" className="text-white bg-[#375944] hover:bg-[#557662] flex p-3 justify-center items-center text-md mr-3 rounded-full">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white bg-[#375944] hover:bg-[#557662] flex p-3 justify-center items-center text-md mr-3 rounded-full">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white bg-[#375944] hover:bg-[#557662] flex p-3 justify-center items-center text-md rounded-full">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*our story*/}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="mb-5 max-w-[600px] mx-auto text-center mb-8"> 
            <h1 className="title-letter text-center text-[#f5ece6]">O</h1>
            <h1 className="text-[34px] font-semibold font-prata mb-[.5em]">Our Story</h1>
            <p className="text-gray-700 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 max-w-[1200px] m-auto mb-10 px-5">
            <img  src="/Imagess/story1.jpg"/>
            <img  src="/Imagess/story2.jpg"/>
            <img  src="/Imagess/story3.jpg"/>
            <img  src="/Imagess/story4.jpg"/>
            <img  src="/Imagess/story5.jpg"/>
            <img  src="/Imagess/story6.jpg"/>
            <img  src="/Imagess/story7.jpg"/>
            <img  src="/Imagess/story8.jpg"/>
            <img  src="/Imagess/story9.jpg"/>
            <img  src="/Imagess/story10.jpg"/>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/shop" className="px-6 py-3 bg-[#375944] text-white text-lg hover:bg-[#629676] font-prata transition duration-300">
              GO TO SHOP
            </Link>
          </div>
        </div>
      </section>

      {/* Customers love us  */}
      <section className='bg-[#F4ECE6] py-12 bg-no-repeat bg-blend-overlay bg-cover bg-center'
       style={{ backgroundImage: `url(${lines})` }}>
        <div class="container mx-auto">
          <div className="mb-5 max-w-[600px] mx-auto text-center"> 
            <h1 className="title-letter text-center text-[#ffffff]">L</h1>
            <h1 className="text-[34px] font-semibold font-prata mb-[.5em]">Customers love us</h1>
            <p className="text-gray-700 mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <div className='flex flex-col lg:flex-row m-auto my-10 gap-16 max-w-[350px] sm:max-w-[400px] lg:max-w-[1100px] px-5'>
            <div className='p-5 bg-white' >
              <span className='flex flex-row mb-5' >
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
              </span>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales.”</p>
              <div className=" md:text-left flex flex-row gap-5 my-5">
                <img src={c1} className='h-[65px] w-[65px] rounded-[50%]'/>
                <span className='w-full place-content-center'>
                  <h1 className="text-xl font-semi">Alexa Johnson</h1>
                  <p className="text-md text-slate-500">San Diego, CA</p>
                </span>
              </div>
            </div> 
            <div className='p-5 bg-white' >
              <span className='flex flex-row mb-5' >
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
              </span>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales.”</p>
              <div className=" md:text-left flex flex-row gap-5 my-5">
                <img src={c2} className='h-[65px] w-[65px] rounded-[50%]'/>
                <span className='w-full place-content-center'>
                  <h1 className="text-xl font-semi">Karen Schwartz</h1>
                  <p className="text-md text-slate-500">Katy, TX</p>
                </span>
              </div>
            </div> 
            <div className='p-5 bg-white' >
              <span className='flex flex-row mb-5' >
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
                <FaStar color='#ffee00' />
              </span>
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales.”</p>
              <div className=" md:text-left flex flex-row gap-5 my-5">
                <img src={c3} className='h-[65px] w-[65px] rounded-[50%]'/>
                <span className='w-full place-content-center'>
                  <h1 className="text-xl font-semi">Julius Maas</h1>
                  <p className="text-md text-slate-500">Oklahoma City, OK</p>
                </span>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section className="py-20 bg-black/40 w-full bg-cover bg-no-repeat bg-blend-overlay bg-center"  style={{ backgroundImage: `url(${Discounts})`}}>
        <div class="container mx-auto">  
          <div className=''>
            <div className="text-center m-auto mb-8 max-w-[600px]">
              <h2 className="title-letter text-[#ffffff]/[30%] font-prata">G</h2>
              <h2 className="font-semibold mb-4 font-prata text-white">Get Discount 20% OFF!</h2>
              <p className="text-xl font-semibold text-white my-8">SUBSCRIBE OUR NEWSLETTER AND GET DISCOUNT 20% OFF</p>
            </div>
            <div className='max-w-[350px] sm:max-w-[600px] lg:max-w-[800px] bg-white/80 py-10 px-5 sm:px-20 m-auto'>
              <input type='email' placeholder='Email Address' className='py-5 w-full text-2xl bg-black/0 border-0 border-b-2 border-black mb-8 focus:outline-none focus:ring-white focus:border-[#000000]' />
              <p className="block px-6 py-3 bg-[#375944] text-center text-white font-prata text-lg hover:bg-[#629676] transition duration-300">
                SUBSCRIBE NOW
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
