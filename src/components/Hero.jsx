'use client';
import Link from "next/link";
import Image from "next/image";
import BlurText from "./BlurText";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white pt-12 pb-10">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative z-10 space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-100 shadow-sm"
          >
            <Star size={16} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-wider">Trusted by 1000+ Families</span>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
              Providing Care with <br />
              <span className="text-orange-600 italic">Warmth & Dignity</span>
            </h1>
            
            <div className="flex justify-center lg:justify-start">
              <BlurText
                text="Sri Siddhi Vinayaka Home Care"
                delay={40}
                animateBy="words"
                direction="bottom"
                className="text-lg md:text-xl font-bold text-slate-500 uppercase tracking-tighter"
              />
            </div>

            <p className="text-slate-600 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Professional nursing, elder care, and child care services tailored to your family's needs in Bhimavaram and surrounding regions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                Book a Visit
              </button>
            </Link>
            <div className="flex items-center gap-3 px-4 py-2 border-l-2 border-orange-200">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <Image src={`/images/user-${i}.jpg`} alt="user" width={40} height={40} className="object-cover" />
                    </div>
                  ))}
               </div>
               <p className="text-xs font-bold text-slate-500">Join our happy <br/>care network</p>
            </div>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 gap-4 pt-4 max-w-sm mx-auto lg:mx-0">
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <ShieldCheck className="text-green-500" size={18} /> Verified Staff
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
              <Heart className="text-red-500" size={18} /> Compassionate
            </div>
          </div>
        </div>
        <div className="relative group">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white "
          >
            <Image
            src="/images/landing-hero.png" 
            alt="Hero Banner"
            width={400}
            height={300}
            className="rounded-2xl shadow-lg"
          />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-30 bg-white p-4 rounded-3xl shadow-2xl border border-slate-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Heart fill="currentColor" size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Emergency</p>
                <p className="text-sm font-bold text-slate-900">24/7 Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 z-30 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-50"
          >
            <div className="flex items-center gap-1 text-orange-500 mb-1">
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
            </div>
            <p className="text-sm font-bold text-slate-900">Top Rated Service</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">In Bhimavaram</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}