import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); 
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: ""
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = "service_5100l6g";
    const TEMPLATE_ID = "template_ij0kero";
    const PUBLIC_KEY = "saou620wnXylJf6cb";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("success");
          setFormData({ user_name: "", user_email: "", message: "",user_phone: "" });
          setTimeout(() => setStatus("idle"), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section className="w-full min-h-screen bg-[#111111] text-[#f5f5f5] overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12 lg:py-20">
        
        {/* HERO START */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            
            {/* LEFT TEXT */}
            <div className="w-full lg:w-1/2 relative z-20">
                <p className="font-allura text-[#d62828] text-3xl sm:text-4xl mb-2 italic" style={{ fontFamily: "Cormorant" }}>
                    We'd love to hear from you
                </p>
                <h1 className="font-cormorant font-bold text-6xl leading-none tracking-tight mb-8">
                    Get in Touch
                </h1>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md border-l border-[#d62828] pl-6">
                    Whether you have a question about our menu, want to book a table, 
                    or just want to say hello, our team is always ready to answer.
                </p>
            </div>

            {/* RIGHT IMAGE WITH RED BLOCK */}
            <div className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center lg:justify-end">
                {/* RED BLOCK */}
                <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 
                                h-[160px] sm:h-[220px] 
                                bg-[#9b1915] z-0 
                                w-[140%]" 
                />
                 {/* IMAGE */}
                 <div className="relative z-10 w-[300px] h-[350px] shadow-2xl border-4 border-[#111] rotate-2">
                    <img 
                      src="https://i0.wp.com/www.kalsangrestaurants.com/wp-content/uploads/2021/10/kalsang-chandigarh-4.jpg" 
                      alt="Contact Kalsang" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
            </div>
        </div>
        {/* HERO END */}

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* CONTACT INFO */}
            <div className="space-y-12">
                <ContactItem 
                    icon={<MapPin size={24} />}
                    title="Head Office"
                    details={["88 A, Rajpur Rd, Hathibarkala Salwala,", "Dehradun, Uttarakhand 248001"]}
                />
                <ContactItem 
                    icon={<Phone size={24} />}
                    title="Phone"
                    details={["+91 95572 70285", "+91 135 274 3376"]}
                />
                <ContactItem 
                    icon={<Mail size={24} />}
                    title="Email"
                    details={["hello@kalsangrestaurants.com", "bookings@kalsang.com"]}
                />
            </div>

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-[#1a1a1a] p-8 sm:p-12 border border-white/5 shadow-2xl relative">
                
                {status === "success" && (
                    <div className="absolute inset-0 bg-[#1a1a1a]/95 flex flex-col items-center justify-center z-10 transition-all">
                        <div className="w-16 h-16 bg-[#9b1915] rounded-full flex items-center justify-center mb-4">
                            <Mail className="text-white" size={32} />
                        </div>
                        <h3 className="font-cormorant text-3xl text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400">We'll get back to you shortly.</p>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField 
                        label="Name" 
                        name="user_name" 
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />
                     <InputField 
                        label="Phone (Optional)" 
                         name="user_phone"
                    />
                </div>
                <InputField 
                    label="Email Address" 
                    type="email" 
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
                <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4" 
                        className="bg-[#111] border-b border-white/20 focus:border-[#d62828] outline-none text-white p-3 transition-colors resize-none"
                    ></textarea>
                </div>
                
                <button 
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-4 px-10 py-4 bg-[#9b1915] text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#9b1915] transition-all duration-300 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === "sending" ? (
                        <>
                         <Loader2 className="animate-spin" size={16} /> Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </button>
                {status === "error" && (
                    <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
                )}
            </form>

        </div>

      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, details }) => (
    <div className="flex items-start gap-6 group">
        <div className="p-4 bg-[#1a1a1a] border border-white/5 text-[#9b1915] rounded-full group-hover:bg-[#9b1915] group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <div>
            <h4 className="font-cormorant text-2xl mb-2 text-white">{title}</h4>
            {details.map((line, i) => (
                <p key={i} className="text-gray-400 text-sm leading-relaxed">{line}</p>
            ))}
        </div>
    </div>
);

const InputField = ({ label, type = "text", name, value, onChange, required }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-gray-500">{label}</label>
        <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="bg-[#111] border-b border-white/20 focus:border-[#d62828] outline-none text-white p-3 transition-colors w-full"
        />
    </div>
);

export default Contact;
