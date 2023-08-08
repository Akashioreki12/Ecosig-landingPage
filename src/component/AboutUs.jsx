import React from 'react';
import teamPhoto from '../assets/team2.jpg';

export default function AboutUs() {
  return (
    <section id="about" >
      <div className="flex flex-wrap m-[8%] lg:h-screen mb-[20%] ">
        <div className='flex flex-col w-full'>
          <div className='flex flex-col lg:flex-row md:flex-row'>
            <div className='block  ml-8 md:w-[60%] lg:w-[80%] text-4xl md:text-5xl lg:text-7xl font-bold leading-snug tracking-tight'>
              About<span className='text-cyan-700'> Us</span> 
            </div>
            <div className='lg:grid place-items-center leading-normal text-gray-700 lg:text-lg xl:text-xl dark:text-gray-400 m-4'>
              <p>
              At Echosign, we're more than creators – we're stewards of inclusion and champions of innovation.</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <img
              src={teamPhoto}
              width="67%"
              className="object-cover rounded-[8%] lg:rounded-3xl m-4"
              alt="Team image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
