'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
const services = [
  { title: 'Child Care', icon: 'child.jpg', desc: 'Safe, loving, and educational care for your little ones.' },
  { title: 'Elder Care', icon: 'elder.jpg', desc: 'Respectful support for daily activities and companionship.' },
  { title: 'Bedridden Care', icon: 'bed.jpg', desc: 'Compassionate assistance for immobile patients.' },
  { title: 'Housekeeping', icon: 'cleaning.jpg', desc: 'Maintaining a clean, peaceful home environment.' },
  { title: 'Cooking Support', icon: 'cookings.jpg', desc: 'Nutritious meals prepared with hygiene and care.' },
]

const ServicesOverview = () => {
  return (
    <section className="relative py-16 px-5 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      {/* Soft glows */}
      <div className="absolute -top-20 left-0 w-[300px] h-[300px] bg-orange-200 blur-[120px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200 blur-[120px] opacity-30 rounded-full"></div>

      {/* Mobile-first layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center  gap-20 relative z-10">
          {/* Scroll hint */}
          <div className="flex items-center justify-center mb-3 text-md text-gray-500 lg:hidden">
            <span className="animate-pulse text-lime-600">Swipe to explore</span>
            <ChevronRight className="w-4 h-4 ml-1 text-orange-500 animate-pulse" />
          </div>
        {/* Left: Horizontal Scroll Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide w-full lg:w-1/2"
        >
           
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[300px] bg-white border border-gray-100 rounded-xl shadow-md snap-center flex-shrink-0 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-46 overflow-hidden rounded-t-xl">
                <Image
                  src={`/images/${service.icon}`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-orange-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {service.desc}
                </p>

                <Link href={`/services#service${index}`}>
                  <button className="text-sm font-medium text-white bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-2 rounded-full shadow hover:shadow-md transition-all">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-snug">
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Home Care Services</span> That <br />
            Truly Make a Difference
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            Every service we offer is built on trust, compassion, and dedication.
            Whether it is caring for your child, elder, or home, we ensure complete peace of mind.
          </p>
          <Link href="/services">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/40 transition-transform hover:scale-105 duration-300">
              Explore All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview
