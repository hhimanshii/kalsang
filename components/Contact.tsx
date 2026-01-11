"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FCFBF7] text-foreground relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-secondary font-cinzel font-bold tracking-widest text-lg uppercase mb-2">
                Visit Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 font-lato leading-relaxed mb-8">
                Whether you’re looking for a casual lunch, a family dinner, or a gathering with friends, Kalsang offers a memorable dining experience where you can explore the rich flavors of Tibet and Thailand.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-cinzel text-lg">Location</h4>
                  <p className="text-gray-600 font-lato">Mall Road, Mussoorie / Dehradun</p>
                  <p className="text-gray-500 text-sm">Also in Delhi, Chandigarh, Mohali</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-cinzel text-lg">Call Us</h4>
                  <p className="text-gray-600 font-lato">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-cinzel text-lg">Email Us</h4>
                  <p className="text-gray-600 font-lato">hello@kalsangfriends.com</p>
                </div>
              </div>

               <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold font-cinzel text-lg">Opening Hours</h4>
                  <p className="text-gray-600 font-lato">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-lg border border-gray-100">
             <h3 className="text-2xl font-cinzel font-bold text-primary mb-6">Send a Message</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Name</label>
                   <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Phone</label>
                   <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" placeholder="Your Number" />
                 </div>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" placeholder="your@email.com" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-lato">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" placeholder="How can we help you?"></textarea>
               </div>
               <button type="submit" className="w-full py-4 bg-primary text-white font-cinzel font-bold text-lg rounded-sm hover:bg-red-900 transition-colors shadow-lg">
                 Send Message
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
