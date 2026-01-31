import React from "react";
import storyImg from '../assets/images/ourstory.jpg'
import OurTeam from "../components/OurTeam";
const OurStory = () => {
  return (
    <>
    <section className="w-full bg-gradient-to-b 
from-[#111111] 
to-[#3d0806] text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
            Our Story
          </p>

          <h2 className="font-cormorant italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"   style={{ fontFamily: "Cormorant" }}>
            A Journey of <br className="hidden sm:block" />
            Flavours & Tradition
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Kalsang was born from a deep love for authentic Tibetan, Chinese, and
            Thai cuisine. Rooted in tradition and inspired by the streets of the
            Himalayas, our kitchen brings time-honoured recipes to life with
            warmth and soul.
          </p>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            Every dish we serve tells a story — of heritage, craftsmanship, and
            the joy of sharing a meal together.
          </p>
        </div>

        {/* RIGHT VISUAL / DECOR */}
      {/* RIGHT VISUAL / DECOR */}
<div className="w-full lg:w-1/2 flex justify-center">
  <div className="relative w-[260px] sm:w-[320px] md:w-[380px] 
                  h-[360px] sm:h-[420px] md:h-[480px] 
                  border border-yellow-400/40 rounded-t-full 
                  flex items-center justify-center overflow-hidden">

    {/* Decorative dot */}
    <div className="absolute top-6 w-3 h-3 bg-yellow-400 rounded-full z-10" />

    {/* Image */}
    <img
      src={storyImg}
      alt="Our Story"
      className="w-full h-full object-cover rounded-t-full scale-105 hover:scale-110 transition-transform duration-700"
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
