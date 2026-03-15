import Link from 'next/link';
import Image from 'next/image';
import { Users, Clock, Phone, Check, Star, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { SERVICES } from '@/data/services';

// --- SEO METADATA & CONFIGURATION ---

export const metadata = {
  title: "Best Home Care Services | Child, Elder & Patient Care",
  description: "Professional in-home care services in Bangalore. Verified caregivers for elderly care, bedridden patients, babysitting, and housekeeping. 24/7 support available.",
  keywords: ["home care services bangalore", "elderly care at home", "patient care services", "babysitting bangalore", "housekeeping services", "bedridden patient care"],
  alternates: {
    canonical: "https://ssvhomecareservices.vercel.app/services",
  },
  openGraph: {
    title: "Trusted Home Care Services in Bangalore | SSV Care",
    description: "Compassionate care for your loved ones. Expert child care, elder support, and patient care delivered to your doorstep.",
    url: "https://ssvhomecareservices.vercel.app/services",
    siteName: "Sri Siddhi Vinayaka Home Care Services",
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: "https://ssvhomecareservices.vercel.app/images/og-services.webp", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Caregiver helping an elderly person",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const FAQS = [
  {
    q: "Are your caregivers background checked?",
    a: "Yes, 100%. Every caregiver undergoes a rigorous identity check, address verification, and criminal background screening before entering your home."
  },
  {
    q: "Do you provide services in all of Bangalore?",
    a: "We cover major areas in Bangalore including Whitefield, Indiranagar, Koramangala, Jayanagar, Electronic City, and more."
  },
  {
    q: "What if I am not satisfied with the caregiver?",
    a: "Your satisfaction is priority. We offer a free replacement guarantee within the first 48 hours if the assigned caregiver does not meet your expectations."
  }
];

// --- STRUCTURED DATA (JSON-LD) ---

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ssvhomecareservices.vercel.app/#organization",
      "name": "Sri Siddhi Vinayaka Home Care Services",
      "url": "https://ssvhomecareservices.vercel.app",
      "logo": "https://ssvhomecareservices.vercel.app/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "kn", "hi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    ...SERVICES.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": { "@id": "https://ssvhomecareservices.vercel.app/#organization" },
      "areaServed": { "@type": "City", "name": "Bangalore" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    })),
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
};

// --- COMPONENTS ---

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* HEADER HERO */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        
        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in-up">
            <Star size={14} className="fill-blue-700" />
            <span>Trusted by 1000+ Families in Bangalore</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Expert Care, Right at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Your Doorstep</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional child care, elderly support, and medical patient care tailored to your family&apos;s unique needs. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919876543210" 
              className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-1"
            >
              <Phone size={20} className="animate-pulse" />
              <span>Call +91 98765 43210</span>
            </a>
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-lg px-8 py-4 rounded-xl font-bold transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="bg-white border-y border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years Experience', val: '10+', icon: Clock },
              { label: 'Verified Staff', val: '100%', icon: ShieldCheck },
              { label: 'Happy Families', val: '1.5k+', icon: Users },
              { label: 'Locations', val: 'Bangalore', icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-3xl font-bold text-gray-900">{stat.val}</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SERVICES LIST */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don&apos;t just send staff; we send trained professionals who become a part of your extended family.</p>
          </div>

          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;

              return (
                <article 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className={`absolute -inset-4 rounded-2xl opacity-70 blur-2xl transition duration-500 group-hover:opacity-100 ${service.bg.replace('bg-', 'bg-gradient-to-br from-white to-')}`}></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={800}
                        height={600}
                        className="object-cover w-full h-[300px] lg:h-[450px] transform transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                      />
                      {/* Floating Badge */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${service.bg}`}>
                            <Clock size={20} className={service.color} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase">Availability</p>
                            <p className="text-sm font-bold text-gray-900">{service.availability}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`p-3 rounded-xl ${service.bg} ${service.color}`}>
                        <Icon size={28} />
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 min-w-[20px]">
                            <Check size={18} className="text-green-500" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 flex flex-wrap items-center gap-3">
                      <Link 
                        href="/contact" 
                        className={`inline-flex items-center gap-2 font-bold px-8 py-3 rounded-lg text-white transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg ${service.color.replace('text-', 'bg-').replace('600', '600')} hover:${service.color.replace('text-', 'bg-').replace('600', '700')}`}
                      >
                        Book {service.title}
                      </Link>
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 font-bold px-8 py-3 rounded-lg border border-gray-200 text-gray-700 hover:text-blue-700 hover:border-blue-300 transition-all"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Common questions about our home care services</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden open:bg-blue-50 transition-colors duration-300">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-bold">
                  <h3 className="text-lg">{faq.q}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-gray-500" />
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700 pl-2 border-l-2 border-blue-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to give your family the best care?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. We will assess your needs and create a personalized care plan that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-10 py-4 rounded-xl font-bold transition-all shadow-xl">
              Call Now
            </a>
            <Link href="/contact" className="border-2 border-slate-600 text-white hover:bg-slate-800 text-lg px-10 py-4 rounded-xl font-bold transition-all">
              Request Callback
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

