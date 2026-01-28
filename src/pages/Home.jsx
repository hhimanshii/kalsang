import React from "react";
import Navbar from "../components/Navbar";
import OurStory from "./OurStory";
import Menu from "./Menu";

const heroImg =
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=900&auto=format&fit=crop";

const HomePage = () => {
  return (
    <>
<section
  className="w-full min-h-screen
             bg-gradient-to-b
             from-[#9b1915]
             to-[#3d0806]
             text-white
             px-4 sm:px-8 lg:px-20"
>
  <Navbar />

  {/* CENTER WRAPPER */}
  <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
    <div
      className="max-w-7xl mx-auto
                 w-full
                 flex flex-col lg:flex-row
                 items-center
                 gap-16"
    >
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-yellow-400 uppercase tracking-[0.3em]
                      text-xs sm:text-sm mb-4">
          Himalayan Flavours
        </p>

        <h1
          className="font-cormorant italic
                     text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                     leading-tight mb-6"
          style={{ fontFamily: "Cormorant" }}
        >
          Kalsang
        </h1>

        <p className="text-white/80
                      text-sm sm:text-base md:text-lg
                      leading-relaxed max-w-md mx-auto lg:mx-0">
          An intimate dining experience inspired by Tibetan, Chinese,
          and Thai traditions — crafted with warmth, depth, and soul.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 relative h-[520px] flex items-center justify-center">

{/* BACK IMAGE */}
<div className="absolute left-0 top-0
                w-[260px] sm:w-[300px]
                h-[360px]
                rounded-2xl overflow-hidden
                border border-yellow-400/30
                opacity-90">
  <img
    src={heroImg}
    alt="Dish"
    className="w-full h-full object-cover"
  />
</div>

{/* FRONT IMAGE */}
<div className="absolute right-0 bottom-0
                w-[300px] sm:w-[340px]
                h-[420px]
                rounded-3xl overflow-hidden
                border border-yellow-400/50
                shadow-2xl">
  <img
    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    alt="Dish detail"
    className="w-full h-full object-cover"
  />
</div>

</div>

    </div>
  </div>
</section>


      <OurStory />
      <Menu />
    </>
  );
};

export default HomePage;
