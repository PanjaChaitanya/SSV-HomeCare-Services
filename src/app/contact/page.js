// src/app/contact/page.js
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { Phone } from 'lucide-react';

export const metadata = {
  title: "Contact Us | Sri Siddi Vinayaka Home Care",
  description: "Reach out to Sri Siddi Vinayaka Home Care Services. Call, WhatsApp, or use our contact form to request a callback.",
  alternates: {
    canonical: "https://ssvhomecareservices.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Us | Sri Siddi Vinayaka Home Care",
    description: "Call, WhatsApp, or fill the form to get in touch with our team.",
    url: "https://ssvhomecareservices.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-orange-600">Get in Touch With Us</h1>
        <p className="my-4 text-gray-700 max-w-xl mx-auto">
          We&apos;re here to help you 24/7. Feel free to reach out by phone, WhatsApp, or submit the contact form below.
        </p>
        <a
          href="/images/visiting-card.jpg"
          download="Sri_Siddhi_Vinayaka_Home_Care_Visiting_Card.jpg"
          className="bg-[#f25939] hover:bg-[#d14d31] text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200"
        >
          Download Visiting Card
        </a>
      </section>

      <section className="bg-white py-10 flex flex-wrap justify-around">
          {/* Contact Info */}
          <div className="text-gray-800 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2"><Phone size={25} className='inline'/> Phone</h2>
              <a href='tel:+919876543210' className="text-lg">+91 93819 52242</a>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-2">💬 WhatsApp</h2>
              <a
                href="https://wa.me/919381952242"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">📧 Email</h2>
              <p className="text-lg">care@siddivinayakahomecare.in</p>
            </div>
          </div>
        <div className="">
          <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Office Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.557719669604!2d81.53317847413894!3d16.548411426433805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d3004350d2a1%3A0x318786da5b3f8772!2sSRI%20SIDDHI%20VINAYAKA%20HOME%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1750308618645!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </>
  )
}
