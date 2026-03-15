import Link from 'next/link';
import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import { LOCATIONS } from '@/data/locations';
import { SERVICES } from '@/data/services';

const SITE_URL = 'https://ssvhomecareservices.vercel.app';

export const metadata = {
  title: 'Home Care FAQ Bangalore | SSV HomeCare',
  description:
    'Answers to common home care questions in Bangalore, including pricing, caregiver hiring, and home nursing services.',
  keywords: [
    'home care faq bangalore',
    'how much does home care cost in bangalore',
    'how to hire a caregiver',
    'what services do home nurses provide',
  ],
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

const FAQ_SECTIONS = [
  {
    question: 'How much does home care cost in Bangalore?',
    answer:
      'Home care pricing depends on service type, caregiver skill level, and required daily hours. Basic support plans are lower-cost, while specialized patient care and live-in support have higher pricing.',
    bullets: [
      'Child care and housekeeping are usually priced by shift or day',
      'Patient and elder care pricing depends on medical complexity',
      'Live-in plans are usually more cost-effective for long-term needs',
      'You receive transparent pricing after requirement assessment',
    ],
  },
  {
    question: 'How to hire a caregiver?',
    answer:
      'Start with a clear care requirement, verify caregiver background, and choose an agency that provides replacement and supervision support.',
    bullets: [
      'Define your care needs and expected schedule',
      'Confirm identity and background verification process',
      'Ask for trial period and replacement policy',
      'Choose an agency with active support and follow-ups',
    ],
  },
  {
    question: 'What services do home nurses provide?',
    answer:
      'Home nursing and patient support services typically include hygiene care, medication support, post-surgery assistance, vitals monitoring, and mobility support based on family instructions.',
    bullets: [
      'Bedridden and post-operative assistance at home',
      'Vital checks and routine care support',
      'Catheter, diaper, and hygiene management support',
      'Coordination support for hospital follow-up routines',
    ],
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_SECTIONS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${item.answer} ${item.bullets.join('. ')}.`,
    },
  })),
};

export default function FAQPage() {
  const popularServices = SERVICES.slice(0, 4);
  const popularLocations = LOCATIONS.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Home Care <span className="text-orange-600">Frequently Asked Questions</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Practical answers for families comparing caregivers, pricing, and service quality in Bangalore.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-6">
        {FAQ_SECTIONS.map((item) => (
          <article
            key={item.question}
            className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-3 flex items-start gap-2">
              <HelpCircle className="text-orange-600 mt-1 shrink-0" />
              <span>{item.question}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{item.answer}</p>
            <ul className="space-y-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="text-slate-700 text-sm leading-relaxed">
                  - {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-14 grid lg:grid-cols-2 gap-6">
        <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 mb-4">Explore Services</h2>
          <div className="flex flex-wrap gap-2">
            {popularServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 hover:bg-blue-100 transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </article>

        <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 mb-4">Popular Location Pages</h2>
          <div className="flex flex-wrap gap-2">
            {popularLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/elder-care-in-${location.slug}`}
                className="text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 hover:bg-emerald-100 transition-colors"
              >
                Elder Care in {location.name}
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-14">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-600 rounded-full blur-[80px] opacity-20" />

          <h2 className="text-3xl font-bold mb-4 relative z-10">Still have questions?</h2>
          <p className="text-slate-300 mb-8 max-w-md mx-auto relative z-10">
            Talk to our support team for a custom care recommendation and plan.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            <a
              href="tel:+919381952242"
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all"
            >
              <Phone className="mx-auto mb-3 text-orange-500" />
              <p className="font-bold">Call Us</p>
              <p className="text-xs text-slate-500">24/7 Helpline</p>
            </a>
            <a
              href="https://wa.me/919381952242"
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all"
            >
              <MessageCircle className="mx-auto mb-3 text-emerald-500" />
              <p className="font-bold">WhatsApp</p>
              <p className="text-xs text-slate-500">Instant Chat</p>
            </a>
            <a
              href="mailto:care@siddivinayakahomecare.in"
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition-all"
            >
              <Mail className="mx-auto mb-3 text-sky-500" />
              <p className="font-bold">Email</p>
              <p className="text-xs text-slate-500">Official Support</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
