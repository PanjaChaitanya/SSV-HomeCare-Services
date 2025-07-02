// src/app/page.js
'use client'
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyUsSection from '@/components/WhyChooseUs';
import ServicesOverview from '@/components/ServicesOverview';


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
      <section className="py-15 transition-all ease-in-out">
        <WhyUsSection/>
      </section>

      <section>
        <ServicesOverview/>
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
        <h2 className="text-2xl font-semibold">Need Help? Call us now at <a href="tel:+919381952242" className="underline">+91 93819 52242</a></h2>
        <p className="mt-2">We&apos;re just one call away from caring for your family.</p>
      </section>
    </main>
  )
}
