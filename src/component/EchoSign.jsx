/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import image4 from '../assets/image 4.png'
import antenna from '../assets/antenna.png'
import fastestdelivery from '../assets/Fastest Delivery.png'
import onlinereports from '../assets/Online Reports.png'
import banknote from '../assets/Banknote.png'

export default function 
() {
  return (
    <>
      <div className="flex flex-wrap m-[8%] mt-2 ">
        <div>
          <div className='flex flex-col lg:flex-row'>
            <div className='block m ml-8 d:w-[60%] lg:w-[90%] text-7xl font-bold leading-snug tracking-tight'>
              What is
          <p className="m-0 [-webkit-text-fill-color:linear-gradient(92.02deg,_#54bd95,_#1aa6b7)] [-webkit-background-clip:text]">
            EchoSign ?
          </p>
            </div>
            <div className='lg:grid place-items-center leading-normal text-gray-700 lg:text-xl xl:text-2xl dark:text-gray-600'>
              <p className='m-4'>
                 enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dgjhdljhlsjhskldjhjkdshgkd 
            </p>
            </div>
          </div>
          <div className='justify-center'>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
        <img
          src={image4}
          alt="Image 1"
          className="w-full rounded-lg "
        />
        <img
          src={image4}
          alt="Image 2"
          className="w-full rounded-lg "
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 mt-8 gap-8">
  <div class="bg-mediumaquamarine rounded-lg p-4 shadow-2xl flex flex-col items-center">
    <img
      src={fastestdelivery}
      alt="Card 1"
      class="w-full h-fit rounded-t-lg mb-4 mx-auto "
    />
    <div class="mt-auto">
    <p class="font-bold text-xl  text-left">
        Communication Everywhere!
      </p>
    </div>
  </div>

  <div class="bg-cadetblue rounded-lg p-4 shadow-2xl flex flex-col items-center">
    <img
      src={onlinereports}
      alt="Card 1"
      class="w-full h-fit rounded-t-lg mb-4 mx-auto "
    />
    <div class="mt-auto">
    <p class="font-bold text-xl  text-left">
        Communication Everywhere!
      </p>
    </div>
  </div>
  <div class="bg-pink rounded-lg p-4 shadow-2xl flex flex-col items-center">
    <img
      src={banknote}
      alt="Card 1"
      class="w-full h-fit rounded-t-lg mb-4 mx-auto "
    />
    <div class="mt-auto">
    <p class="font-bold text-xl  text-left">
        Communication Everywhere!
      </p>
    </div>
  </div>
  <div class="bg-gold rounded-lg p-4 shadow-2xl flex flex-col items-center">
    <img
      src={antenna}
      alt="Card 1"
      class="w-full h-fit rounded-t-lg mb-4 mx-auto "
    />
    <div class="mt-auto">
    <p class="font-bold text-xl  text-left">
        Communication Everywhere!
      </p>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  )
}
