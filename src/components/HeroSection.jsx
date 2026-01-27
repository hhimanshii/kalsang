import React, { useEffect, useState } from "react";
import { homepageSlideshowImages } from "../utils/images";
import { primaryColor } from "../utils/colors";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homepageSlideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100%] h-[90%] flex flex-row items-center justify-between py-4 px-8 bg-gradient-to-r from-gray-50/30 via-blue-70/80 to-blue-100 px-[5%]" >
      <div className="w-[45%] flex flex-col items-start justify-start h-[70%] gap-y-6 ">
        <p className="text-gray-500 text-lg">EXPLORE</p>
        <div className="flex flex-row gap-x-2 flex-wrap">
          <p className="text-5xl font-semibold text-gray-800">Technical</p>
          <p className="text-5xl font-semibold text-blue-800" >Consultancy</p>
          <p className="text-5xl font-semibold text-gray-800">Services</p>
        </div>
        <p className="text-gray-600">
        Since 1912, we have partnered with our customers to plan projects, innovate solutions, and bring their dream spaces to life. Our commitment to quality, creativity, and precision has made us a trusted name in construction and design for over a century.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white">Explore now</button>
      </div>
      <div className="w-[50%] relative">
        <img src={homepageSlideshowImages[currentIndex]} className="relative z-10 w-[90%]" />
        <div className="absolute w-[90%] h-[90%] top-[-10%] left-10 bg-blue-200/80 z-0"></div>
      </div>
    </div>
  );
};

export default HeroSection;
