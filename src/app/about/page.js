import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Heart, Users, Clock, CircleCheck } from 'lucide-react';

export const metadata = {
  title: 'About Us | Sri Siddi Vinayaka Home Care Services',
  description:
    'Learn about our compassionate team, values, and mission at Sri Siddi Vinayaka Home Care Services. Trusted in-home care since 2013.',
  keywords: ['Home care services', 'Elder care', 'Childcare', 'About Sri Siddi Vinayaka'],
  openGraph: {
    title: 'About Us | Sri Siddi Vinayaka Home Care Services',
    description:
      'Learn about our compassionate team, values, and mission at Sri Siddi Vinayaka Home Care Services.',
    url: 'https://yourdomain.com/about',
    type: 'website'
  },
  alternates: {
    canonical: 'https://yourdomain.com/about'
  }
};

const values = [
  {
    icon: <Heart className="w-10 h-10 text-red-500" />, title: 'Compassion',
    description: 'We treat each client with kindness, empathy, and genuine care'
  },
  {
    icon: <CircleCheck className="w-10 h-10 text-green-500" />, title: 'Trust',
    description: 'Building lasting relationships through reliability and transparency'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />, title: 'Family',
    description: 'We consider ourselves part of your extended family'
  },
  {
    icon: <Clock className="w-10 h-10 text-orange-500" />, title: 'Dedication',
    description: 'Available 24/7 with unwavering commitment to quality care'
  }
];

const team = [
  {
    name: 'Dr. Lakshmi Devi',
    role: 'Founder & Medical Director',
    experience: '15+ years in healthcare',
    image: 'L.D.',
    bio: 'Former hospital administrator with expertise in geriatric care and home healthcare management.'
  },
  {
    name: 'Nurse Meera Patel',
    role: 'Senior Care Coordinator',
    experience: '12+ years nursing',
    image: 'M.P.',
    bio: 'Registered nurse specializing in elderly care and medication management.'
  },
  {
    name: 'Ravi Sharma',
    role: 'Operations Manager',
    experience: '8+ years operations',
    image: 'R.S.',
    bio: 'Ensures seamless service delivery and maintains our high standards of care.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-800">
      {/* Hero */}
      <section className="py-16 px-6 text-center animate-slide-in">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-sky-600">Sri Siddi Vinayaka</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          For over a decade, we&apos;ve been delivering heartfelt home care that brings peace, comfort,
          and dignity to families across the region.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          Connect With Us
        </Link>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Story</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Founded in 2013 by Dr. Lakshmi Devi, Sri Siddi Vinayaka Home Care Services was born
            from a deep desire to improve the quality of life for families in need of compassionate,
            professional in-home care.
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
      <section className="py-20 bg-white animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-gray-600">
            We live by principles that reflect compassion, integrity, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-sky-50 animate-slide-in">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600">
            A committed team ensuring compassionate and professional home care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-sky-500 to-pink-400 text-white flex items-center justify-center text-xl font-bold mb-4">
                {member.image}
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sky-600 text-sm">{member.role}</p>
              <p className="text-sm text-gray-500">{member.experience}</p>
              <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Experience */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Credentials</h2>
          <p className="text-gray-600">
            Certified, trained, and committed to excellence in home care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-sky-700 mb-2">10+</div>
            <h3 className="font-semibold text-lg mb-1">Years of Experience</h3>
            <p className="text-sm text-gray-600">Serving families with dedication since 2013</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
            <h3 className="font-semibold text-lg mb-1">Certified Caregivers</h3>
            <p className="text-sm text-gray-600">All staff are trained and background-verified</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-xl text-center shadow-md">
            <div className="text-4xl font-bold text-orange-700 mb-2">500+</div>
            <h3 className="font-semibold text-lg mb-1">Families Served</h3>
            <p className="text-sm text-gray-600">Trusted by hundreds of satisfied families</p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">Join Our Caring Family</h2>
        <p className="text-lg mb-6">We&apos;re here when you need us most. Let&apos;s connect today.</p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-sky-600 font-medium rounded-lg hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
