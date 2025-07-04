// src/app/contact/page.js
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import {
  Phone,
  MessageSquare,
  Mail,
  Download,
  MapPin,
  ExternalLink,
  Smartphone,
} from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Sri Siddi Vinayaka Home Care',
  description:
    "Reach out to Sri Siddi Vinayaka Home Care Services. Call, WhatsApp, or use our contact form to request a callback.",
  alternates: {
    canonical: 'https://ssvhomecareservices.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us | Sri Siddi Vinayaka Home Care',
    description: 'Call, WhatsApp, or fill the form to get in touch with our team.',
    url: 'https://ssvhomecareservices.vercel.app/contact',
  },
}

export default function ContactPage() {

  return (
    <>
    
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
          <div className="rounded-2xl bg-white shadow-md p-6 sm:p-8 md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 leading-tight">
                Get in touch — we&apos;re here to help 24/7
              </h1>
              <p className="mt-3 text-gray-700 text-sm sm:text-base max-w-xl">
                Call, WhatsApp, email, or send us a message. We respond quickly
                and compassionately to all requests for home care.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/images/visiting-card.jpg"
                  download="Sri_Siddhi_Vinayaka_Home_Care_Visiting_Card.jpg"
                  className="inline-flex items-center gap-2 bg-[#f25939] hover:bg-[#d14d31] text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f25939] transition"
                  aria-label="Download visiting card"
                >
                  <Download className="w-4 h-4" />
                  Download Visiting Card
                </a>

                <a
                  href="tel:+919381952242"
                  className="inline-flex items-center gap-2 border border-transparent hover:border-blue-100 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition"
                  aria-label="Call +91 93819 52242"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919381952242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 transition"
                  aria-label="Chat on WhatsApp"
                >
                  <Smartphone className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-800">
                      Sri Siddhi Vinayaka Home Care Services
                    </div>
                    <div className="text-gray-500">Office & Enquiries</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  Open 24/7 — Emergency & scheduled care available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main content: responsive grid */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column - contact cards + form */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call & Message
                </h2>
                <p className="mt-2 text-gray-600">
                  For immediate assistance call or message us on WhatsApp.
                </p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-none bg-blue-50 rounded-md p-2">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        Phone
                      </div>
                      <a
                        href="tel:+919381952242"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        +91 93819 52242
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex-none bg-green-50 rounded-md p-2">
                      <Smartphone className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        WhatsApp
                      </div>
                      <a
                        href="https://wa.me/919381952242"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1"
                      >
                        Chat on WhatsApp <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="flex-none bg-yellow-50 rounded-md p-2">
                      <Mail className="w-5 h-5 text-yellow-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">
                        Email
                      </div>
                      <a
                        href="mailto:care@siddivinayakahomecare.in"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        care@siddivinayakahomecare.in
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Small map preview for mobile (if user prefers quick glance) */}
              <div className="lg:hidden bg-white rounded-2xl shadow-sm p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Office Location
                </h4>
                <div className="rounded-md overflow-hidden">
                  <iframe
                    title="Sri Siddhi Vinayaka Home Care - map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.557719669604!2d81.53317847413894!3d16.548411426433805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d3004350d2a1%3A0x318786da5b3f8772!2sSRI%20SIDDHI%20VINAYAKA%20HOME%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1750308618645!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Tap the map for full directions.
                </p>
              </div>
            </aside>

            {/* Right column - large map + directions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hidden lg:block bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Office Location & Directions
                </h3>

                <div className="rounded-xl overflow-hidden shadow-inner">
                  {/* Responsive aspect ratio wrapper */}
                  <div className="w-full aspect-[16/9]">
                    <iframe
                      title="Sri Siddhi Vinayaka Home Care - large map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.557719669604!2d81.53317847413894!3d16.548411426433805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d3004350d2a1%3A0x318786da5b3f8772!2sSRI%20SIDDHI%20VINAYAKA%20HOME%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1750308618645!5m2!1sen!2sin"
                      className="w-full h-full block"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/dir/?api=1&destination=SRI+SIDDHI+VINAYAKA+HOME+CARE+SERVICES"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <Link href="/contact" className="text-sm text-gray-600 underline">
                    More contact options
                  </Link>
                </div>
              </div>

              {/* Accessibility / info card */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h4 className="text-md font-semibold text-blue-800">Visitor info</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  Please call ahead before visiting. Our team will confirm availability and prepare a care plan discussion. If this is an emergency, call local emergency services first.
                </p>

                <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-medium text-gray-700">Hours</dt>
                    <dd className="text-gray-600">Open 24/7</dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-700">Email</dt>
                    <dd className="text-gray-600">care@siddivinayakahomecare.in</dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-700">Phone</dt>
                    <dd className="text-gray-600">+91 93819 52242</dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-700">Service area</dt>
                    <dd className="text-gray-600">Local & nearby towns — call to confirm availability</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
