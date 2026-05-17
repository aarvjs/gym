"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
      
      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050505] min-h-[100svh] pt-24 pb-16 overflow-hidden">
      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">Our Story</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter">About FitCore</h2>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="about-image relative h-[400px] md:h-[600px] w-full">
            <div className="absolute inset-0 bg-red-600 transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 z-0 rounded-sm"></div>
            <div className="absolute inset-0 z-10 bg-zinc-800 rounded-sm overflow-hidden">
              <Image 
                src="/images/about-gym.jpg" 
                alt="Gym Interior" 
                fill 
                className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" 
              />
            </div>
          </div>
          
          <div className="pt-6 md:pt-0">
            <h3 className="about-content text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight mb-6">Building Stronger Bodies <br/>Since 2010</h3>
            <p className="about-content text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              FitCore was founded on a simple principle: fitness should be accessible, intimidating-free, and most importantly, results-driven. We've spent over a decade perfecting our facility and training methods.
            </p>
            <p className="about-content text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              Our 20,000 square foot facility is equipped with the latest and greatest in fitness technology, from dedicated powerlifting zones to high-tech cardio decks.
            </p>
            
            <ul className="about-content space-y-4 mb-10">
              {[
                "Award-winning facility design",
                "Over 50+ specialized classes weekly",
                "Elite certified personal trainers",
                "Nutrition and recovery center",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-base md:text-lg font-medium">
                  <CheckCircle2 className="text-red-600 mr-4 shrink-0" size={24} />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="about-content grid grid-cols-3 gap-4 md:gap-6 text-center border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-1">5K+</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Members</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-1">20+</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Trainers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-1">15</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
