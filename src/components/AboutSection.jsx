import React from "react";

const AboutSection = () => {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-16">
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
