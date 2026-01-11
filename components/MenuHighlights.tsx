"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    name: "Steamed Momos",
    description: "Hand-folded dumplings filled with juicy minced meat or vegetables, served with our signature sepale chili dip.",
    image: "/images/momos.png",
    price: "₹180",
  },
  {
    name: "Tibetan Thukpa",
    description: "A hearty noodle soup with fresh vegetables, tender meat chunks, and aromatic herbs perfect for the soul.",
    image: "/images/thukpa.png",
    price: "₹220",
  },
  {
    name: "Spicy Shapta",
    description: "Thinly sliced meat stir-fried with ginger, garlic, and chilies. best paired with Tingmo (steamed bun).",
    image: "/images/shapta.png",
    price: "₹350",
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-secondary font-cinzel font-bold tracking-widest text-lg uppercase mb-4">
            Taste the Tradition
          </h3>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-primary">
            Our Specialties
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg mb-6 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-cinzel font-bold text-xl">Order Now</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-cinzel font-bold text-primary mb-2 group-hover:text-red-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 font-lato mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="inline-flex items-center text-primary font-bold font-lato hover:gap-2 transition-all">
                  <span>{item.price} • View Details</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-3 bg-primary text-white font-cinzel font-bold text-lg rounded-sm hover:bg-red-900 transition-all shadow-md hover:shadow-xl">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
