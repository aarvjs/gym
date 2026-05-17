"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, Dumbbell, Timer, Users, Trophy } from "lucide-react";

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const classesRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Check if it's the first time loading to sync with the Preloader (3.5s total)
      const isFirstLoad = !sessionStorage.getItem('hero_loaded');
      if (isFirstLoad) {
        sessionStorage.setItem('hero_loaded', 'true');
      }

      // Hero Animations
      gsap.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: isFirstLoad ? 2.6 : 0.2 // Delay on first load to wait for Preloader
      });

      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: "20%",
        ease: "none"
      });

      // Features Scroll Animation
      gsap.fromTo(".feature-header", 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      gsap.fromTo(".feature-card", 
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)"
        }
      );

      // Pricing Scroll Animation
      gsap.fromTo(".pricing-card", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050505] overflow-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/images/hero-gym.jpg"
            alt="Gym Background"
            fill
            className="hero-bg object-cover opacity-60 scale-105"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl pt-10 md:pt-0">
            <h2 className="hero-text text-red-600 font-bold tracking-widest uppercase mb-4 flex items-center text-sm md:text-base">
              <span className="w-8 md:w-12 h-1 bg-red-600 mr-4"></span>
              Unleash Your Potential
            </h2>
            {/* Added pr-4 to span to fix italic 'S' clipping */}
            <h1 className="hero-text text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-white w-full">
              Push Past <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 pr-4 inline-block">Your Limits</span>
            </h1>
            <p className="hero-text text-gray-300 text-base sm:text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Join the most exclusive fitness facility in the city. Elite equipment, world-class trainers, and a community that won't let you quit.
            </p>
            <div className="hero-text flex flex-col sm:flex-row gap-4">
              <Link href="/membership" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-wider text-center transition-all hover:-translate-y-1 inline-flex items-center justify-center text-sm sm:text-base">
                Start Free Trial <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/about" className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 font-bold uppercase tracking-wider text-center transition-all inline-flex items-center justify-center text-sm sm:text-base">
                Explore Facility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section ref={featuresRef} className="py-20 md:py-32 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24 feature-header">
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight">The FitCore Advantage</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Dumbbell size={40} className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />, title: "Premium Equipment", desc: "State-of-the-art machines and free weights." },
              { icon: <Users size={40} className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />, title: "Expert Trainers", desc: "Certified professionals to guide your journey." },
              { icon: <Timer size={40} className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />, title: "24/7 Access", desc: "Train on your schedule, day or night." },
              { icon: <Trophy size={40} className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />, title: "Proven Results", desc: "Join thousands of successful transformations." }
            ].map((feature, i) => (
              <div key={i} className="feature-card group bg-black p-8 border border-white/5 hover:border-red-600/50 hover:-translate-y-2 transition-all duration-300 rounded-sm">
                {feature.icon}
                <h4 className="text-xl font-bold uppercase mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES SLIDER SECTION */}
      <section ref={classesRef} className="py-20 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-between items-end relative z-20">
          <div>
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Our Programs</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight">Featured Classes</h3>
          </div>
          <Link href="/services" className="hidden md:flex items-center text-white hover:text-red-500 transition-colors uppercase font-bold tracking-wider text-sm group">
            View All Classes <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>

        {/* Curved Rainbow-like Arc Slider */}
        <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden group flex justify-center items-center" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
          {/* Gradient masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-30 pointer-events-none"></div>

          <div className="absolute w-full h-full flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
            {[
              { title: "CrossFit", img: "/images/class-1.jpg", trainer: "Alex Rivera", time: "Mon/Wed 6PM", color: "from-red-900/80" },
              { title: "HIIT Blast", img: "/images/class-2.jpg", trainer: "Sarah Jones", time: "Tue/Thu 7AM", color: "from-orange-900/80" },
              { title: "Powerlifting", img: "/images/class-3.jpg", trainer: "Mike Chen", time: "Mon/Fri 5PM", color: "from-red-800/80" },
              { title: "Yoga Core", img: "/images/class-4.jpg", trainer: "Emma Stone", time: "Sat/Sun 9AM", color: "from-purple-900/80" },
              { title: "Boxing", img: "/images/class-5.jpg", trainer: "David King", time: "Tue/Thu 8PM", color: "from-rose-900/80" },
              // Duplicate to ensure smooth infinite loop
              { title: "CrossFit", img: "/images/class-1.jpg", trainer: "Alex Rivera", time: "Mon/Wed 6PM", color: "from-red-900/80" },
              { title: "HIIT Blast", img: "/images/class-2.jpg", trainer: "Sarah Jones", time: "Tue/Thu 7AM", color: "from-orange-900/80" },
              { title: "Powerlifting", img: "/images/class-3.jpg", trainer: "Mike Chen", time: "Mon/Fri 5PM", color: "from-red-800/80" },
              { title: "Yoga Core", img: "/images/class-4.jpg", trainer: "Emma Stone", time: "Sat/Sun 9AM", color: "from-purple-900/80" },
              { title: "Boxing", img: "/images/class-5.jpg", trainer: "David King", time: "Tue/Thu 8PM", color: "from-rose-900/80" },
            ].map((cls, i) => {
              // 10 cards total. Total animation time = 30s. Delay = -i * 3s
              return (
                <div
                  key={i}
                  className="absolute animate-rainbowX group-hover:[animation-play-state:paused] w-[180px] h-[250px] md:w-[320px] md:h-[420px]"
                  style={{
                    animationDelay: `calc(${i} * -3s)`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <div 
                    className="w-full h-full absolute animate-rainbowY group-hover:[animation-play-state:paused] group/card overflow-hidden rounded-2xl cursor-pointer border border-white/10 shadow-2xl hover:border-red-500/50"
                    style={{
                      animationDelay: `calc(${i} * -3s)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover/card:bg-transparent transition-colors duration-500 z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} via-black/40 to-transparent z-10 opacity-80 group-hover/card:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute inset-0 w-full h-full bg-zinc-800">
                      <Image src={cls.img} alt={cls.title} fill sizes="(max-width: 768px) 180px, 320px" className="object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-6 z-20 w-full transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-[10px] md:text-sm uppercase tracking-wider mb-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-red-600 inline-block rounded-sm">{cls.trainer}</p>
                      <h4 className="text-xl md:text-3xl font-black uppercase italic mb-1 md:mb-2 text-white mt-1 md:mt-2 drop-shadow-lg">{cls.title}</h4>
                      <p className="text-gray-200 text-[10px] md:text-sm flex items-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100 font-medium drop-shadow-md">
                        <Timer size={12} className="mr-1 md:mr-2" /> {cls.time}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 md:hidden text-center relative z-20">
          <Link href="/services" className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors uppercase font-bold tracking-wider text-sm px-6 py-3 rounded-full w-full">
            View All Classes <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section ref={pricingRef} className="py-20 md:py-32 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm">Membership</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight">Choose Your Plan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="pricing-card bg-black p-8 md:p-10 border border-white/5 relative rounded-2xl hover:border-white/20 transition-colors">
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-2">Basic</h4>
              <p className="text-gray-400 text-sm mb-6">Perfect for beginners</p>
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">$29</span>
                <span className="text-gray-500 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Access to gym equipment</li>
                <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Locker room access</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={18} className="mr-3 shrink-0" /> Group classes</li>
                <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={18} className="mr-3 shrink-0" /> Personal trainer</li>
              </ul>
              <Link href="/membership" className="block w-full py-4 border border-white/20 text-center uppercase font-bold text-sm hover:bg-white hover:text-black transition-all rounded-sm">
                Select Plan
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card bg-red-600 p-8 md:p-10 relative transform md:-translate-y-6 shadow-[0_20px_50px_-15px_rgba(220,38,38,0.4)] rounded-2xl">
              <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold uppercase px-4 py-1.5 m-4 rounded-full shadow-lg">Popular</div>
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white">Pro</h4>
              <p className="text-white/80 text-sm mb-6">For serious athletes</p>
              <div className="mb-8 text-white">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">$59</span>
                <span className="text-white/70 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> Access to gym equipment</li>
                <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> Locker room access</li>
                <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> All group classes</li>
                <li className="flex items-center text-sm text-white/50"><CheckCircle2 size={18} className="mr-3 shrink-0" /> Personal trainer</li>
              </ul>
              <Link href="/membership" className="block w-full py-4 bg-white text-black text-center uppercase font-bold text-sm hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 rounded-sm">
                Select Plan
              </Link>
            </div>

            {/* Elite Plan */}
            <div className="pricing-card bg-black p-8 md:p-10 border border-white/5 relative rounded-2xl hover:border-white/20 transition-colors">
              <h4 className="text-xl md:text-2xl font-bold uppercase mb-2">Elite</h4>
              <p className="text-gray-400 text-sm mb-6">The ultimate experience</p>
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tighter">$99</span>
                <span className="text-gray-500 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Access to gym equipment</li>
                <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Locker room access</li>
                <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> All group classes</li>
                <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> 4 Personal sessions/mo</li>
              </ul>
              <Link href="/membership" className="block w-full py-4 border border-white/20 text-center uppercase font-bold text-sm hover:bg-white hover:text-black transition-all rounded-sm">
                Select Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <Image src="/images/gallery-gym.jpg" alt="Join Community" fill className="object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black z-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-tight">
            Ready to change <br className="hidden sm:block" /> <span className="text-red-600">your life?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join today and get your first week absolutely free. No commitments, just results.</p>
          <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 md:px-12 py-5 font-bold uppercase tracking-widest text-center transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.6)] inline-block rounded-sm text-sm md:text-base">
            Join The Community
          </Link>
        </div>
      </section>

      {/* CSS for custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --slider-x: 1800px;
          --ty-edge: 250px;
          --ty-mid: 100px;
        }
        @media (max-width: 768px) {
          :root {
            --slider-x: 1100px;
            --ty-edge: 120px;
            --ty-mid: 50px;
          }
        }

        @keyframes rainbowX {
          0% { transform: translateX(var(--slider-x)); }
          100% { transform: translateX(calc(var(--slider-x) * -1)); }
        }
        @keyframes rainbowY {
          0% { 
            transform: translateY(var(--ty-edge)) rotate(25deg) rotateY(-35deg) scale(0.6) translateZ(-500px); 
            opacity: 0; 
          }
          10% { opacity: 0; }
          20% { 
            transform: translateY(var(--ty-mid)) rotate(12deg) rotateY(-20deg) scale(0.85) translateZ(-200px); 
            opacity: 1;
          }
          50% { 
            transform: translateY(0px) rotate(0deg) rotateY(0deg) scale(1) translateZ(100px); 
            opacity: 1;
          }
          80% { 
            transform: translateY(var(--ty-mid)) rotate(-12deg) rotateY(20deg) scale(0.85) translateZ(-200px); 
            opacity: 1;
          }
          90% { opacity: 0; }
          100% { 
            transform: translateY(var(--ty-edge)) rotate(-25deg) rotateY(35deg) scale(0.6) translateZ(-500px); 
            opacity: 0; 
          }
        }
        .animate-rainbowX {
          animation: rainbowX 30s linear infinite;
        }
        .animate-rainbowY {
          animation: rainbowY 30s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
