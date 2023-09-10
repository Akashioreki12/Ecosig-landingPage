import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import logoImage from "../assets/Logo_EcoSign_final.png";
import logoImageWhite from "../assets/Logo_EcoSign_White.png";

export default function NavMenu({ darkMode, handleNav }) {
  return (
    <div
      className={`${
        !darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      } fixed left-0 top-0 w-64 md:w-[45%] h-full border-r border-r-gray-300 duration-200`}
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
          <Link to="video" smooth={true} duration={600}>
            Features
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        <AiOutlineClose size={20} />
      </div>
    </div>
  );
}
