import Founder from "./sections/Founder";
import Values from "./sections/Values";
import Credentials from "./sections/Credentials";
import CTA from "./sections/CTA";
import { History, ShieldCheck, HeartPulse } from "lucide-react";

export const metadata = {
  title: "About Us | Sri Siddhi Vinayaka Home Care Services",
  description:
    "Trusted home care services since 2013. Learn about our founder, mission, values, certified caregivers, and compassionate services at Sri Siddhi Vinayaka Home Care Services.",
  keywords: [
    "Home care services",
    "Patient care services",
    "Elder care Bangalore",
    "Nursing care at home",
    "Sri Siddhi Vinayaka Home Care Services",
  ],
  alternates: {
    canonical: "https://ssvhomecareservices.vercel.app/about",
  },
  openGraph: {
    title: "About Us | Sri Siddhi Vinayaka Home Care Services",
    description:
      "Discover our mission, values, and over 10 years of trusted home care service excellence.",
    url: "https://ssvhomecareservices.vercel.app/about",
    type: "website",
    siteName: "Sri Siddhi Vinayaka Home Care Services",
    images: [
      {
        url: "https://ssvhomecareservices.vercel.app/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sri Siddhi Vinayaka Home Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sri Siddhi Vinayaka Home Care Services",
    description:
      "Learn about our founder, mission, values, and the trusted care we provide.",
    images: ["https://ssvhomecareservices.vercel.app/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness", // More specific than Organization for local SEO
  "name": "Sri Siddhi Vinayaka Home Care Services",
  "founder": {
    "@type": "Person",
    "name": "Addagalla Ganapathi Rao",
    "jobTitle": "Founder & Director"
  },
  "areaServed": "Bangalore",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "KA",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 00:00-23:59"
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />

      <main className="overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100 via-white to-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <Founder />
          </div>
        </section>

        {/* The Impact / Credentials Section */}
        <section className="py-12 bg-white">
          <Credentials />
        </section>

        {/* Our Story - Redesigned as a Narrative */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <History className="text-orange-600" size={32} />
              <h2 className="text-4xl font-bold text-slate-900">A Decade of Dedication</h2>
            </div>
            
            <div className="space-y-8 text-xl text-slate-700 leading-relaxed text-center">
              <p>
                Founded in <span className="font-bold text-sky-700">2013</span> by Mr. Addagalla Ganapathi Rao (B.Com), our journey began with a simple observation: families in Bangalore were struggling to find home care that combined professional medical standards with genuine human warmth.
              </p>
              <p className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500 italic">
                "We didn't just want to provide a service; we wanted to provide a surrogate family member when you couldn't be there."
              </p>
              <p>
                Over the last 10+ years, we have hand-picked and trained a workforce of caregivers who have become the backbone of home recovery and elderly support across the city.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <Values />

        <CTA />
      </main>
    </>
  );
}