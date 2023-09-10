import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoImage from '../assets/Logo_EcoSign_final.png';
import logoImageWhite from '../assets/Logo_EcoSign_White.png';
import Download from './Download';
import DarkModeButton from './DarkModeButton'; 



export default function Navbar({ darkMode, handleToggleDarkMode }) {
  const [nav, setNav] = useState(true);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setNav(true);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setNav(true);
    }
  };

  useEffect(() => {
    if (!nav) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [nav]);
  
  return (
    <div
      className={` ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center h-20 max-w-full mx-11 px-2 md:px-0">
        <img
          src={darkMode ? logoImageWhite : logoImage}
          alt="Logo"
          className="h-10"
        />
        <ul
          className={`hidden md:flex items-center space-x-7 ${
            darkMode ? "text-white" : "text-gray-400"
          }`}
        >
          <li
            className=" cursor-pointer hover:text-teal-500"
            onClick={() => scroll.scrollToTop()}
          >
            Home
          </li>
          <li className=" cursor-pointer hover:text-teal-500">
            <Link to="about" smooth={true} duration={600}>
              About Us
            </Link>
          </li>
          <li className=" cursor-pointer hover:text-teal-500">
            <Link to="echoSign" smooth={true} duration={600}>
              EchoSign
            </Link>
          </li>
          <li className=" cursor-pointer hover:text-teal-500">
            <Link to="ourstory" smooth={true} duration={600}>
              Our Story
            </Link>
          </li>
          <li className=" cursor-pointer hover:text-teal-500">
            <Link to="contact" smooth={true} duration={600}>
              Contact
            </Link>
          </li>
          <li
            className={`py-2 px-6 h-10 text-white rounded-[10px]  ${
              darkMode
                ? "bg-teal-500"
                : "bg-gradient-to-r from-[#54BD95] to-[#1AA6B7]"
            } hover:opacity-10 transition cursor-pointer duration-300 font-semibold`}
          >
            <Link to="download" smooth={true} duration={600}>
              Download
            </Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div
          className={`${
            !nav
              ? "fixed left-0 top-0 w-64 md:w-[45%] h-full border-r border-r-gray-300 duration-200 "
              : "fixed left-[100%]"
          } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
          <img
            src={darkMode ? logoImageWhite : logoImage}
            alt="Logo"
            className="h-10 m-7 pl-12"
          />

          <ul
            className={`pt-0 ml-12 uppercase ${
              darkMode ? "text-white" : "text-gray-500"
            } bg-opacity-90 md:bg-opacity-100 md:bg-white`}
          >
            <li className="font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500">
              <Link to="home" smooth={true} duration={600}>
                Home
              </Link>
            </li>
            <li className="font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500">
              <Link to="about" smooth={true} duration={600}>
                About Us
              </Link>
            </li>
            <li className="font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500">
              <Link to="echoSign" smooth={true} duration={600}>
                EchoSign
              </Link>
            </li>
            <li className="font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500">
              <Link to="download" smooth={true} duration={600}>
                Download
              </Link>
            </li>
            <li className="font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500">
              <Link to="contact" smooth={true} duration={600}>
                Contact
              </Link>
            </li>
            <li className="font-semibold p-4 ml-3 border-b border-gray-300 hover:text-teal-500">
              <Link to="" smooth={true} duration={600}>
                Features
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
