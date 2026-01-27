import React from "react";
import {
  Smile,
  Award,
  FileText,
  Construction,
  HardHat,
  TriangleAlert,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-l from-white to-sky-100 mt-8 rounded-xl px-6 sm:px-[5%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-16">
      {/* <div className="mb-10 sm:mb-12 flex flex-col items-start text-left">
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
          About{" "}
          <span className="text-blue-800">Technical Consultancy Services</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed">
          Since 1912, we have partnered with our customers to plan projects,
          innovate solutions, and bring their dream spaces to life. Our
          commitment to quality, creativity, and precision has made us a trusted
          name in construction and design for over a century.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-x-8">
        <div className="bg-gray-50 shadow-sm rounded-lg p-2 sm:p-6 text-center w-full sm:w-80 scale-105 sm:scale-100 sm:hover:scale-105 transition-transform">
          <FileText className="mx-auto mb-4 text-blue-800" size={36} />
          <h3 className="text-sm sm:text-xl font-semibold mb-3">OUR STORY</h3>
          <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled demoralized.
          </p>
          <div className="flex justify-end">
            <Construction className="text-gray-600" size={28} />
          </div>
        </div>

        <div className="bg-blue-800 text-white shadow-md rounded-lg p-2 sm:p-6 text-center w-full sm:w-80 scale-105 sm:scale-100 sm:hover:scale-105 transition-transform">
          <Smile className="mx-auto mb-4" size={36} />
          <h3 className="text-sm sm:text-xl font-semibold mb-3">ABOUT US</h3>
          <p className="text-white/90 mb-3 text-sm sm:text-base leading-relaxed">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled demoralized.
          </p>
          <div className="flex justify-end">
            <HardHat className="text-white/90" size={28} />
          </div>
        </div>
        <div className="bg-gray-50 shadow-sm rounded-lg p-2 sm:p-6 text-center w-full sm:w-80 scale-105 sm:scale-100 sm:hover:scale-105 transition-transform">
          <Award className="mx-auto mb-4 text-blue-800" size={36} />
          <h3 className="text-sm sm:text-xl font-semibold mb-3">
            OUR CERTIFICATE
          </h3>
          <p className="text-gray-600 mb-3 text-sm sm:text-base leading-relaxed">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled demoralized.
          </p>
          <div className="flex justify-end">
            <TriangleAlert className="text-gray-600" size={28} />
          </div>
        </div>
      </div> */}
            {/* Left Image Section */}
            <div className="md:w-1/2 flex justify-center">
        <div className="rounded-[50%] overflow-hidden w-[320px] h-[320px] md:w-[400px] md:h-[400px] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="font-normal">Technical Consultancy Services
          </span>
        </h2>
        <p className="text-gray-500 mt-2">
          Passionate About Properties, Dedicated to Your Vision
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 text-sm mt-1">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">12+</h3>
            <p className="text-gray-600 text-sm mt-1">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600 text-sm mt-1">Mn. Sq. Ft. Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600 text-sm mt-1">Ongoing Projects</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-6 leading-relaxed">
        Since 1912, we have partnered with our customers to plan projects, innovate solutions, and bring their dream spaces to life. Our commitment to quality, creativity, and precision has made us a trusted name in construction and design for over a century.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
