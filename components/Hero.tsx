"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fixed attachment or absolute positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Kalsang Restaurant Ambience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-xl md:text-2xl font-cinzel text-secondary mb-4 tracking-[0.2em] animate-fade-in-up">
          EST. 1969
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold mb-6 animate-fade-in-up delay-100">
          KALSANG
        </h1>
        <p className="text-lg md:text-2xl font-lato font-light mb-10 text-gray-200 animate-fade-in-up delay-200 max-w-2xl mx-auto">
          Authentic Tibetan & Thai Cuisine in the Heart of India
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button className="px-8 py-4 bg-primary text-white font-cinzel text-lg rounded-sm hover:bg-red-900 transition-all transform hover:scale-105 shadow-lg border border-primary">
            View Menu
          </button>
          <button className="px-8 py-4 bg-transparent border border-white text-white font-cinzel text-lg rounded-sm hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-lg">
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
}
