import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-cinzel font-bold mb-6 text-secondary">
            Kalsang
          </h3>
          <p className="text-gray-400 leading-relaxed font-lato">
            Authentic Tibetan & Thai cuisine served with warm hospitality. 
            Experience the taste of the Himalayas in every bite.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-cinzel font-bold mb-6 text-white">
            Contact Us
          </h4>
          <ul className="space-y-4 text-gray-400 font-lato">
            <li>123 Mall Road, Dehradun</li>
            <li>Uttarakhand, India</li>
            <li>+91 98765 43210</li>
            <li>info@kalsangrestaurant.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-cinzel font-bold mb-6 text-white">
            Opening Hours
          </h4>
          <ul className="space-y-4 text-gray-400 font-lato">
            <li>Mon - Sun: 11:00 AM - 11:00 PM</li>
            <li className="pt-4">
              <div className="flex justify-center md:justify-start space-x-6">
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm font-lato">
        <p>© {new Date().getFullYear()} Kalsang Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
