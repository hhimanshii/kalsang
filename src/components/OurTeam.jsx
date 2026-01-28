import React from "react";

const ownerImage =
  "https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D";

const teamImages = [
  "https://images.unsplash.com/photo-1579705625203-9e335af5abc7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWYlMjB0ZWFtfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661718880755-586f49a1065e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZiUyMHRlYW18ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1759673824858-d4050871d322?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZiUyMHRlYW18ZW58MHx8MHx8fDA%3D",
];

const OurTeam = () => {
  return (
    <section className="w-full bg-gradient-to-b 
from-[#3d0806] 
via-[#9b1915]
to-[#f9f9f9]
                        text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* OWNER */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[240px] sm:w-[300px] md:w-[360px]
                            h-[320px] sm:h-[380px] md:h-[440px]
                            rounded-t-full overflow-hidden
                            border border-yellow-400/40">
              <img
                src={ownerImage}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-yellow-400 uppercase tracking-[0.3em]
                          text-xs sm:text-sm mb-4" >
              The Founder
            </p>

            <h3
              className="font-cormorant italic text-3xl sm:text-4xl md:text-5xl
                         leading-tight mb-4"
                         style={{ fontFamily: "Cormorant" }}
            >
              A Vision Rooted in Tradition
            </h3>

            <p className="text-white/80 text-sm sm:text-base md:text-lg
                          leading-relaxed mb-4">
              Kalsang was founded with a belief that food carries memory,
              culture, and emotion — passed lovingly from one generation to
              the next.
            </p>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Inspired by Himalayan warmth and Asian street flavours, the
              vision was simple: serve honest food, with heart.
            </p>
          </div>
        </div>

        {/* TEAM */}
        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em]
                        text-xs sm:text-sm mb-4" >
            Our Team
          </p>

          <h3
            className="font-cormorant italic text-3xl sm:text-4xl md:text-5xl
                       leading-tight mb-10"
                       style={{ fontFamily: "Cormorant" }}
          >
            The Hands Behind Every Dish
          </h3>

          {/* TEAM IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                          gap-8 max-w-5xl mx-auto">
            {teamImages.map((img, i) => (
              <div
                key={i}
                className="relative h-[320px] rounded-2xl overflow-hidden
                           border border-white/20"
              >
                <img
                  src={img}
                  alt="Team"
                  className="w-full h-full object-cover
                             scale-105 hover:scale-110
                             transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <p className="text-white/70 text-sm sm:text-base
                        max-w-2xl mx-auto mt-10 leading-relaxed">
            From chefs to servers, our team works in harmony to bring warmth,
            authenticity, and care to every plate that leaves our kitchen.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
