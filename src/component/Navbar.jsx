import React, { useState } from 'react';
import logoImage from '../assets/Logo_EcoSign_final.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className='flex justify-between items-center h-24 max-w-[1245px] mx-4 md:mx-20 px-2 md:px-0'>
        <img src={logoImage} alt='Logo' className='h-10 '  />
        <ul className='hidden md:flex items-center space-x-7'>
          <li className='font-semibold text-gray-400'>Home</li>
          <li className='font-semibold text-gray-400'>About Us</li>
          <li className='font-semibold text-gray-400'>EchoSign</li>
          <li className='font-semibold text-gray-400'>Download</li>
          <li className='font-semibold text-gray-400'>Contact</li>
          <li className='py-2 px-6 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-[10px] hover:opacity-10 transition duration-300 font-semibold'>
            Log in
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`${
            !nav
              ? 'fixed left-0 top-0 w-64 md:w-[45%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500'
              : 'fixed left-[100%]'
          }`}
        >
          <img src={logoImage} alt='Logo' className='h-10 m-7 pl-12' />

          <ul className='pt-0 ml-12 uppercase'>
            <li className='font-semibold text-gray-500 p-4 ml-3 border-b border-gray-300'>Home</li>
            <li className='font-semibold text-gray-500 p-4 ml-3 border-b border-gray-300'>About Us</li>
            <li className='font-semibold text-gray-500 p-4 ml-3 border-b border-gray-300'>EchoSign</li>
            <li className='font-semibold text-gray-500 p-4 ml-3 border-b border-gray-300'>Download</li>
            <li className='font-semibold text-gray-500 p-4 ml-3 border-b border-gray-300'>Contact</li>
            <li className='font-semibold text-gray-500 p-4 ml-3 border-b border-gray-300'>Log in</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
