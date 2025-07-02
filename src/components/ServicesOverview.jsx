import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'

const services = [
  { title: 'Child Care', icon: 'child.jpg', desc: 'Safe, loving, and educational care for your little ones.' },
  { title: 'Elder Care', icon: 'elder.jpg', desc: 'Respectful support for daily activities and companionship.' },
  { title: 'Bedridden Care', icon: 'bed.jpg', desc: 'Compassionate assistance for immobile patients.' },
  { title: 'Housekeeping', icon: 'cleaning.jpg', desc: 'Maintaining a clean, peaceful home environment.' },
  { title: 'Cooking Support', icon: 'cookings.jpg', desc: 'Nutritious meals prepared with hygiene and care.' },
]

const ServicesOverview = () => {
  return (
     /* Services Overview */
      <section className="bg-gray-100 py-15 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-2">We provide reliable and compassionate care solutions at your doorstep.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }} 
            className="relative group bg-white p-2 shadow-md rounded-xl overflow-hidden">
              {/* Card Image */}
              <div className='relative'>
                <Image
                  src={`/images/${service.icon}`}
                  alt={service.title}
                  width={500}
                  height={250}
                  className="h-50 object-cover rounded-xl"
                />
                  {/* Button at Bottom Center */}
                <div className="absolute bottom-3 right-3">
                  <Link href={`/services#service${index}`}>
                  <button className="bg-green-600 align-middle text-center text-white text-sm font-semibold px-4 py-2 rounded-full  cursor-pointer shadow-md hover:bg-green-700 transition">
                    ➤
                  </button>
                  </Link>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-1 mt-2">
                <h3 className="text-lg font-bold text-orange-600">{service.title}</h3>
                <p className="text-gray-800 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-400 transition">
              Explore Services
            </button>
          </Link>
        </div>
      </section>
  )
}

export default ServicesOverview