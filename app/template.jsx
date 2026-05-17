"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only animate if the element exists
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="opacity-0">
      {children}
    </div>
  );
}
