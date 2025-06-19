// src/app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="bg-blue-50 px-4 py-20 text-center">
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
      <section className="py-16 bg-white px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <Image src="/icons/caregiver.png" alt="Trained Caregivers" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Trained Caregivers</h3>
            <p className="text-gray-600 mt-2">Our staff is thoroughly trained to handle every situation with love and expertise.</p>
          </div>
          <div className="text-center">
            <Image src="/icons/clock.png" alt="24/7 Availability" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">24/7 Availability</h3>
            <p className="text-gray-600 mt-2">We&apos;re always available — any time, any day — to support your family&apos;s needs.</p>
          </div>
          <div className="text-center">
            <Image src="/icons/plan.png" alt="Customized Plans" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Customized Care Plans</h3>
            <p className="text-gray-600 mt-2">Every family is unique — so are our flexible, tailored care plans.</p>
          </div>
        </div>
      </section>

            {/* Services Overview */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">Our Services</h2>
          <p className="text-gray-600 mt-2">We provide reliable and compassionate care solutions at your doorstep.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Child Care', icon: 'child.png', desc: 'Safe, loving, and educational care for your little ones.' },
            { title: 'Elder Care', icon: 'elder.png', desc: 'Respectful support for daily activities and companionship.' },
            { title: 'Bedridden Care', icon: 'bed.png', desc: 'Compassionate assistance for immobile patients.' },
            { title: 'Cooking Support', icon: 'cooking.png', desc: 'Nutritious meals prepared with hygiene and care.' },
            { title: 'Housekeeping', icon: 'cleaning.png', desc: 'Maintaining a clean, peaceful home environment.' },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
              <Image src={`/icons/${service.icon}`} alt={service.title} width={48} height={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
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
