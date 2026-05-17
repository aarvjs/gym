"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryPage() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

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

      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/hero-gym.jpg",
    "/images/about-gym.jpg",
    "/images/class-1.jpg",
    "/images/class-2.jpg",
    "/images/class-3.jpg",
    "/images/class-4.jpg",
    "/images/class-5.jpg",
    "/images/hero-gym.jpg", // Reusing for grid
    "/images/about-gym.jpg",
  ];

  return (
    <div className="bg-[#050505] min-h-[100svh] pt-24 pb-16 overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">Inside FitCore</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter">Our Gallery</h2>
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, i) => (
            <div key={i} className="gallery-item relative h-64 md:h-80 group overflow-hidden cursor-pointer rounded-sm">
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-300 z-10 mix-blend-multiply" />
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
