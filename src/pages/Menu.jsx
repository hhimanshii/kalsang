import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";

const Menu = () => {
  return (
    <section className="w-full bg-[#111111] text-[#f5f5f5] overflow-hidden">
      
      {/* SPOTLIGHT HERO */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[500px] lg:min-h-[600px] flex flex-col lg:flex-row items-center pt-20 lg:pt-0">
        
        {/* LEFT TEXT CONTENT */}
        <div className="relative z-20 w-full lg:w-[45%] px-8 lg:pl-20 py-10 flex flex-col justify-center">
          
          {/* Decorative vertical line */}
          <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 h-24 w-[1px] bg-white/20 hidden lg:block" />
          
          <h1 className="font-cormorant font-bold text-5xl sm:text-7xl lg:text-6xl leading-none tracking-tight mb-2">
            Devil Momos
          </h1>
          
          <p className="font-allura text-[#d62828] text-3xl sm:text-4xl lg:text-5xl -mt-2 mb-8 ml-2 italic"  style={{ fontFamily: "Cormorant" }}>
            a Taste of Tibet
          </p>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mb-12 border-l border-white/20 pl-6">
            Handcrafted daily using traditional techniques. 
            Delicate wrappers filled with juicy, seasoned meats 
            or fresh garden vegetables, steamed to perfection.
          </p>

          <button className="w-max px-8 py-3 text-xs tracking-[0.2em] uppercase border border-white/20 hover:bg-[#9b1915] hover:border-[#9b1915] transition-all duration-300">
            View Full Menu
          </button>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="relative w-full lg:w-[55%] h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end">
          
          {/* THE RED BLOCK */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 
                          h-[180px] sm:h-[240px] lg:h-[320px] 
                          bg-[#9b1915] z-0 
                          lg:-mr-20 lg:w-[120%]" 
          />
          
          {/* MOMO IMAGE */}
          <div className="relative z-10 w-[280px] sm:w-[360px] lg:w-[480px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-[#111]">
            <img 
              src="https://b.zmtcdn.com/data/dish_photos/bf0/f8cf8fec0f1113fdd8e112f6cdaedbf0.jpg" 
              alt="Steamed Momos" 
              className="w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
            />
          </div>
          
        </div>
      </div>

      {/* REST OF THE MENU */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-20 py-24">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
            <span className="text-[#9b1915] text-xs font-bold tracking-[0.3em] uppercase">
                Explore More
            </span>
            <h3 className="font-cormorant italic text-4xl sm:text-5xl mt-3 text-white"  style={{ fontFamily: "Cormorant" }}>
                Our Specialties
            </h3>
        </div>



        {/* MENU GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {menuData.map((item) => (
             <Link key={item.id} to={`/menu/${item.id}`} className="block">
                <MenuItem
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    image={item.image}
                />
             </Link>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center mt-24 pt-12 border-t border-white/5">
          <p className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase">
            * We serve only the freshest ingredients *
          </p>
        </div>

      </div>
    </section>
  );
};

const MenuItem = ({ title, desc, price, image }) => {
  return (
    <div className="group cursor-default flex items-start gap-4">
      {/* Menu Item Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#9b1915] transition-colors duration-300">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="flex-1">
        <div className="flex items-baseline justify-between mb-2">
            <h4 className="font-cormorant text-2xl sm:text-3xl text-[#e5e5e5] group-hover:text-[#9b1915] transition-colors duration-300">
            {title}
            </h4>
            <div className="flex-grow mx-4 border-b border-white/10 relative -top-2 hidden sm:block" />
            <span className="font-cormorant font-semibold text-xl text-[#9b1915]">
            {price}
            </span>
        </div>
        
        {/* Mobile Price (shown below title on very small screens if needed, but flex-row handles it mostly. keeping layout simple) */}

        <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[95%]">
            {desc}
        </p>
      </div>
    </div>
  );
};

export default Menu;
