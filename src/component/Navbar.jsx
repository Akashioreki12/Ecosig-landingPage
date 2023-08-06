import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logoImage from '../assets/Logo_EcoSign_final.png';
import logoImageWhite from '../assets/Logo_EcoSign_White.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar({ darkMode, handleToggleDarkMode }) {
  const [nav, setNav] = React.useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='flex justify-between items-center h-24 max-w-[1245px] mx-4 md:mx-20 px-2 md:px-0'>
        <img
          src={darkMode ? logoImageWhite : logoImage}
          alt='Logo'
          className='h-10'
        />
        <ul className={`hidden md:flex items-center space-x-7 ${darkMode ? 'text-white' : 'text-gray-400'}`}>
          <li className='font-semibold cursor-pointer hover:text-teal-500' onClick={() => scroll.scrollToTop()}>
            Home
          </li>
          <li className='font-semibold cursor-pointer hover:text-teal-500'><Link to='about' smooth={true} duration={600}>About Us</Link></li>
          <li className='font-semibold cursor-pointer hover:text-teal-500'><Link to='echoSign' smooth={true} duration={600}>EchoSign</Link></li>
          <li className='font-semibold cursor-pointer hover:text-teal-500'><Link to='download' smooth={true} duration={600}>Download</Link></li>
          <li className='font-semibold cursor-pointer hover:text-teal-500'><Link to='contact' smooth={true} duration={600}>Contact</Link></li>
          <li
            className={`py-2 px-6 h-10 text-white rounded-[10px]  ${
              darkMode ? 'bg-teal-500' : 'bg-gradient-to-r from-emerald-400 to-teal-500'
            } hover:opacity-10 transition cursor-pointer duration-300 font-semibold`}
          >
            Log in
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`${
            !nav
              ? 'fixed left-0 top-0 w-64 md:w-[45%] h-full border-r border-r-gray-300 ease-in-out duration-500'
              : 'fixed left-[100%]'
          } ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        >
          <img src={darkMode ? logoImageWhite : logoImage} alt='Logo' className='h-10 m-7 pl-12' />

          <ul className={`pt-0 ml-12 uppercase ${darkMode ? 'text-white' : 'text-gray-500'} bg-opacity-90 md:bg-opacity-100 md:bg-white`}>
            <li className='font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500'>
              Home
            </li>
            <li className='font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500'>
              About Us
            </li>
            <li className='font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500'>
              EchoSign
            </li>
            <li className='font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500'>
              Download
            </li>
            <li className='font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500'>
              Contact
            </li>
            <li className='font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500'>
              Log in
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={handleToggleDarkMode}
        className={`fixed bottom-8 right-8 p-2 rounded-full ${
          darkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
        }`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
    
  );
}
