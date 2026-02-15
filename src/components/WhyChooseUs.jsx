'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Star, ShieldCheck, Heart } from 'lucide-react'

const whyUs = [
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: 'Experienced & Verified',
    description:
      'Our caregivers undergo rigorous background checks and continuous training to ensure high-quality professional support.',
    accent: 'bg-orange-50',
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: '10+ Years of Trust',
    description:
      'Serving families in Bangalore and surrounding regions since 2013 with an unwavering commitment to quality.',
    accent: 'bg-yellow-50',
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: '24/7 Availability',
    description:
      'Medical emergencies don’t follow a schedule. Our care coordinators are available around the clock to support you.',
    accent: 'bg-blue-50',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: 'Safe & Secure',
    description:
      'Your family’s safety is our priority. We maintain strict safety protocols and regular home-visit checkups.',
    accent: 'bg-green-50',
  },
]

const WhyUsSection = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Content: Text & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
              <Heart size={16} className="fill-current" /> Why Families Choose Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.15]">
              Compassionate Care <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Tailored for You
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Choosing a caregiver is a major life decision. We simplify it by providing 
              screened, professional, and empathetic staff who treat your loved ones like their own family.
            </p>

            {/* Quick Stats Mini-Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <div className="text-3xl font-bold text-slate-900">1000+</div>
                <p className="text-sm text-slate-500">Families Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <p className="text-sm text-slate-500">Support Line</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Feature Cards */}
          <div className="lg:w-7/12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyUs.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection