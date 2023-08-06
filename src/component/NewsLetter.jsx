import React from 'react'

export default function NewsLetter() {
  return (
    <>
        <div className='flex flex-col m-[8%]'> 
            
            <div>
                <div className='m-2  text-6xl font-bold leading-snug tracking-tight'>Let’s get in touch !</div>
                <div className='lg:grid leading-normal text-gray-700 lg:text-l xl:text-2xl dark:text-gray-600'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-11 mt-9'>
            <div className='col-span-2'>
                <input
                    type="text"
                    className="py-2 px-6 h-14 w-[95%] rounded-[40px] shadow-md placeholder-gray-500"
                    placeholder="Send us your email"
                    />
            </div>
                <div className=''>
                    <button className='py-2 px-6 h-14 w-[50%] bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-[40px] hover:opacity-10 transition duration-300 font-semibold'>Contact Us</button>
                </div>
            </div>

            <div className=''>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <div className='row-start-2 row-span-2'>
                <img className="w-[511.87px] h-[125.17px]" src="https://via.placeholder.com/512x125" />
              </div>
              <div className='row-end-3 row-span-2'>
                <img className="w-[511.87px] h-[125.17px]" src="https://via.placeholder.com/512x125" />
              </div>
            </div>
            </div>

        </div>
    </>
  )
}
