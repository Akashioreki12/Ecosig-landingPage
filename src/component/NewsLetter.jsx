import React from 'react';
import hands from '../assets/hands.png';

export default function NewsLetter() {
  return (
    <section id='contact' className=''>
      <div className='flex flex-col m-8 md:m-[8%] my-8 md:my-[12%] mb-8 md:mb-[20%] lg:h-screen justify-center '>
        <div>
          <div className='m-2 font-sans text-cyan-700 text-4xl md:text-6xl font-bold leading-snug tracking-tight'>
            Let’s get in touch!
          </div>
          <div className='lg:grid leading-normal text-gray-500 text-sm md:text-lg xl:text-xl dark:text-gray-400 lg:pr-[50%] lg:pl-2'>
          Welcome to a universe where understanding is universal. Explore how our innovation bridges gaps.          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 lg:px-11 mt-6'>
          <div className='md:col-span-2 lg:col-span-2'>
            <input
              type='text'
              className='py-2 px-4 md:px-7 h-12 md:h-14 w-full md:w-96 lg:w-[94%] rounded-[40px] shadow-md placeholder-gray-500'
              placeholder='Send us your email'
            />
          </div>
          <div className='mt-4 md:mt-0'>
            <button className='py-2 px-4 md:px-6 h-12 md:h-14 w-full md:w-40 lg:w-[50%] shadow-md bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-[40px] hover:opacity-10 transition duration-300 font-semibold'>
              Contact Us
            </button>
          </div>
        </div>

        <div className='flex justify-center mt-12 md:mt-16'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div>
              <img
                src={hands}
                className='w-[511.87px] h-[125.17px]'
                alt='hands'
                loading='eager'
              />
            </div>
            <div>
              <img
                src={hands}
                className='w-[511.87px] h-[125.17px]'
                alt='hands'
                loading='eager'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
