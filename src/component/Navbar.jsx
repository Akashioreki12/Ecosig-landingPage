import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logoImage from '../assets/Logo_EcoSign_final.png';
import logoImageWhite from '../assets/Logo_EcoSign_White.png';
import Download from './Download';

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
    
    <div className={` ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='flex justify-between items-center h-24 max-w-[1245px] mx-4 md:mx-20 px-2 md:px-0'>
        <img
          src={darkMode ? logoImageWhite : logoImage}
          alt='Logo'
          className='h-10'
        />
        <ul className={`hidden md:flex items-center space-x-7 ${darkMode ? 'text-white' : 'text-gray-400'}`}>
          <li className=' cursor-pointer hover:text-teal-500' onClick={() => scroll.scrollToTop()}>
            Home
          </li>
          <li className=' cursor-pointer hover:text-teal-500'><Link to='about' smooth={true} duration={600}>About Us</Link></li>
          <li className=' cursor-pointer hover:text-teal-500'><Link to='echoSign' smooth={true} duration={600}>EchoSign</Link></li>
          <li className=' cursor-pointer hover:text-teal-500'><Link to='ourstory' smooth={true} duration={600}>Our Story</Link></li>
          <li className=' cursor-pointer hover:text-teal-500'><Link to='contact' smooth={true} duration={600}>Contact</Link></li>
          <li
            className={`py-2 px-6 h-10 text-white rounded-[10px]  ${
              darkMode ? 'bg-teal-500' : 'bg-gradient-to-r from-emerald-400 to-teal-500'
            } hover:opacity-10 transition cursor-pointer duration-300 font-semibold`}
          >
            <Link to='download' smooth={true} duration={600}>Download</Link>
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div
          
          className={`${
            !nav
              ? 'fixed left-0 top-0 w-64 md:w-[45%] h-full border-r border-r-gray-300 duration-200 '
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
        {darkMode ? 
        <svg width="30" height="30" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.6" d="M347.062 200.001C347.062 185.556 373.233 167.867 369.674 154.544C365.988 140.758 334.376 138.537 327.392 126.468C320.307 114.227 334.115 85.755 324.182 75.82C314.246 65.884 285.774 79.691 273.532 72.609C261.463 65.626 259.242 34.011 245.458 30.326C232.135 26.766 214.446 52.937 200.001 52.937C185.556 52.937 167.867 26.766 154.546 30.326C140.758 34.012 138.539 65.626 126.469 72.609C114.228 79.694 85.7581 65.884 75.8221 75.82C65.8871 85.755 79.6921 114.227 72.6101 126.469C65.6291 138.536 34.0121 140.757 30.3271 154.543C26.7691 167.866 52.9401 185.555 52.9401 200C52.9401 214.442 26.7691 232.132 30.3271 245.455C34.0131 259.24 65.6291 261.461 72.6101 273.53C79.6951 285.773 65.8871 314.243 75.8221 324.178C85.7581 334.114 114.228 320.307 126.472 327.389C138.539 334.372 140.758 365.987 154.546 369.672C167.867 373.232 185.557 347.059 200.001 347.059C214.445 347.059 232.135 373.232 245.458 369.672C259.242 365.986 261.463 334.372 273.534 327.389C285.775 320.304 314.247 334.114 324.182 324.178C334.116 314.242 320.311 285.773 327.392 273.528C334.375 261.461 365.988 259.24 369.674 245.455C373.233 232.133 347.062 214.443 347.062 200.001Z" fill="#FFBE55"/>
        <path d="M313.531 200.001C313.531 257.343 271.016 304.757 215.782 312.439C210.555 313.169 205.282 313.533 200.004 313.529C137.302 313.529 86.4641 262.7 86.4641 200.002C86.4641 137.298 137.301 86.4709 200.004 86.4709C205.358 86.4709 210.627 86.8389 215.782 87.5599C271.017 95.2399 313.531 142.655 313.531 200.001Z" fill="#FFBE55"/>
        </svg>
         : 
         <svg width="30" height="30" viewBox="0 0 341 341" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path opacity="0.9" d="M303.458 276.424C296.613 285.028 289.054 292.861 280.883 299.842C278.952 301.491 276.988 303.089 274.999 304.638C274.777 304.816 274.556 304.995 274.335 305.173C274.259 305.233 274.174 305.284 274.097 305.343C269.014 309.255 263.724 312.852 258.248 316.133C256.615 317.111 254.973 318.072 253.307 318.999C237.883 327.554 221.15 333.642 203.633 336.991C193.2 338.981 182.486 340.01 171.611 340.01C147.871 340.01 124.896 335.13 103.316 325.521C96.7343 322.579 90.3061 319.203 84.2095 315.478C78.2915 311.873 72.501 307.825 66.9996 303.455C62.5101 299.892 58.2416 296.125 54.1857 292.188C53.0803 291.116 52.0005 290.028 50.9376 288.931C25.0632 262.393 8.78866 228.244 4.51169 190.821C0.65137 157.021 6.91802 123.611 22.3253 94.0968C26.5682 85.9669 31.5169 78.1277 37.1289 70.661C37.2989 70.44 37.469 70.2112 37.639 69.9893C38.4043 68.9859 39.1781 67.9834 39.9688 66.9885C72.0843 26.5803 120.143 3.40137 171.824 3.40137C210.173 3.40137 246.344 16.0457 276.427 39.9567C277.737 40.9941 278.885 41.938 279.947 42.8393C282.634 45.0842 285.296 47.4566 288.034 50.0671C288.45 50.4667 288.875 50.8664 289.284 51.283C290.39 52.3459 291.478 53.4429 292.55 54.5398C320.108 82.8989 336.747 120.024 339.579 159.767C342.588 201.902 329.757 243.329 303.458 276.424Z" fill="#6A6D68"/>
         <path d="M300.057 273.022C293.212 281.627 285.653 289.459 277.482 296.44C275.551 298.089 273.587 299.688 271.598 301.236C271.376 301.415 271.155 301.593 270.934 301.772C270.858 301.831 270.773 301.882 270.696 301.942C265.612 305.853 260.323 309.45 254.847 312.732C253.214 313.71 251.572 314.67 249.906 315.597C233.104 324.917 214.739 331.304 195.505 334.424C186.568 335.869 177.453 336.609 168.21 336.609C144.47 336.609 121.495 331.729 99.9144 322.119C93.3332 319.177 86.905 315.801 80.8084 312.077C74.8903 308.472 69.0999 304.424 63.5985 300.053C59.1685 296.532 54.951 292.816 50.9376 288.931C50.8866 288.888 50.8356 288.838 50.7846 288.787C23.0311 261.814 5.5661 226.389 1.11057 187.42C-2.74975 153.619 3.51689 120.21 18.9242 90.6954C23.1671 82.5655 28.1158 74.7264 33.7277 67.2597C34.6546 66.0276 35.5984 64.8022 36.5677 63.5871C37.0354 63.0004 37.503 62.4222 37.9707 61.8431C70.0777 22.5157 117.49 0 168.422 0C206.771 0 242.943 12.6443 273.026 36.5554C274.336 37.5928 275.483 38.5366 276.546 39.438C279.233 41.6828 281.895 44.0552 284.633 46.6657C286.172 48.1283 287.677 49.6248 289.148 51.1384C289.191 51.1903 289.242 51.2319 289.285 51.283C316.765 79.6242 333.355 116.69 336.177 156.366C339.187 198.5 326.356 239.928 300.057 273.022Z" fill="#A3AAA0"/>
         <path d="M194.663 122.813C215.56 122.813 232.501 105.871 232.501 84.9734C232.501 64.0753 215.56 47.134 194.663 47.134C173.766 47.134 156.825 64.0753 156.825 84.9734C156.825 105.871 173.766 122.813 194.663 122.813Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M279.692 225.702C289.789 225.702 297.974 217.517 297.974 207.42C297.974 197.323 289.789 189.138 279.692 189.138C269.596 189.138 261.411 197.323 261.411 207.42C261.411 217.517 269.596 225.702 279.692 225.702Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M93.4787 228.117C106.552 228.117 117.151 217.518 117.151 204.444C117.151 191.37 106.552 180.771 93.4787 180.771C80.405 180.771 69.8066 191.37 69.8066 204.444C69.8066 217.518 80.405 228.117 93.4787 228.117Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M174.469 196.791C181.395 196.791 187.01 191.176 187.01 184.249C187.01 177.322 181.395 171.707 174.469 171.707C167.542 171.707 161.927 177.322 161.927 184.249C161.927 191.176 167.542 196.791 174.469 196.791Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M81.1495 132.591C94.2983 132.591 104.958 121.932 104.958 108.782C104.958 95.6331 94.2983 84.9734 81.1495 84.9734C68.0006 84.9734 57.3413 95.6331 57.3413 108.782C57.3413 121.932 68.0006 132.591 81.1495 132.591Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M205.292 300.956C218.206 300.956 228.675 290.487 228.675 277.573C228.675 264.658 218.206 254.189 205.292 254.189C192.378 254.189 181.909 264.658 181.909 277.573C181.909 290.487 192.378 300.956 205.292 300.956Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M288.195 149.173C296.883 149.173 303.926 142.13 303.926 133.442C303.926 124.754 296.883 117.711 288.195 117.711C279.508 117.711 272.465 124.754 272.465 133.442C272.465 142.13 279.508 149.173 288.195 149.173Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path d="M221.873 142.795C225.629 142.795 228.675 139.75 228.675 135.993C228.675 132.236 225.629 129.19 221.873 129.19C218.116 129.19 215.07 132.236 215.07 135.993C215.07 139.75 218.116 142.795 221.873 142.795Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         <path opacity="0.2" d="M207.035 335.292C196.602 337.281 185.888 338.31 175.013 338.31C151.273 338.31 128.298 333.43 106.718 323.821C100.136 320.879 93.7082 317.503 87.6116 313.778C81.6936 310.173 75.9031 306.126 70.4017 301.755C65.9122 298.192 61.6437 294.425 57.5879 290.488C56.4825 289.416 55.4026 288.328 54.3397 287.231C54.2887 287.188 54.2377 287.138 54.1867 287.087C26.4332 260.114 8.9682 224.689 4.51267 185.72C0.652347 151.919 6.91899 118.51 22.3263 88.9956C26.5692 80.8657 31.5179 73.0266 37.1298 65.5599C38.0567 64.3278 39.0005 63.1024 39.9698 61.8873C40.4375 61.3006 40.9051 60.7224 41.3728 60.1433C41.2368 62.7036 41.1262 65.4153 41.0412 68.2894C39.009 135.592 52.0695 283.787 198.907 332.723C201.568 333.616 204.28 334.475 207.035 335.292Z" fill="#666865" stroke="#5E5E5D" stroke-width="4" stroke-miterlimit="10"/>
         </svg>
        }
      </button>
    </div>
    
  );
}
