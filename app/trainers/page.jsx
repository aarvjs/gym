"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TrainersPage() {
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

      gsap.from(".trainer-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const trainers = [
    {
      name: "Alex Rivera",
      specialty: "CrossFit Coach",
      bio: "Former military with 10 years of CrossFit experience. Alex will push you to limits you didn't know you had.",
      image: "/images/class-1.jpg"
    },
    {
      name: "Sarah Jones",
      specialty: "HIIT & Cardio",
      bio: "High energy, fast-paced workouts. Sarah's classes will leave you drenched in sweat and smiling.",
      image: "/images/class-2.jpg"
    },
    {
      name: "Mike Chen",
      specialty: "Powerlifting Expert",
      bio: "National level powerlifter. Focuses on form, technique, and adding plates to your bar safely.",
      image: "/images/class-3.jpg"
    },
    {
      name: "Emma Stone",
      specialty: "Yoga & Mobility",
      bio: "Helping athletes recover faster and move better. Essential for longevity in your fitness journey.",
      image: "/images/class-4.jpg"
    },
    {
      name: "David King",
      specialty: "Boxing Instructor",
      bio: "Golden Gloves champion turned coach. Technical striking with intense conditioning.",
      image: "/images/class-5.jpg"
    },
    {
      name: "Lisa Wong",
      specialty: "Nutrition Specialist",
      bio: "Fuel your body right. Lisa helps members dial in their diet for optimal performance.",
      image: "/images/about-gym.jpg"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-[100svh] pt-24 pb-16 overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">The Experts</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter">Meet Our Trainers</h2>
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {trainers.map((trainer, i) => (
            <div key={i} className="trainer-card group relative overflow-hidden bg-zinc-950 border border-white/5 rounded-sm">
              <div className="relative h-[350px] md:h-[420px] w-full">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300 z-10" />
                <Image 
                  src={trainer.image} 
                  alt={trainer.name} 
                  fill 
                  className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" 
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 translate-y-24 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block w-max mb-2">
                    {trainer.specialty}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-2 text-white">{trainer.name}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4 line-clamp-3">
                    {trainer.bio}
                  </p>
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <a href="#" className="bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white hover:text-black transition-colors text-white">IG</a>
                    <a href="#" className="bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white hover:text-black transition-colors text-white">TW</a>
                    <a href="#" className="bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white hover:text-black transition-colors text-white">FB</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
