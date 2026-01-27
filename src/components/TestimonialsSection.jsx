import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    id: 3,
    name: "James Washington",
    role: "Co-Founder",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Customer <span className="font-normal">Testimonials</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Real Stories from Those Who Found Home with Us
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
          >
            {/* Profile Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            {/* Name & Role */}
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.role}</p>

            {/* Stars */}
            <div className="flex justify-center gap-1 text-orange-500 mt-3 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
