"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Trainers", href: "/trainers" },
    { name: "Gallery", href: "/gallery" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter uppercase italic group">
              Fit<span className="text-red-600 transition-colors duration-300 group-hover:text-red-500">Core</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4 xl:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group px-1 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${pathname === link.href ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <Link
                href="/membership"
                className="bg-red-600 hover:bg-red-700 text-white px-5 xl:px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_0_0_rgba(220,38,38,0)] hover:shadow-[0_10px_20px_-10px_rgba(220,38,38,0.5)]"
              >
                Join Now
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-black border-white/10 ${isOpen ? 'max-h-screen border-b opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 ${pathname === link.href ? 'text-white pl-6 border-l-4 border-red-600 bg-white/5' : 'text-gray-400 hover:text-white hover:pl-6 hover:border-l-4 hover:border-red-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-sm text-base font-bold uppercase tracking-wider transition-all"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
