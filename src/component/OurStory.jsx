import React from 'react'
import teamPhoto from '../assets/team2.jpg';

export default function OurStory() {
  return (
    <>
      <div className='flex flex-wrap m-[8%] mt-2 '>
        <div>
            <div>Our Story...</div>
            <div>Ut enim ad minim veniam, quis nostrud exercitation
                 ullamco laboris nisi ut aliquip ex ea commodo 
                 consequat. Duis aute 
            </div>
        </div>
        <div>
            <div>
            <img
            src={teamPhoto}
            width="35%"
            className={"object-fill rounded "}
            loading="eager"
            placeholder="blur"
          />
            </div>
            <div>
            <img
            src={teamPhoto}
            width="35%"
            height="30%"
            className={"object-fill rounded w- h-30 "}
            loading="eager"
            placeholder="blur"
          />
            </div>
        </div>
      </div>
    </>
  )
}
