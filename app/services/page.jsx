"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Timer, Users, Dumbbell, Activity, Heart, Zap } from "lucide-react";

export default function ServicesPage() {
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

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "CrossFit",
      desc: "High-intensity functional training to build strength and conditioning.",
      icon: <Dumbbell size={32} className="text-red-600 mb-4" />,
      image: "/images/class-1.jpg"
    },
    {
      title: "HIIT Blast",
      desc: "Short bursts of intense exercise followed by brief recovery periods.",
      icon: <Zap size={32} className="text-red-600 mb-4" />,
      image: "/images/class-2.jpg"
    },
    {
      title: "Powerlifting",
      desc: "Focus on the big three: squat, bench press, and deadlift.",
      icon: <Activity size={32} className="text-red-600 mb-4" />,
      image: "/images/class-3.jpg"
    },
    {
      title: "Yoga & Core",
      desc: "Improve flexibility, balance, and core strength.",
      icon: <Heart size={32} className="text-red-600 mb-4" />,
      image: "/images/class-4.jpg"
    },
    {
      title: "Boxing",
      desc: "Learn striking techniques while getting an incredible cardio workout.",
      icon: <Users size={32} className="text-red-600 mb-4" />,
      image: "/images/class-5.jpg"
    },
    {
      title: "Personal Training",
      desc: "1-on-1 coaching tailored to your specific goals and needs.",
      icon: <Timer size={32} className="text-red-600 mb-4" />,
      image: "/images/hero-gym.jpg"
    }
  ];

  return (
    <div className="bg-[#050505] min-h-[100svh] pt-24 pb-16 overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">What We Offer</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter">Classes & Services</h2>
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div key={i} className="service-card bg-zinc-950 group cursor-pointer border border-white/5 hover:border-red-600/50 transition-colors rounded-sm overflow-hidden flex flex-col">
              <div className="relative h-56 md:h-64 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col grow">
                {service.icon}
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">{service.desc}</p>
                <button className="flex items-center text-red-500 font-bold uppercase tracking-wider text-sm hover:text-white transition-colors mt-auto w-max">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
