import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-end bg-gradient-to-r from-sky-100 to-white rounded-xl overflow-hidden">
      
      {/* Image Section */}
      <img 
        src="/image10.png" 
        className="w-full md:w-[65%] h-[250px] md:h-[100%] object-cover rounded-t-xl md:rounded-l-none md:rounded-r-xl" 
        alt="Hero"
      />

      {/* Text Section */}
      <div className="relative md:absolute md:left-[10%] w-full md:w-[40%] flex flex-col items-start justify-start gap-y-6 p-6 md:p-0 md:h-[70%]">
        <p className="text-gray-500 text-base md:text-lg">EXPLORE</p>
        <div className="flex flex-wrap gap-x-2">
          <p className="text-3xl md:text-5xl font-semibold text-gray-800 tracking-wide">Technical</p>
          <p className="text-3xl md:text-5xl font-semibold text-blue-600 tracking-wide">Consultancy</p>
          <p className="text-3xl md:text-5xl font-semibold text-gray-800 tracking-wide">Services</p>
        </div>
        <p className="text-gray-600 text-sm md:text-base w-full md:w-[70%]">
          Since 1912, we have partnered with our customers to plan projects, innovate solutions, and bring their dream spaces to life. Our commitment to quality, creativity, and precision has made us a trusted name in construction and design for over a century.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 text-sm md:text-base">
          Explore now
        </button>
      </div>
    </div>
  )
}

export default Hero
