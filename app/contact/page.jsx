"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050505] min-h-[100svh] pt-24 pb-16 overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">Get In Touch</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter">Contact Us</h2>
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="contact-item">
            <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-6 md:mb-8">We're Here <br/>To Help</h3>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
              Have questions about memberships, classes, or personal training? Reach out to our team. We aim to respond to all inquiries within 24 hours.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <div className="bg-red-600/10 p-3 md:p-4 rounded-sm mr-4 md:mr-6 shrink-0">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold uppercase mb-1">Location</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">123 Muscle Street, Fitness City<br/>FC 90210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600/10 p-3 md:p-4 rounded-sm mr-4 md:mr-6 shrink-0">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold uppercase mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm md:text-base">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600/10 p-3 md:p-4 rounded-sm mr-4 md:mr-6 shrink-0">
                  <Mail className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold uppercase mb-1">Email</h4>
                  <p className="text-gray-400 text-sm md:text-base">info@fitcoregym.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-600/10 p-3 md:p-4 rounded-sm mr-4 md:mr-6 shrink-0">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold uppercase mb-1">Hours</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">Mon-Fri: 5am - 11pm<br/>Sat-Sun: 6am - 10pm</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-item bg-zinc-950 p-6 md:p-10 border border-white/5 rounded-sm">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-6">Send A Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-white text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-white text-sm"
                />
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Subject</label>
                <select className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-white appearance-none text-sm cursor-pointer">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none focus:border-red-600 transition-colors text-white resize-none text-sm"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 transition-colors rounded-sm shadow-[0_0_20px_-5px_rgba(220,38,38,0.4)] text-sm md:text-base mt-2"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
