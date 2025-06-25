'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showBottomBar, setShowBottomBar] = useState(true);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => pathname === path;

  // Scroll direction detection (hide/show nav)
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY) {
        setShowNavbar(false);
        setShowBottomBar(false);
      } else {
        setShowNavbar(true);
        setShowBottomBar(true);
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click and lock scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-cta rounded-full flex items-center justify-center">
                <Image src="/logo.png" alt='logo' width={250} height={200}/>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-care-blue-600 ${
                    isActive(item.href)
                      ? 'text-care-blue-600 border-b-2 border-care-blue-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-2 text-blue-400 hover:scale-105 animate-pulse transition-all"
              >
                <Phone size={18} />
                <span className="font-bold">+91 </span>
              </a>
              <Link href='/join-us'>
                <button className="bg-orange-200 text-orange-600 animate-pulse font-bold px-3 py-2 rounded-md text-sm hover:scale-105 cursor-pointer transition-all">
                  Join Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu and Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Blurred background overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"></div>

          {/* Mobile menu (slides from right) */}
          <div
            ref={menuRef}
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-6 transition-transform duration-300"
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium border-b-1 transition-colors hover:text-blue-400 ${
                    isActive(item.href)
                      ? 'text-blue-500 bg-care-blue-50 rounded-md px-2 py-1'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Bottom CTA Bar */}
      <div
        className={`lg:hidden fixed bottom-0 z-40 w-full bg-white border-t border-gray-200 shadow-md px-4 py-3 flex justify-around items-center transition-transform duration-300 ${
          showBottomBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href="tel:+919876543210"
          className="text-blue-400"
        >
          <Phone size={30} />
        </a>
        <Link href='/join-us'>
          <button className="bg-gradient-to-tl text-blue-400 border-1 px-4 py-2 rounded-xl">
            Join Us
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
