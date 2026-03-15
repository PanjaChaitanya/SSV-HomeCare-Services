import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { SERVICES, getServiceById } from '@/data/services';
import { LOCATIONS } from '@/data/locations';

const SITE_URL = 'https://ssvhomecareservices.vercel.app';

function toKeywordText(text) {
  return text.toLowerCase().replace(/&/g, 'and');
}

function buildServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: {
          '@type': 'Organization',
          name: 'Sri Siddhi Vinayaka Home Care Services',
          url: SITE_URL,
        },
        areaServed: {
          '@type': 'City',
          name: 'Bangalore',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ service: service.id }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = getServiceById(resolvedParams.service);

  if (!service) {
    return {
      title: 'Service Not Found | SSV HomeCare',
      robots: { index: false, follow: false },
    };
  }

  const serviceText = toKeywordText(service.title);

  return {
    title: `${service.title} in Bangalore | SSV HomeCare`,
    description: `Professional ${serviceText} in Bangalore. Verified caregivers, flexible plans, and trusted home support from SSV HomeCare.`,
    keywords: [
      `${serviceText} bangalore`,
      `${serviceText} services bangalore`,
      `${serviceText} at home`,
      `home care services bangalore`,
    ],
    alternates: {
      canonical: `${SITE_URL}/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} in Bangalore | SSV HomeCare`,
      description: `Expert ${serviceText} delivered at home in Bangalore with verified caregivers and 24/7 support.`,
      url: `${SITE_URL}/services/${service.id}`,
      images: [
        {
          url: service.image.startsWith('http') ? service.image : `${SITE_URL}${service.image}`,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = getServiceById(resolvedParams.service);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((item) => service.relatedServiceIds.includes(item.id));
  const relatedLocations = LOCATIONS.slice(0, 6);
  const schema = buildServiceSchema(service);

  return (
    <main className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="pt-24 pb-14 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-sm font-semibold">
            <MapPin size={14} />
            Bangalore Service Page
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-5 mb-4">
            {service.title} in Bangalore
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              <Phone size={18} />
              Book This Service
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 px-6 py-3 rounded-lg font-bold transition-all"
            >
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={900}
              height={680}
              className="w-full h-[320px] lg:h-[460px] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Service Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={18} className="text-green-500 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
              <p className="text-xs uppercase text-gray-500 font-semibold">Availability</p>
              <p className="text-sm text-gray-800 font-bold">{service.availability}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What is this service</h2>
            <p className="text-gray-700 leading-relaxed">{service.sections.whatIs}</p>
          </article>

          <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Benefits</h2>
            <ul className="space-y-2">
              {service.sections.benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <Check size={16} className="text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who needs this service</h2>
            <ul className="space-y-2">
              {service.sections.whoNeeds.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <Check size={16} className="text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why choose SSV HomeCare</h2>
            <ul className="space-y-2">
              {service.sections.whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <ShieldCheck size={16} className="text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-14">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <summary className="cursor-pointer font-bold text-gray-900">{faq.q}</summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Explore Related Services</h2>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.id}`}
                  className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Locations</h2>
            <div className="flex flex-wrap gap-2">
              {relatedLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${service.id}-in-${location.slug}`}
                  className="text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 hover:bg-teal-100 transition-colors"
                >
                  {service.title} in {location.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
