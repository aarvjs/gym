import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-4xl font-black tracking-tighter uppercase italic inline-block">
              Fit<span className="text-red-600">Core</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering you to reach your ultimate fitness goals with state-of-the-art equipment, expert elite trainers, and a supportive, unstoppable community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 px-3 py-1 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-all duration-300">FB</a>
              <a href="#" className="bg-white/5 px-3 py-1 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-all duration-300">TW</a>
              <a href="#" className="bg-white/5 px-3 py-1 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-all duration-300">IG</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-1/2 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium">Classes & Services</Link></li>
              <li><Link href="/trainers" className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium">Expert Trainers</Link></li>
              <li><Link href="/membership" className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium">Pricing Plans</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-red-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium">Our Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-[-8px] left-0 w-1/2 h-1 bg-red-600"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-red-600 mt-0.5 flex-shrink-0" />
                <span>123 Muscle Street, Fitness City, FC 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-red-600 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-red-600 flex-shrink-0" />
                <span>info@fitcoregym.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-[-8px] left-0 w-1/2 h-1 bg-red-600"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive fitness tips, workout routines, and special offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
                required
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-sm transition-colors text-sm uppercase tracking-wider">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col text-xs text-gray-500 font-medium tracking-wide">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} FITCORE GYM. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
              <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
            </div>
          </div>
          <p className="mt-6 md:mt-8 text-center w-full opacity-70 hover:opacity-100 transition-opacity">
            Website designed and developed by{" "}
            <a href="https://acubetech.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors font-bold tracking-widest">
              A Cube Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
