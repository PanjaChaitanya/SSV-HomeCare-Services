'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Users, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  // Robust Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide after scrolling down more than 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle outside click and body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 z-[60] w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-500 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-110">
                <Image src="/icon.png" alt="SSV Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-extrabold text-slate-900 leading-none tracking-tight">
                  SRI SIDDHI <span className="text-orange-600">VINAYAKA</span>
                </span>
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">
                  Home Care Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    pathname === item.href
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919381952242" className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                   <Phone size={14} fill="currentColor" />
                </div>
                +91 93819 52242
              </a>
              <Link href="/join-us">
                <button className="bg-slate-900 cursor-pointer text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-slate-200">
                  Join Us
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-slate-900 transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Mobile Slide-over Menu */}
      <div className={`fixed inset-0 z-[100] transition-visibility duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="p-6 flex justify-between items-center border-b border-slate-50">
              <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-50 rounded-full text-slate-900">
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                    pathname === item.href ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && <Heart size={16} fill="currentColor" />}
                </Link>
              ))}
            </nav>

            <div className="p-6 bg-slate-50">
               <Link href="/join-us" onClick={() => setIsMenuOpen(false)} className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white p-4 rounded-2xl font-bold mb-4 shadow-lg shadow-orange-200">
                  <Users size={20} /> Join Our Care Team
               </Link>
               <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-tighter">Available 24/7 for support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Mobile Action Bar (Bottom) */}
      <div
        className={`lg:hidden fixed bottom-6 left-6 right-6 z-[50] transition-all duration-500 transform ${
          showNavbar ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="bg-slate-900 rounded-2xl shadow-2xl shadow-slate-900/40 p-2 flex items-center justify-between border border-white/10 backdrop-blur-lg">
          <a href="tel:+919381952242" className="flex items-center gap-3 px-4 py-3 text-white">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center animate-bounce">
               <Phone size={20} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Call Now</span>
              <span className="text-sm font-bold">93819 52242</span>
            </div>
          </a>
          <Link href="/join-us" className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-500 transition-colors">
            JOIN US
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;