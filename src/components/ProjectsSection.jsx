import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Palm Residences",
    price: "$2,50,000",
    location: "Miami",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-[90%] md:w-[85%] mx-auto py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Projects <span className="font-normal">Completed</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Crafting Spaces, Building Legacies — Explore Our Portfolio
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Projects */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[280px] md:min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {project.price} | {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
