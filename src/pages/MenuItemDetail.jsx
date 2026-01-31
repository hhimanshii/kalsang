import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import menuData from "../data/menuData";
import Navbar from "../components/Navbar";

const MenuItemDetail = () => {
  const { id } = useParams();
  const item = menuData.find((d) => d.id === id);

  if (!item) {
    return (
        <div className="w-full min-h-screen bg-[#111] flex items-center justify-center text-white">
            <h2 className="text-3xl font-cormorant">Item Not Found</h2>
            <Link to="/menu" className="block mt-4 text-[#9b1915]">Back to Menu</Link>
        </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-[#111111] text-[#f5f5f5] overflow-hidden relative">
      
      {/* SPOTLIGHT HERO */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center pt-10 lg:pt-0 px-4 sm:px-8">
        
        {/* BACK BUTTON */}
        <Link 
            to="/menu" 
            className="absolute top-24 left-4 sm:left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-30"
        >
            <ArrowLeft size={20} />
            <span className="uppercase tracking-widest text-xs">Back to Menu</span>
        </Link>

        {/* LEFT TEXT CONTENT */}
        <div className="relative z-20 w-full lg:w-[45%] lg:pl-12 py-10 flex flex-col justify-center mt-12 lg:mt-0">
          
          <h1 className="font-cormorant font-bold text-5xl sm:text-7xl lg:text-7xl leading-none tracking-tight mb-2">
            {item.title}
          </h1>
          
          <p className="font-allura text-[#d62828] text-3xl sm:text-4xl lg:text-5xl -mt-2 mb-8 ml-2 italic"  style={{ fontFamily: "Cormorant" }}>
            a Taste of Tibet
          </p>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mb-8 border-l border-white/20 pl-6">
            {item.longDesc || item.desc}
          </p>

          <div className="flex items-center">
               <span className="font-cormorant font-bold text-3xl sm:text-4xl text-white">
                {item.price}
               </span>
               {/* <button className="px-8 py-3 bg-[#9b1915] text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#9b1915] transition-all duration-300">
                Order Now
              </button> */}
          </div>

        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="relative w-full lg:w-[55%] h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* THE RED BLOCK */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 
                          h-[180px] sm:h-[240px] lg:h-[320px] 
                          bg-[#9b1915] z-0 
                          lg:-mr-20 lg:w-[120%]" 
          />
          
          {/* ITEM IMAGE */}
          <div className="relative z-10 w-[280px] sm:w-[360px] lg:w-[480px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-[#111]">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default MenuItemDetail;
