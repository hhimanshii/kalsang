import React from "react";
import storyImg from '../assets/images/ourstory.jpg'
import OurTeam from "../components/OurTeam";
const OurStory = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#9b1915] to-[#3d0806] text-white py-20 lg:py-32 px-4 sm:px-8 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="w-full lg:w-1/2 relative z-20">
            <div className="mb-8">
               <span className="font-cormorant text-black text-xl italic tracking-wider">
                Since 2000
              </span>
              <h2 className="font-cormorant font-bold text-5xl sm:text-6xl lg:text-7xl leading-none mb-6 mt-2 italic" style={{ fontFamily: "Cormorant" }}>
                A Journey of <br/> Tradition
              </h2>
              <div className="h-1 w-24 bg-black mb-8" />
            </div>

            <p className="text-white/90 text-lg leading-relaxed mb-6 font-light">
              Kalsang was born from a deep love for authentic Tibetan, Chinese, and Thai cuisine. 
              Rooted in tradition and inspired by the streets of the Himalayas, our kitchen 
              brings time-honoured recipes to life with warmth and soul.
            </p>

            <p className="text-white/80 text-base leading-relaxed border-l-2 border-black pl-6 italic">
              "Every dish we serve tells a story — of heritage, craftsmanship, and the joy of sharing a meal together."
            </p>
          </div>

          {/* RIGHT: OVERLAPPING COMPOSITION */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center lg:justify-end">
            
            {/* BLACK ANCHOR BLOCK */}
            <div className="absolute right-10 top-0 bottom-0 w-[200px] bg-[#111] z-0 hidden lg:block" />

            {/* IMAGE 1 (Large Portrait) */}
            <div className="relative z-10 w-[280px] h-[400px] sm:w-[320px] sm:h-[480px] shadow-2xl border-4 border-[#111] rotate-[-3deg] lg:mr-20">
               <img 
                src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/50/f4/89/kalsang-restaurant-chandigarh.jpg" 
                alt="Our Heritage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 (Small Landscape Overlay) */}
            <div className="absolute -bottom-10 lg:bottom-10 left-0 lg:left-10 z-20 w-[240px] h-[180px] shadow-xl border-4 border-white rotate-[3deg]">
               <img 
                src="https://i.redd.it/kalsang-chandigarh-review-v0-33kjgqcitwqe1.jpg?width=3072&format=pjpg&auto=webp&s=0b97cf9ca57f1408ea860fc0e1d9ecb35f0693b6" 
                alt="Kitchen Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
      <OurTeam/>
    </>
  );
};

export default OurStory;
