import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1a3f] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className=" p-2 ">
            <img src="/logo.jpeg" alt="Logo" className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Technical Consultancy Services</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
          Our commitment to quality, creativity, and precision has made us a trusted name in construction and design for over a century.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-r-md font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-6">
        Copyright © 2024 GreatStack. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
