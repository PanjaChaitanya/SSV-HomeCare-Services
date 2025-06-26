// src/app/page.js
import Image from 'next/image'
import Link from 'next/link'
import { Users, Clock, Star } from 'lucide-react';

const services = [
  { title: 'Child Care', icon: 'child.jpg', desc: 'Safe, loving, and educational care for your little ones.' },
  { title: 'Elder Care', icon: 'elder.jpg', desc: 'Respectful support for daily activities and companionship.' },
  { title: 'Bedridden Care', icon: 'bed.jpg', desc: 'Compassionate assistance for immobile patients.' },
  { title: 'Cooking Support', icon: 'cookings.jpg', desc: 'Nutritious meals prepared with hygiene and care.' },
  { title: 'Housekeeping', icon: 'cleaning.jpg', desc: 'Maintaining a clean, peaceful home environment.' },          
]
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
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center Hero-Section">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            Compassionate Home Care Services You Can Trust
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Serving your loved ones with warmth, dignity, and care
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </section>
            {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-500 px-6 transition-all ease-in-out">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {whyUs.map((value, idx) => (
            <div
              key={idx}
              className="bg-green-100 text-center rounded-xl shadow-md hover:shadow-2xl hover:bg-green-50 transform hover:-translate-y-2 transition-all duration-300 ease-linear p-8"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

            {/* Services Overview */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">Our Services</h2>
          <p className="text-gray-600 mt-2">We provide reliable and compassionate care solutions at your doorstep.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="relative group bg-white p-2 shadow-md rounded-xl overflow-hidden">
              {/* Card Image */}
              <Image
                src={`/images/${service.icon}`}
                alt={service.title}
                width={500}
                height={250}
                className="h-50 object-cover rounded-xl"
              />

              {/* Gradient Overlay from Bottom to Top */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-xl pointer-events-none"></div>

              {/* Button at Bottom Center */}
              <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                <Link href='/services'>
                  <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full  cursor-pointer shadow-md hover:bg-green-700 transition">
                  Learn More
                </button>
                </Link>
              </div>

              {/* Text Content */}
              <div className="relative z-1 mt-2">
                <h3 className="text-lg font-bold text-green-700">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Services
            </button>
          </Link>
        </div>
      </section>

            {/* Testimonials */}
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
      </section>

            {/* About Us Preview */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900">About Us</h2>
          <p className="text-gray-700 mt-4">
            Sri Siddi Vinayaka Home Care Services was founded with the mission to bring compassionate,
            professional care into the homes of families across Andhra Pradesh. Whether it&apos;s a child,
            an elder, or a recovering loved one — we treat every person like our own.
          </p>
          <Link href="/about">
            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

            {/* Contact CTA */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold">Need Help? Call us now at <a href="tel:+919000000000" className="underline">+91 90000 00000</a></h2>
        <p className="mt-2">We&apos;re just one call away from caring for your family.</p>
      </section>
    </main>
  )
}
