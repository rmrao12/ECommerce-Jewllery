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
    <div className="bg-white">
      {/* Header Section */}
      <div className='bg-[#F4ECE6] py-12 mb-10'
      style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="text-center m-auto mb-8 max-w-[350px] sm:max-w-[500px]">
        <div className="mb-5"> 
        <h1 className="mb-[-90px] font-bold text-center text-[100px] text-[#ffffff] prata-font">A</h1>
          <h1 className="text-4xl prata-font">About Us
         
          </h1>
          </div>
          <p className="text-gray-700 text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
      </div>

     {/* Our Mission  */}
      <div className="m-auto mb-12 px-5 sm:px-0 sm:max-w-[600px]">
        
        <div>
          <div>
          <h1 className="mb-[-110px] font-bold text-center text-[120px] text-[#F4ECE6] prata-font">O</h1>
          <h2 className="text-4xl mb-16 text-center prata-font">Our Mission</h2>
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

    {/* Followers  */}
    <div className='flex flex-col sm:flex-row m-auto gap-20 place-content-center px-5'>
    <div className='flex flex-col gap-2 text-center' >
      <h2 ><Counter target={12} duration={800} className="prata-font text-7xl text-[#375944] text-center" /></h2>
      <p className='font-semibold text-xl text-center uppercase'>Years Experience</p>
    </div>
    <div className='flex flex-col gap-2 text-center' >
      <h2> <Counter target={46} duration={800} className="prata-font text-7xl text-[#375944] text-center" /></h2>
      <p className='font-semibold text-xl text-center uppercase'>Expert Partners</p>
    </div><div className='flex flex-col gap-2 text-center' >
      <h2 className="prata-font text-7xl text-[#375944] text-center" ><Counter target={1.6} duration={800} className='' decimalPlaces={1}/>K</h2>
      <p className='font-semibold text-xl text-center uppercase'>Happy Customers</p>
    </div><div className='flex flex-col gap-2 text-center' >
      <h2><Counter target={15} duration={800} className="prata-font text-7xl text-[#375944] text-center" /></h2>
      <p className='font-semibold text-xl text-center uppercase'>Active Projects</p>
    </div>
    </div>

      {/* Image and Intro Section */}
      <div style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        className="bg-[#F4ECE6] py-24 my-10">
          <div className='flex flex-col gap-10 md:gap-0 md:flex-row items-center m-auto mb-12 px-5 justify-between xl:max-w-[1200px] 2xl:max-w-[1500px]'>
            <div className="md:w-1/2">
              <img src={about} alt="Flower Girl" className='lg:h-[500px] m-auto' />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className='mb-8'>
                <h1 className="mb-[-110px] text-[120px] text-white prata-font">H</h1>
                <h2 className="text-4xl prata-font mb-4">Hi! I'm Ghulam Mustafa Rao.</h2>
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


      {/*our story*/}
        <div className="mb-10">
        <div className="text-center m-auto mb-8 max-w-[350px] sm:max-w-[500px]">
        <div className="mb-5"> 
        <h1 className="mb-[-110px] prata-font text-center text-[120px] text-[#f5ece6]">O</h1>
          <h1 className="text-4xl prata-font">Our Story
         
          </h1>
          </div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
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
  <Link 
    to="/shop" 
    className="px-6 py-3 bg-[#375944] text-white text-lg hover:bg-[#629676] prata-font transition duration-300"
  >
    GO TO SHOP
  </Link>
  </div>

         </div>

  {/* Customers love us  */}
  <div className='bg-[#F4ECE6] py-12'
       style={{ backgroundImage: `url(${lines})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="text-center m-auto mb-8 max-w-[350px] sm:max-w-[500px]">
        <div className="mb-8"> 
            <h1 className="mb-[-110px] prata-font text-center text-[120px] text-[#ffffff]">L</h1>
            <h1 className="text-4xl prata-font">Customers love us</h1>
          </div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
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


    <div
    style={{ backgroundImage: `url(${Discounts})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className=' bg-black/40 w-full py-24'>
       
        <div className="text-center m-auto mb-8 max-w-[350px] sm:max-w-[700px]">
        <div className="mb-8"> 
            <h1 className="mb-[-110px] prata-font text-center text-[120px] text-slate-500/70">G</h1>
            <h1 className="text-4xl prata-font text-white">Get Discount 20% OFF!</h1>
            <p className="text-xl font-semibold text-white my-8">SUBSCRIBE OUR NEWSLETTER AND GET DISCOUNT 20% OFF</p>
          </div>
          
        </div>

      <div className='max-w-[350px] sm:max-w-[600px] lg:max-w-[800px] bg-white/80 py-10 px-5 sm:px-20 m-auto'>
      <input type='email' placeholder='Email Address' className='py-5 w-full text-2xl bg-black/0 border-0 border-b-2 border-black mb-8 focus:outline-none focus:ring-white focus:border-[#000000]' />
      <p 
    // to="/shop" 
    className="block px-6 py-3 bg-[#375944] text-center text-white prata-font text-lg hover:bg-[#629676] transition duration-300"
  >
    SUBSCRIBE NOW
  </p>
      </div>
      
        </div>
    </div>

    </div>
  );
}

export default AboutUs;
