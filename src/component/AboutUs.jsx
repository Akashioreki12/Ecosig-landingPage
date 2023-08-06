import React from 'react'
import teamPhoto from '../assets/team2.jpg';

export default function 
() {
  return (
    <>
      <div className="flex flex-wrap m-[8%] mt-2 ">
        <div>
          <div className='flex flex-col lg:flex-row'>
            <div className='block m ml-8 md:w-[60%] lg:w-[90%] text-7xl font-bold leading-snug tracking-tight'>
              About<span className='text-cyan-800'> Us</span> 
            </div>
            <div className='lg:grid place-items-center leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-600'>
              <p className='m-4'>
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dgjhdljhlsjhs 
            </p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
          <img
            
            src={teamPhoto}
            width="70%"
            
            className={"object-cover rounded-[8%] m-[5%]"}
            alt="Team image"
            loading="eager"
            placeholder="blur"
          />
          </div>
        </div>
      </div>
    </>
  )
}
