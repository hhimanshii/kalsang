"use client";

import Image from "next/image";

const images = [
  { src: "/images/momos.png", alt: "Steamed Momos", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/interior.png", alt: "Cozy Interior", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/thukpa.png", alt: "Thukpa Soup", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/exterior.png", alt: "Restaurant Exterior", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/shapta.png", alt: "Spicy Shapta", span: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-secondary font-cinzel font-bold tracking-widest text-lg uppercase mb-4">
            Visual Journey
          </h3>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white">
            Moments at Kalsang
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-lg group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-cinzel font-bold text-xl tracking-wider">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
