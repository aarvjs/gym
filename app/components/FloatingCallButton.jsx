"use client";

import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  // IMPORTANT: Change the phone number below to update it across the site
  const phoneNumber = "+919140130314";

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-btn {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-btn {
          animation: float-btn 3s ease-in-out infinite;
        }
      `}} />
      
      {/* Group wrapper with float animation */}
      <div className="group relative flex items-center justify-center animate-float-btn">
        
        {/* Tooltip - Only visible on hover, mostly for desktop */}
        <div className="absolute right-full mr-4 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none items-center">
          <span className="bg-[#0a0a0a] border border-red-600/30 text-white text-xs font-bold px-3 py-1.5 rounded whitespace-nowrap uppercase tracking-wider shadow-lg">
            Call Now
          </span>
          {/* Small triangle pointing to the button */}
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[6px] border-l-red-600/30 border-b-[5px] border-b-transparent"></div>
        </div>

        {/* The Button */}
        <a 
          href={`tel:${phoneNumber}`}
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-110 transition-all duration-300 z-10"
        >
          {/* Radar ping effect running infinitely in the background */}
          <div className="absolute inset-0 rounded-full border-2 border-red-600 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
          
          <Phone className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
