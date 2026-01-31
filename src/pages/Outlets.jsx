import React from "react";

const outletsData = [
  {
    city: "Mussoorie",
    address: "The Mall Rd, Survey Colony, The Mall Road, Mussoorie, Uttarakhand 248179",
    phone: "098973 39788",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Mussoorie.png?w=378&ssl=1" 
  },
  {
    city: "Dehradun (Rajpur Road)",
    address: "88 A, Rajpur Rd, Hathibarkala Salwala, Dehradun, Uttarakhand 248001",
    phone: "095572 70285",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Dehradun.png?w=378&ssl=1" 
  },
  {
    city: "Dehradun (Clock Tower)",
    address: "MDDA Complex, Shop Number R9, Clock Tower, Dehradun, Uttarakhand",
    phone: "095572 70285",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Clock-Tower-Dehradun.png?w=378&ssl=1" 
  },
  {
    city: "Delhi",
    address: "House 158 Block, 7, Majnu-ka-Tilla, New Delhi, Delhi 110054",
    phone: "Contact for details",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Delhi.png?w=378&ssl=1" 
  },
  {
    city: "Chandigarh",
    address: "SCO 149, 150, Sector 8C, Sector 8, Chandigarh, 160009",
    phone: "095207 16378",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Chandigarh.png?w=378&ssl=1" 
  },
  {
    city: "Ludhiana",
    address: "SCO No 7-8 Platinum Square Market Sukhmani Enclave Canal Road, S City Rd, Ludhiana, Punjab 141027",
    phone: "062393 08642",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Ludhiana.png?w=378&ssl=1" 
  },
  {
    city: "Mohali",
    address: "Phase 3B-2, Sector 60, Sahibzada Ajit Singh Nagar, Punjab 160059",
    phone: "097796 67898",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Ludhiana.png?w=378&ssl=1" 
  },
  {
    city: "Dharamshala",
    address: "The main square, above Tibet doors store, McLeod Ganj, Dharamshala, Himachal Pradesh 176219",
    phone: "084332 67944",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/07/Kalsang-Dharamshala.jpg?w=485&ssl=1" 
  },
  {
    city: "Pokhara (Nepal)",
    address: "Lakeside Rd, Pokhara 33700, Nepal",
    phone: "+977 980-2857888",
    image: "https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2023/04/Kalsang-Pokhara-Nepal.png?w=378&ssl=1"
  }
];

const Outlets = () => {
  return (
    <section className="w-full bg-[#111111] text-[#f5f5f5] min-h-screen pt-24 pb-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
      {/* SPOTLIGHT HERO in Outlets */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[400px] lg:min-h-[500px] flex flex-col lg:flex-row items-center pt-4 lg:pt-0 mb-20 px-4 sm:px-8">

        {/* LEFT TEXT */}
        <div className="relative z-20 w-full lg:w-[45%] lg:pr-10 text-center lg:text-left">
             <h1 className="font-cormorant font-bold text-6xl leading-none tracking-tight mb-2 text-white">
            Find Us
          </h1>
          <p className="font-allura text-[#d62828] text-3xl sm:text-4xl lg:text-5xl -mt-2 mb-8 ml-2 italic" style={{ fontFamily: "Cormorant" }}>
            Across the Himalayas
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 border-l border-white/20 pl-6">
             From the serene hills of Mussoorie to the bustling streets of Delhi,
            experience the authentic taste of the Himalayas at a Kalsang near you.
          </p>
        </div>

        {/* RIGHT IMAGE WITH RED BLOCK */}
        <div className="relative w-full lg:w-[55%] h-[300px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
             {/* THE RED BLOCK */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2
                          h-[160px] sm:h-[200px] lg:h-[280px]
                          bg-[#9b1915] z-0
                          lg:-mr-20 lg:w-[120%]"
          />

           {/* IMAGE */}
           <div className="relative z-10 w-[260px] sm:w-[320px] lg:w-[420px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-[#111]">
            <img
              src="https://preview.redd.it/kalsang-chandigarh-review-v0-33kjgqcitwqe1.jpg?width=640&crop=smart&auto=webp&s=5bc92dd1515c033c9b17d9eb05d93619e2f8610f"
              alt="Kalsang Location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

        {/* OUTLETS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {outletsData.map((outlet, index) => (
            <OutletCard key={index} outlet={outlet} />
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="text-center mt-24 border-t border-white/10 pt-16">
            <h3 className="font-cormorant text-3xl mb-4">Peace, Love & Momos</h3>
            <p className="text-gray-500 text-sm tracking-wide">VISIT US TODAY</p>
        </div>

      </div>
    </section>
  );
};

const OutletCard = ({ outlet }) => {
  return (
    <div className="group bg-[#1a1a1a] border border-white/5 overflow-hidden hover:border-[#9b1915]/50 transition-colors duration-500">
      
      {/* Image */}
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={outlet.image} 
          alt={`${outlet.city} Outlet`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h4 className="font-cormorant text-2xl text-white mb-4 group-hover:text-[#9b1915] transition-colors duration-300">
          {outlet.city}
        </h4>
        
        <div className="space-y-4">
            <div className="flex items-start gap-3">
                <span className="text-[#9b1915] mt-1 text-sm">📍</span>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {outlet.address}
                </p>
            </div>
            
            <div className="flex items-center gap-3">
                <span className="text-[#9b1915] text-sm">📞</span>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                    {outlet.phone}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
