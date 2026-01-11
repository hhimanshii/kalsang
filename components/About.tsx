"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FCFBF7] text-foreground relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="relative h-[500px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl border-4 border-primary/10">
             {/* Using the hero bg here as a placeholder for the about image context, or can reuse momos if consistent styling. 
                 Ideally we'd have a specific 'restaurant vibey' image. using hero-bg for now but cropped. 
             */}
            <Image
              src="/images/interior.png"
              alt="Restaurant Interior"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl rounded-tl-3xl max-w-xs hidden md:block">
            <p className="font-cinzel text-primary text-4xl font-bold mb-2">50+</p>
            <p className="font-lato text-gray-600">Years of culinary excellence and tradition.</p>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <h3 className="text-secondary font-cinzel font-bold tracking-widest text-lg uppercase">
            Our Story
          </h3>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-primary leading-tight">
            A Journey from the Himalayas to Your Plate
          </h2>
          <p className="text-lg text-gray-600 font-lato leading-relaxed">
            Founded in 1969, Kalsang began as a humble family kitchen serving authentic Tibetan recipes passed down through generations. Today, we continue to honor our heritage by using traditional spices, hand-folded momos, and slow-cooked broths.
          </p>
          <p className="text-lg text-gray-600 font-lato leading-relaxed">
            Every dish tells a story of the mountains, the cold winds of Tibet, and the warmth of a community that loves to feed. Join us for a meal that feels like home.
          </p>
          <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-cinzel font-bold rounded-sm">
            Read Our History
          </button>
        </div>
      </div>
    </section>
  );
}
