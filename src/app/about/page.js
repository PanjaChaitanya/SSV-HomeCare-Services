// src/app/about/page.js
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export const metadata = {
  title: "About Us | Sri Siddi Vinayaka Home Care",
  description: "Learn about our heartfelt mission, values, and dedicated caregivers.",
  alternates: {
    canonical: "https://yourdomain.com/about",
  },
  openGraph: {
    title: "About Us | Sri Siddi Vinayaka Home Care",
    description: "Our story, our mission, and our dedicated team who care like family.",
    url: "https://yourdomain.com/about",
  },
};


export default function AboutPage() {
  return (
    <>

      {/* Our Story */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Caring from the Heart</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          Sri Siddi Vinayaka Home Care Services was founded with a heartfelt mission: to provide
          professional, compassionate, and affordable care to those who need it most—right at home.
          Our journey began with a simple belief: **every person deserves dignity, comfort, and love.**
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To enhance the quality of life for individuals and families by delivering reliable,
              personalized home care services with respect and empathy.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To become the most trusted name in home care services by creating a warm, safe,
              and supportive environment for every individual we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Meet Our Dedicated Caregivers</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Caregiver 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src="/team/caregiver1.jpg"
              alt="Caregiver Maya"
              width={120}
              height={120}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold text-blue-700">Maya</h3>
            <p className="text-gray-600 text-sm">Child & Elder Care Specialist</p>
          </div>

          {/* Caregiver 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src="/team/caregiver2.jpg"
              alt="Caregiver Ramesh"
              width={120}
              height={120}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold text-blue-700">Ramesh</h3>
            <p className="text-gray-600 text-sm">Bedridden & Medical Assistance</p>
          </div>

          {/* Caregiver 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src="/team/caregiver3.jpg"
              alt="Caregiver Sita"
              width={120}
              height={120}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold text-blue-700">Sita</h3>
            <p className="text-gray-600 text-sm">Cooking & Housekeeping Support</p>
          </div>

        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-800">Our Commitment to You</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          At Sri Siddi Vinayaka Home Care, we treat your family like our own. With trained caregivers, transparent communication,
          and heartfelt service, we are committed to making your home a place of healing, comfort, and happiness.
        </p>
      </section>
    </>
  )
}
