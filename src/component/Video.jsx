import React, { useState } from "react";
import vd from "../assets/vd.mp4"; // Import the video file
import minatureImage from "../assets/minature.png"; // Import the image file

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="video">
      <div className="flex flex-col m-[8%]">
        <div>
          <div className="text-center text-xl">Watch the video</div>
          <div className="m-2 text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
            Empowering Deaf-Mute Everywhere!
          </div>
          <div className="text-center text-gray-400 px-[18%]">
            Step into a world of innovation where communication finds its voice
            through technology's embrace. Discover the remarkable synergy of
            sound and gestures as EchoSign redefines connection for the
            deaf-mute community.
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto overflow-hidden m-8 rounded-2xl">
          <div
            className="relative block cursor-pointer"
            style={{ height: "70vh" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {isPlaying ? (
                <video
                  controls
                  autoPlay
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src='https://echolanding.s3.amazonaws.com/vd.mp4' type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div onClick={toggleVideo}>
                  <img
                    src={minatureImage}
                    alt="Video Thumbnail"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <button
                    className="play-button"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="6.25em"
                      viewBox="0 0 512 512"
                      className="fill-teal-500 transform transition-transform hover:scale-110"
                    >
                      <path d="M188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
