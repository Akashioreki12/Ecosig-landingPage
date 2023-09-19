import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to switch to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); // Change image every 4 seconds

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <img
        src={images[currentIndex]}
        width="67%"
        className="object-cover rounded-[8%] lg:rounded-3xl m-4 transition-opacity duration-500"
        alt="Team image"
        loading="eager"
        placeholder="blur"
        style={{ opacity: 1 }} // Set initial opacity to 1
      />
    </div>
  );
};

export default ImageSlider;
