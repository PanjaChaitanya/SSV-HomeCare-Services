// src/app/page.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero';
import About from '@/components/About';
import { motion } from 'framer-motion';
import WhyUsSection from '@/components/WhyChooseUs';

const services = [
  { title: 'Child Care', icon: 'child.jpg', desc: 'Safe, loving, and educational care for your little ones.' },
  { title: 'Elder Care', icon: 'elder.jpg', desc: 'Respectful support for daily activities and companionship.' },
  { title: 'Bedridden Care', icon: 'bed.jpg', desc: 'Compassionate assistance for immobile patients.' },
  { title: 'Housekeeping', icon: 'cleaning.jpg', desc: 'Maintaining a clean, peaceful home environment.' },
  { title: 'Cooking Support', icon: 'cookings.jpg', desc: 'Nutritious meals prepared with hygiene and care.' },
]

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="px-4 text-center Hero-Section">
       <Hero/>
      </section>

      {/* About Us Preview */}
      <section className="bg-orange-50 py-16 px-6">
        <About/>
      </section>

      {/* Why Choose Us */}
      <section className="py-15 bg-gradient-to-b from-green-50 to-gray-200 px-6 transition-all ease-in-out">
        <WhyUsSection/>
      </section>

      {/* Services Overview */}
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

      {/* Testimonials
      <section className="py-16 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">What Our Clients Say</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="text-lg italic text-gray-700">
            “Sri Siddi Vinayaka made my grandmother feel like family. Their care changed our life.”
            <span className="block mt-2 font-semibold">— Anjali R.</span>
          </blockquote>
          <blockquote className="text-lg italic text-gray-700">
            “Highly professional and always on time. Their caregivers are a blessing.”
            <span className="block mt-2 font-semibold">— Rajeev Kumar</span>
          </blockquote>
        </div>
      </section> */}


      {/* Contact CTA */}
      <section className="bg-orange-100 text-black py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold">Need Help? Call us now at <a href="tel:+919000000000" className="underline">+91 90000 00000</a></h2>
        <p className="mt-2">We&apos;re just one call away from caring for your family.</p>
      </section>
    </main>
  )
}
