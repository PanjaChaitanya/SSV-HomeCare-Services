'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Star } from 'lucide-react'

const whyUs = [
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: 'Experienced & Verified',
    description:
      'Our caregivers are verified, trained, and dedicated to providing compassionate, professional support.',
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: '10+ Years of Trust',
    description:
      'Over a decade of reliable service and thousands of satisfied families who trust our quality care.',
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: '24/7 Availability',
    description:
      'We&apos;re always here for you, offering around-the-clock support and quick response to your needs.',
  },
]

const WhyUsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* background accents */}
      <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-orange-200 blur-[120px] rounded-full opacity-30"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-200 blur-[120px] rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent mb-6 leading-snug">
            Why Choose <br /> Our Home Care Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We believe care should be personal, professional, and compassionate.
            Our dedicated caregivers ensure your loved ones are in safe, reliable hands — 24 hours a day, 7 days a week.
          </p>
          {/* <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
            Learn More
          </button> */}
        </motion.div>

        {/* Right Cards Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {whyUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 mx-auto sm:mx-0">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center sm:text-left group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center sm:text-left">
                {item.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/0 via-transparent to-blue-100/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUsSection
