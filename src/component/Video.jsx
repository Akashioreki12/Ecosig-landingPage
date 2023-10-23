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
                  <source src='https://echolanding.s3.us-east-1.amazonaws.com/vd.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCWV1LXdlc3QtMyJGMEQCIB3sM2oSP8MlwjVppkYPwYwOXpChClzYK%2B8I5LwfrFsIAiBFuTRVOQq4%2B04A8z%2Bbbdy0s1oWO1clO3R4y1C9yTR%2BnyrkAgg1EAAaDDQ3NjQ1NzMzNTM0OSIMMmuVz0MHEh6BKsi%2BKsECA%2Fr%2FROtNOwU3RvIo3byxkv85JfgiRqtcIaawVBECaKjQF%2BcxP%2B2gvsRHFi2CZelcRwW9zt5mJKDEKW9%2Fj5MM8jqXp2vIAae1BM2hrwAAu2JxFqQ13ok1scG8NwUTlhLNckjO58C4LAbqx7QrTWs1reY%2BFP9M6tpDQthXc1pnwd%2BPaAl5Ry%2FKfZoKtjavmCe9ixTVEjsq4JC%2BYi7HK%2BcNX51yBhONghszn%2Bv%2BXhQZz0dLCER2QzOLm9PkRIhXHnqMwO2cYkdG8xqi4bqWzWzjzY%2FA3%2FppP4PhAraX%2Bvf1x9h9gtsxDU5mqdpKK%2FdcFvSkdUM8SVfO3FYX77h4OBNTP3iKmiWsSeqeMH5aZ9DjVwcmTL5%2Bg0THKxhULPNM6Ka9ei5TeYCob5K8zWY2Agx4L6F4N2s1%2F%2FAxdPI2HwKCPPMqMJuQ26kGOrQC4veBPAjSa3p3U6M%2FxgOofplbXSBOrSv24%2FCtS%2Bf8e2q%2F6EhH1cNno4ZOjbTEgzT%2FnnSah5PEKwKME6gGsUPDCjEkX5LLBdxS5XM2PA4qKtct%2F%2F7hIEXRDBRrI%2BhMtH6dVifO%2Bg%2F%2BIHT1%2BIG69AXGvLsjcFPfr%2BbQxa2me9IyJX3pxaedzjZ84iVtraqNJUh8iraywVv%2FdtmHbTePghT%2BYBrR%2FOe5B9QRHn02UqApoVkYhnJ7dFx%2FyfWqxflATvqCmUIoWJtqcFjHWhJFOyTq43SYTukLE4T%2BPO6xsxepYLz3Vzsk2tgKHeIJDzbP4PfgRLEQy68GCkAqdRt0MSLwAoeGLuL8jBVFfxYAp4fi8JgLImvfRQuqHw%2FUZFW0DeFDCBL%2BYWOw4oi%2BSDOox8uyrzZcAB4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231023T200521Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW53YR7I2Q27KXIPB%2F20231023%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf804eb873e6be40424022fec096abb034cec93843d894c1b0d32e6f29bba533' type="video/mp4" />
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
