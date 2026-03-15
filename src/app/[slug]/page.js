import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { LOCATIONS, getLocationBySlug } from '@/data/locations';
import { SERVICES, getServiceById } from '@/data/services';

const SITE_URL = 'https://ssvhomecareservices.vercel.app';

function toKeywordText(text) {
  return text.toLowerCase().replace(/&/g, 'and');
}

function parseServiceLocationSlug(slugValue) {
  if (typeof slugValue !== 'string') {
    return null;
  }

  const marker = '-in-';
  const markerIndex = slugValue.lastIndexOf(marker);

  if (markerIndex === -1) {
    return null;
  }

  const serviceId = slugValue.slice(0, markerIndex);
  const locationSlug = slugValue.slice(markerIndex + marker.length);

  if (!serviceId || !locationSlug) {
    return null;
  }

  return { serviceId, locationSlug };
}

function buildLocationServiceSchema(service, location) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${service.title} in ${location.name}`,
        description: `${service.description} Available in ${location.name}.`,
        serviceType: service.title,
        provider: {
          '@type': 'Organization',
          name: 'Sri Siddhi Vinayaka Home Care Services',
          url: SITE_URL,
        },
        areaServed: {
          '@type': 'City',
          name: location.name,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: `${faq.q} (${location.name})`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${faq.a} This service is available in ${location.name}.`,
          },
        })),
      },
    ],
  };
}

export function generateStaticParams() {
  return SERVICES.flatMap((service) =>
    LOCATIONS.map((location) => ({
      slug: `${service.id}-in-${location.slug}`,
    })),
  );
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const parsed = parseServiceLocationSlug(resolvedParams.slug);

  if (!parsed) {
    return {
      title: 'Page Not Found | SSV HomeCare',
      robots: { index: false, follow: false },
    };
  }

  const service = getServiceById(parsed.serviceId);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!service || !location) {
    return {
      title: 'Page Not Found | SSV HomeCare',
      robots: { index: false, follow: false },
    };
  }

  const serviceText = toKeywordText(service.title);
  const locationText = location.name.toLowerCase();
  const pagePath = `/${resolvedParams.slug}`;

  return {
    title: `${service.title} in ${location.name} | SSV HomeCare`,
    description: `Professional ${serviceText} services in ${location.name}. Verified caregivers available 24/7 for families who need trusted home support.`,
    keywords: [
      `${serviceText} ${locationText}`,
      `${serviceText} services ${locationText}`,
      `${serviceText} near me ${locationText}`,
      `home care services ${locationText}`,
    ],
    alternates: {
      canonical: `${SITE_URL}${pagePath}`,
    },
    openGraph: {
      title: `${service.title} in ${location.name} | SSV HomeCare`,
      description: `Trusted ${serviceText} by verified caregivers in ${location.name}.`,
      url: `${SITE_URL}${pagePath}`,
      images: [
        {
          url: service.image.startsWith('http') ? service.image : `${SITE_URL}${service.image}`,
          alt: `${service.imageAlt} in ${location.name}`,
        },
      ],
    },
  };
}

export default async function ServiceLocationPage({ params }) {
  const resolvedParams = await params;
  const parsed = parseServiceLocationSlug(resolvedParams.slug);

  if (!parsed) {
    notFound();
  }

  const service = getServiceById(parsed.serviceId);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!service || !location) {
    notFound();
  }

  const schema = buildLocationServiceSchema(service, location);
  const relatedServices = SERVICES.filter((item) => item.id !== service.id).slice(0, 3);
  const relatedLocations = LOCATIONS.filter((item) => item.slug !== location.slug).slice(0, 5);

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
            Local Landing Page
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-5 mb-4">
            {service.title} in {location.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Looking for trusted {toKeywordText(service.title)} in {location.name}? SSV HomeCare provides
            verified professionals with flexible schedules and compassionate support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              <Phone size={18} />
              Call +91 98765 43210
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 px-6 py-3 rounded-lg font-bold transition-all"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src={service.image}
              alt={`${service.imageAlt} in ${location.name}`}
              width={900}
              height={680}
              className="w-full h-[320px] lg:h-[460px] object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">
              {service.title} coverage in {location.name}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <Check size={16} className="text-green-600 mt-1" />
                <span>Verified caregivers available in and around {location.name}</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <Check size={16} className="text-green-600 mt-1" />
                <span>Custom plans for hourly, full-day, and live-in requirements</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <Check size={16} className="text-green-600 mt-1" />
                <span>Quick placement with support team follow-ups</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <Check size={16} className="text-green-600 mt-1" />
                <span>Flexible replacements and quality supervision</span>
              </li>
            </ul>
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
            <p className="text-gray-700 leading-relaxed">
              {service.sections.whatIs} In {location.name}, this service helps families maintain comfort and
              continuity at home.
            </p>
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
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {faq.a} We currently support this in {location.name}.
                  </p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Locations</h2>
            <div className="flex flex-wrap gap-2">
              {relatedLocations.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${service.id}-in-${item.slug}`}
                  className="text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 hover:bg-teal-100 transition-colors"
                >
                  {service.title} in {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
