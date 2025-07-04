// app/about/page.js
import Founder from "./sections/Founder";
import Values from "./sections/Values";
import Credentials from "./sections/Credentials";
import CTA from "./sections/CTA";

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
  "@type": "Organization",
  name: "Sri Siddhi Vinayaka Home Care Services",
  url: "https://ssvhomecareservices.vercel.app",
  logo: "https://ssvhomecareservices.vercel.app/images/logo.png",
  description:
    "Compassionate and trusted home care services since 2013 in Bangalore, India.",
  foundingDate: "2013",
  founder: {
    "@type": "Person",
    name: "Addagalla Ganapathi Rao",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "India",
  },
  sameAs: [
    // add real social links
    "https://www.facebook.com/your-page",
    "https://www.instagram.com/your-page",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD for Organization (server rendered) */}
      <script
        type="application/ld+json"
        // Next.js allows server components to return script tags
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-800">
        {/* Hero / Founder Section */}
        <section className="min-h-screen px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
          <Founder />
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Founded in 2013 by Mr. Addagalla Ganapathi Rao (B.Com), Sri Siddi Vinayaka Home
              Care Services was born from a deep desire to improve the quality of life for
              families in need of compassionate, professional in-home care.
            </p>

            <p>
              What began with a small team and a big heart has grown into a trusted name in home
              care, known for commitment, trust, and family values.
            </p>

            <p>
              Our certified caregivers are handpicked and trained to deliver services that not only
              meet but exceed expectations.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 px-5 bg-white">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">We live by principles that reflect compassion, integrity, and care.</p>
          </div>

          <Values />
        </section>

        {/* Credentials */}
        <section className="py-20 bg-white">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Credentials</h2>
            <p className="text-gray-600">Certified, trained, and committed to excellence in home care</p>
          </div>

          <Credentials />
        </section>

        {/* CTA */}
        <CTA />
      </main>
    </>
  );
}
