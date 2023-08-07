import React from 'react';
import teamPhoto from '../assets/team1.jpg';

export default function OurStory() {
  return (
    <section id='ourstory' className='lg:h-screen flex justify-center items-center'>
      <div className='flex flex-col lg:flex-row m-[8%] mt-2  '>
        <div className='lg:w-[50%] mt-[10%]'>
          <div className='block md:w-[100%] ml-8 text-4xl md:text-5xl lg:text-7xl font-bold leading-snug tracking-tight'>
            Our<span className='text-cyan-700'> Story...</span>
          </div>
          <div className='lg:grid place-items-center leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-600 p-[8%] pl-11'>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            </p>
          </div>
        </div>
        <div className='relative w-full lg:w-[50%] mt-6 lg:mt-0 lg:ml-4'>
          <div className="flex justify-center items-center">
            <img
              src={teamPhoto}
              width="90%"
              className="object-fill rounded-3xl w-[52%] lg:h-auto lg:absolute lg:right-0 lg:top-1 dancing-image transition-transform duration-200 ease-out"
              loading="eager"
              placeholder="blur"
              alt='team1'
            />
          </div>
          <div className='flex justify-center items-center mt-3'>
            <img
              src={teamPhoto}
              width="90%"
              className="object-fill rounded-3xl w-[52%] lg:h-auto lg:absolute lg:left-1 lg:bottom-0 dancing-image"
              loading="eager"
              placeholder="blur"
              alt='team2'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
