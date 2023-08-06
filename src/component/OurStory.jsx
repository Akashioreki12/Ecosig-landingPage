import React from 'react'
import teamPhoto from '../assets/team1.jpg';

export default function OurStory() {
  return (
    <>
      <div className='flex flex-col lg:flex-row m-[8%] mt-2 '>
        <div className=' lg:w-[70%] mt-[10%]'>
            <div className='block  md:w-[100%] ml-8  text-7xl font-bold leading-snug tracking-tight'>Our Story...</div>
            <div className='lg:grid  place-items-center leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-600'>
                <p className='p-[8%] pl-11'>
                  Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo 
                 consequat. Duis aute 
                 </p>
            </div>
        </div>
        <div className='relative w-[90%] h-auto flex justify-center items-center '>
          <div></div>
            <div className='w-full '>
              <img
              src={teamPhoto}
              width="55%"
              className={"object-fill rounded-lg "}
              loading="eager"
              placeholder="blur"
              alt='team1'
              />
            </div>
            <div className='w-full absolute left-[50%] top-[30%] '>
              <img
              src={teamPhoto}
              width="55%"
              
              className={"object-fill rounded-lg"}
              loading="eager"
              placeholder="blur"
              alt='team2'
              />
            </div>
         </div>
      </div>
    </>
  )
}
