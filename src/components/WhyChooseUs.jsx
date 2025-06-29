'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Star } from 'lucide-react';

const whyUs =[
    {
      icon: <Users className="w-10 h-10 text-red-500" />, title: 'Experienced & Verified',
      description: 'All our staff are background-checked and Experienced'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />, title: 'Family',
      description: 'We consider ourselves part of your extended family'
    },
    {
      icon: <Star className="w-10 h-10 text-green-500" />, title: '10+ Years Experience',
      description: 'Trusted by hundreds of families with over a decade of reliable service.'
    },
    {
      icon: <Clock className="w-10 h-10 text-orange-500" />, title: '24/7 Availability',
      description: 'Available 24/7 with unwavering commitment to quality care'
    }
]

const WhyUsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-orange-500 mb-8">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animateClass">
        {whyUs.map((value, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white text-center rounded-xl shadow-md hover:shadow-2xl hover:bg-green-50 transform hover:-translate-y-2 transition-all duration-300 ease-linear p-8"
          >
            <div className="flex justify-center mb-4 text-4xl text-lime-700">
              {value.icon}
            </div>
            <h3 className="font-semibold text-xl mb-2 text-gray-900">{value.title}</h3>
            <p className="text-sm text-gray-700">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WhyUsSection
