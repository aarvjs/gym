"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

export default function MembershipPage() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const faqRef = useRef(null);

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

      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050505] min-h-[100svh] pt-24 pb-24 overflow-hidden">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h1 className="text-red-600 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">Join The Club</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter">Membership Plans</h2>
      </div>

      <div ref={gridRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="pricing-card bg-zinc-950 p-8 border border-white/5 relative flex flex-col rounded-sm hover:border-white/20 transition-colors">
            <h4 className="text-2xl font-bold uppercase mb-2">Basic</h4>
            <p className="text-gray-400 text-sm mb-6">Perfect for beginners</p>
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-black tracking-tighter">$29</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-sm"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Access to gym equipment</li>
              <li className="flex items-center text-sm"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Locker room access</li>
              <li className="flex items-center text-sm"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> 1 Group class per week</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={18} className="mr-3 shrink-0" /> Personal trainer</li>
              <li className="flex items-center text-sm text-gray-600"><CheckCircle2 size={18} className="mr-3 shrink-0" /> Recovery zone access</li>
            </ul>
            <button className="block w-full py-4 border border-white/20 text-center uppercase font-bold text-sm hover:bg-white hover:text-black transition-colors mt-auto rounded-sm">
              Select Plan
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="pricing-card bg-red-600 p-8 relative transform md:-translate-y-6 shadow-[0_20px_50px_-15px_rgba(220,38,38,0.4)] flex flex-col rounded-sm">
            <div className="absolute top-0 right-0 bg-white text-black text-[10px] md:text-xs font-bold uppercase px-3 py-1.5 m-4 rounded-full shadow-lg">Most Popular</div>
            <h4 className="text-2xl font-bold uppercase mb-2 text-white">Pro</h4>
            <p className="text-white/80 text-sm mb-6">For serious athletes</p>
            <div className="mb-8 text-white">
              <span className="text-5xl md:text-6xl font-black tracking-tighter">$59</span>
              <span className="text-white/70">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> Access to gym equipment</li>
              <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> Locker room access</li>
              <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> Unlimited group classes</li>
              <li className="flex items-center text-sm text-white"><CheckCircle2 size={18} className="text-white mr-3 shrink-0" /> Guest passes (2/mo)</li>
              <li className="flex items-center text-sm text-white/50"><CheckCircle2 size={18} className="mr-3 shrink-0" /> Personal trainer</li>
            </ul>
            <button className="block w-full py-4 bg-white text-black text-center uppercase font-bold text-sm hover:bg-gray-100 transition-colors mt-auto rounded-sm hover:-translate-y-1">
              Select Plan
            </button>
          </div>

          {/* Elite Plan */}
          <div className="pricing-card bg-zinc-950 p-8 border border-white/5 relative flex flex-col rounded-sm hover:border-white/20 transition-colors">
            <h4 className="text-2xl font-bold uppercase mb-2">Elite</h4>
            <p className="text-gray-400 text-sm mb-6">The ultimate experience</p>
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-black tracking-tighter">$99</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Access to gym equipment</li>
              <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Locker room access</li>
              <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Unlimited group classes</li>
              <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> 4 Personal sessions/mo</li>
              <li className="flex items-center text-sm text-gray-300"><CheckCircle2 size={18} className="text-red-600 mr-3 shrink-0" /> Recovery zone access</li>
            </ul>
            <button className="block w-full py-4 border border-white/20 text-center uppercase font-bold text-sm hover:bg-white hover:text-black transition-colors mt-auto rounded-sm">
              Select Plan
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="mt-20 md:mt-32 max-w-3xl mx-auto px-4 md:px-0">
          <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-8 md:mb-10 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {[
              { q: "Is there a joining fee?", a: "No, we believe in transparent pricing. The monthly fee is all you pay." },
              { q: "Can I cancel anytime?", a: "Yes, our memberships are month-to-month. We require a 30-day notice for cancellations." },
              { q: "Do you offer a free trial?", a: "Absolutely. First-time visitors can try our facility free for 3 days." }
            ].map((faq, i) => (
              <div key={i} className="faq-item border-b border-white/10 pb-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
