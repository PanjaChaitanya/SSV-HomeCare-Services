// src/app/services/page.js
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

// app/services/page.js

export const metadata = {
  title: "Our Services | Sri Siddi Vinayaka Home Care",
  description:
    "Explore our trusted in-home care services – from childcare to elderly support, patient care, housekeeping, and cooking assistance.",
  alternates: {
    canonical: "https://yourdomain.com/services",
  },
  openGraph: {
    title: "Services | Sri Siddi Vinayaka Home Care",
    description:
      "Tailored care solutions including elder care, child care, bedridden patient care, and household help.",
    url: "https://yourdomain.com/services",
  },
}


export default function ServicesPage() {
  return (
    <>
      
      <section className="bg-blue-50 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Tailored Care Services to Meet Your Needs</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
          We provide holistic, personalized care services that bring peace of mind to families and comfort to those who need it.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <Image src="/icons/child.png" alt="Child Care" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Child Care</h3>
            <p className="text-gray-600 mt-2">Safe, nurturing and educational support from experienced caregivers for your child’s growth.</p>
            <Link href="/contact">
              <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Service</button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <Image src="/icons/elder.png" alt="Elder Care" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Elder Care</h3>
            <p className="text-gray-600 mt-2">Medication reminders, companionship, and mobility help for your aging loved ones.</p>
            <Link href="/contact">
              <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Service</button>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <Image src="/icons/bed.png" alt="Bedridden Care" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Bedridden Care</h3>
            <p className="text-gray-600 mt-2">24/7 hygiene care, turning support, and feeding assistance for immobile patients.</p>
            <Link href="/contact">
              <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Service</button>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <Image src="/icons/cleaning.png" alt="Housekeeping" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Housekeeping</h3>
            <p className="text-gray-600 mt-2">Regular cleaning, laundry, and help with daily chores to keep your home peaceful.</p>
            <Link href="/contact">
              <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Service</button>
            </Link>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <Image src="/icons/cooking.png" alt="Cooking Support" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-800">Cooking Support</h3>
            <p className="text-gray-600 mt-2">We prepare healthy, hygienic meals at your home, customized to your family’s dietary needs.</p>
            <Link href="/contact">
              <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Service</button>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
