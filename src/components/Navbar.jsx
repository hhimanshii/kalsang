import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icon library
import logo from '../assets/images/logo.jpg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-[5%] bg-transparent relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row items-center justify-center text-gray-800 gap-x-20">
        <Link to="/" className="text-yellow-400 transition-colors">Our Story</Link>
        <Link to="/" className="text-yellow-400 transition-colors">Menu</Link>
        <Link to="/" className="text-yellow-400 transition-colors">Outlets</Link>
        <Link to="/" className="text-yellow-400 transition-colors">Contact Us</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-800 focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-y-4 py-4 md:hidden z-50">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-800">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-800">
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-800">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-blue-800">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
