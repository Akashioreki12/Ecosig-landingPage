import React from 'react';
import heroPhoto from '../assets/Hero-photo.jpeg';

export default function Hero() {
  return (
    <>
      <div className="flex flex-wrap m-[8%] lg:h-screen lg:mt-11">
        <div className="flex items-center w-full lg:w-1/2 mb-6">
          <div className="max-w-2xl mx-8">
            <h1 className="block font-bold leading-snug tracking-tight">
              <div className='text-5xl sm:text-7xl'>Speak With</div>
              <div className='text-6xl sm:text-8xl text-cyan-700'>Your Hands!</div>
            </h1>
            <p className="mt-3 py-5 text-lg leading-normal text-gray-600">
              Empowering Deaf-Mute Communication Everywhere!
            </p>

            <div className="mt-3 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <button className="w-38 h-15 p-2.5 px-6 rounded-3xl border-4 border-emerald-400 justify-center items-center gap-2.5 inline-flex">
                <div className="text-teal-500 text-lg font-medium">
                  EchoSign
                </div>
              </button>

              <button className="w-38 h-15 p-2.5 px-6 rounded-3xl border-4 border-emerald-400 justify-center items-center gap-2.5 inline-flex">
                <div className="text-teal-500 text-lg font-medium">
                  Watch the video
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroPhoto}
              width="430"
              height="596"
              className="object-cover rounded-[3%] sm:rounded-[1%] lg:rounded-[3%]"
              alt="Sign language"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  )
}
