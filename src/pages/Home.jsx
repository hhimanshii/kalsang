import React from "react";
import Navbar from "../components/Navbar";
import OurStory from "./OurStory";
import Menu from "./Menu";
import Outlets from './Outlets'

const HomePage = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-[#111111] text-white px-4 sm:px-8 lg:px-20 relative overflow-hidden">
        {/* HERO SECTION */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
                
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
                     <p className="font-cormorant text-[#d62828] text-3xl sm:text-4xl mb-4 tracking-wide" >
                        Himalayan Flavours
                    </p>
                    <h1 className="font-cormorant font-bold italic text-6xl sm:text-7xl lg:text-9xl leading-none tracking-tighter mb-6" style={{ fontFamily: "Cormorant" }}>
                        Kalsang
                    </h1>
                     <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 border-l border-[#d62828] pl-6">
                        An intimate dining experience inspired by Tibetan, Chinese,
                        and Thai traditions — crafted with warmth, depth, and soul.
                    </p>
                    <button className="mt-10 px-8 py-3 bg-[#9b1915] text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#9b1915] transition-all duration-300">
                        View Menus
                    </button>
                </div>

                 {/* RIGHT IMAGE WITH RED BLOCK */}
                <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center lg:justify-end">
                    
                    {/* RED BLOCK */}
                    <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 
                                    h-[200px] sm:h-[300px] lg:h-[400px] 
                                    bg-[#9b1915] z-0 
                                    w-[150%] lg:w-[120%]" 
                    />

                    {/* HERO IMAGE */}
                    <div className="relative z-10 w-[300px] sm:w-[380px] lg:w-[480px] h-[400px] lg:h-[550px] overflow-hidden shadow-2xl border-4 border-[#111]">
                        <img 
                            src="https://kalsang-eight.vercel.app/assets/ourstory-iek32EWF.jpg" 
                            alt="Asian Cuisine" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
      </section>

      <OurStory />
      <Menu />
      <Outlets/>
    </>
  );
};

export default HomePage;
