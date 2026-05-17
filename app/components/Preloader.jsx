"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Only run the preloader once per session
    const hasLoaded = sessionStorage.getItem('site_preloader_done');
    if (hasLoaded) {
      setIsComplete(true);
      return;
    }

    sessionStorage.setItem('site_preloader_done', 'true');
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        document.body.style.overflow = "auto";
      }
    });

    // 1. Fade in the logo
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    // 2. Fill the loading bar
    .to(barRef.current, {
      width: "100%",
      duration: 1.2,
      ease: "power2.inOut"
    }, "-=0.2")
    // 3. Quick fade out of the elements
    .to([logoRef.current, textRef.current, barRef.current], {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.in"
    })
    // 4. Slide the entire black screen up to reveal the website
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut"
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, []);

  // Return null once fully complete to remove from DOM and free up resources
  if (isComplete) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <h1 
          ref={logoRef} 
          className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white opacity-0 translate-y-10"
        >
          FIT<span className="text-red-600">CORE</span>
        </h1>
        
        <div className="w-48 md:w-64 mt-12 flex flex-col items-center">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div 
              ref={barRef} 
              className="absolute top-0 left-0 h-full w-0 bg-red-600 rounded-full"
            />
          </div>
          <p 
            ref={textRef} 
            className="text-red-600/80 text-xs font-bold tracking-[0.2em] uppercase mt-4"
          >
            Loading Facility...
          </p>
        </div>
      </div>
    </div>
  );
}
