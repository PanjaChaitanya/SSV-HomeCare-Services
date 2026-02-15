'use client';
import Link from 'next/link'
import { Phone, Clock, Users, Mail, Instagram, MessageCircle, Facebook, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Brand & Mission */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-900/20">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Sri Siddhi Vinayaka</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold">Home Care Services</p>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-md text-lg">
              Providing trusted, compassionate home care services since 2013. 
              Our certified caregivers ensure your loved ones receive the dignity and professional support they deserve.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "https://facebook.com/yourpage", color: "hover:bg-blue-600" },
                { icon: <MessageCircle size={20} />, href: "https://wa.me/919381952242", color: "hover:bg-emerald-500" },
                { icon: <Instagram size={20} />, href: "https://instagram.com/yourprofile", color: "hover:bg-pink-500" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services Grid */}
          <div className="grid grid-cols-2 gap-8 col-span-1 lg:col-span-2">
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Explore</h4>
              <ul className="space-y-4 text-slate-400">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover:text-orange-400 active:text-orange-400 transition-colors flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 group-active:w-2 h-[1px] bg-orange-400 mr-0 group-hover:mr-2 group-active:mr-2 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Specialties</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                {['Elderly Care', 'Patient Support', 'Child Care', 'Housekeeping', 'Nursing Care'].map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <Heart size={12} className="text-orange-500/50" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-slate-800/50 rounded-3xl border border-slate-700/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Call 24/7</p>
              <p className="font-bold">+91 93819 52242</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Location</p>
              <p className="font-bold text-sm">Bhimavaram, Andhra Pradesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Response Time</p>
              <p className="font-bold text-sm">Within 15 Minutes</p>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© {currentYear} Sri Siddhi Vinayaka Home Care Services. Designed with care.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}