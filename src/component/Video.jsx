import React from 'react';

export default function Video() {
  return (
    <section id='video'>
      <div className='flex flex-col m-[8%] '>
        <div>
          <div className='text-center text-xl'>Watch the video</div>
          <div className='m-2 text-center text-3xl md:text-4xl  lg:text-5xl font-bold leading-snug tracking-tight'>Empowering Deaf-Mute Everywhere!</div>
          <div className='text-center text-gray-400 px-[20%]'>This section highlights a promo or demo video of your product. Analysts say a landing page with a video has a 3% higher conversion rate. So, don't forget to add one, just like this.</div>
        </div>

        <div className="w-full max-w-4xl mx-auto overflow-hidden m-8 rounded-2xl">

          <div className="relative block bg-gray-300 cursor-pointer" style={{ height: '70vh' }}>

            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="6.25em" viewBox="0 0 512 512" className='fill-cyan-500 transform transition-transform hover:scale-110'>
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
