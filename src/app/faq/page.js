// pages/faq.js
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: "Frequently Asked Questions | Sri Siddi Vinayaka Home Care",
  description: "Explore answers to commonly asked questions about our home care services including childcare, elder care, housekeeping, and more.",
  alternates: {
    canonical: "https://yourdomain.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Sri Siddi Vinayaka Home Care",
    description: "Get detailed answers about our care services, pricing, support policies, and more.",
    url: "https://yourdomain.com/faq",
  },
};



const faqs = [
    {
      category: 'General Services',
      questions: [
        {
          question: 'What types of home care services do you provide?',
          answer: 'We provide comprehensive home care services including child care, elder care, housekeeping, cooking support, and bedridden patient care. Each service is customized to meet your specific needs and preferences.'
        },
        {
          question: 'Are your caregivers trained and certified?',
          answer: 'Yes, all our caregivers are professionally trained, certified, and undergo thorough background verification. They receive ongoing training to maintain the highest standards of care and stay updated with best practices.'
        },
        {
          question: 'Do you provide services 24/7?',
          answer: 'Yes, we offer 24/7 emergency support and round-the-clock care services, especially for elder care and bedridden patient care. Our regular services are typically available from 7 AM to 10 PM with extended hours available upon request.'
        },
        {
          question: 'How do you ensure the safety and security of my family?',
          answer: 'We conduct comprehensive background checks on all staff, provide identity verification, maintain insurance coverage, and have regular supervisor visits. All caregivers carry ID cards and follow strict safety protocols.'
        }
      ]
    },
    {
      category: 'Pricing & Booking',
      questions: [
        {
          question: 'How much do your services cost?',
          answer: 'Our pricing varies by service type and duration. Child care starts from ₹800/day, elder care from ₹1,200/day, housekeeping from ₹600/day, cooking from ₹700/day, and specialized patient care from ₹1,800/day. Contact us for detailed pricing.'
        },
        {
          question: 'Do you offer free consultations?',
          answer: 'Yes, we provide free initial consultations to understand your needs and create a personalized care plan. This includes a home visit to assess requirements and discuss service details.'
        },
        {
          question: 'What is your minimum service commitment?',
          answer: 'We offer flexible arrangements from single-day services to long-term care contracts. There is no strict minimum commitment, but longer-term arrangements often come with better rates and consistency.'
        },
        {
          question: 'How do I book your services?',
          answer: 'You can book our services by calling us at +91 98765 43210, filling out our online contact form, or visiting our office. We typically respond within 2-4 hours and can arrange services within 24-48 hours.'
        }
      ]
    },
    {
      category: 'Service Specifics',
      questions: [
        {
          question: 'Can you provide female caregivers for cultural or personal preferences?',
          answer: 'Yes, we have both male and female caregivers on our team. We understand cultural sensitivities and personal preferences, and we do our best to accommodate specific requests for gender preferences.'
        },
        {
          question: 'Do your cooking staff accommodate special diets and allergies?',
          answer: 'Absolutely! Our cooking staff are trained to prepare meals for various dietary requirements including diabetic, cardiac, vegetarian, vegan, and allergy-specific diets. We work with you to create suitable meal plans.'
        },
        {
          question: 'What happens if a caregiver cannot come on a scheduled day?',
          answer: 'We maintain backup staff and will provide a replacement caregiver to ensure continuity of care. In rare cases where immediate replacement is not possible, we will notify you in advance and make alternative arrangements.'
        },
        {
          question: 'Do you provide medical care for bedridden patients?',
          answer: 'Our bedridden patient care includes basic medical support like wound care, medication administration, and physiotherapy assistance. For complex medical procedures, we coordinate with healthcare providers and can arrange for professional medical visits.'
        }
      ]
    },
    {
      category: 'Policies & Support',
      questions: [
        {
          question: 'What is your cancellation policy?',
          answer: 'We require 24-hour notice for cancellations of regular services. For emergency situations, we are flexible. Long-term contract cancellations require 7 days notice. Emergency services may have different terms.'
        },
        {
          question: 'Do you provide services during holidays and weekends?',
          answer: 'Yes, we provide services 365 days a year including weekends and holidays. Holiday service rates may apply for certain services. Emergency support is always available regardless of the day or time.'
        },
        {
          question: 'What if I am not satisfied with the service?',
          answer: 'Your satisfaction is our priority. If you are not satisfied, please contact us immediately. We will address concerns promptly, provide alternative caregivers if needed, or offer service adjustments. Customer feedback is valuable to us.'
        },
        {
          question: 'How do you handle emergencies?',
          answer: 'We have a 24/7 emergency helpline and response system. Our caregivers are trained in basic first aid and emergency procedures. We maintain contact with local emergency services and can coordinate immediate medical assistance when needed.'
        }
      ]
    }
  ];

       const FAQ = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <section className="py-20 text-center">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-700 max-w-xl mx-auto">
            Answers to common questions about our services. Still need help? Contact us directly!
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Ask a Question
            </Link>
          </div>
        </section>

        <section className="px-4 py-10 max-w-5xl mx-auto">
          {faqs.map((section, sIdx) => (
            <div
              key={sIdx}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-blue-900 border-b pb-2 border-blue-300 mb-4">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIdx) => (
                  <details
                    key={qIdx}
                    className="bg-white rounded-lg shadow transition duration-300 hover:shadow-lg overflow-hidden"
                  >
                    <summary className="cursor-pointer px-6 py-4 font-medium text-blue-800 hover:bg-blue-50">
                      {faq.question}
                    </summary>
                    <div className="px-6 py-4 text-blue-700 bg-blue-50">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-blue-700 mb-8">Reach out to our team anytime.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Phone className="w-10 h-10 text-blue-600 mx-auto mb-2" />,
                  title: 'Call Us',
                  text: 'Speak directly with our care coordinators',
                  href: 'tel:+919876543210',
                  label: '+91 98765 43210'
                },
                {
                  icon: <Mail className="w-10 h-10 text-green-600 mx-auto mb-2" />,
                  title: 'Email Us',
                  text: 'Get detailed answers to your questions',
                  href: 'mailto:info@srisiddivinayakahomecare.com',
                  label: 'Send Email'
                },
                {
                  icon: <Clock className="w-10 h-10 text-orange-500 mx-auto mb-2" />,
                  title: 'Office Hours',
                  text: 'Mon-Sat: 8 AM - 8 PM, Sunday: 9 AM - 6 PM',
                  href: '/contact',
                  label: 'Visit Us'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-blue-700 mb-4">{item.text}</p>
                  <Link
                    href={item.href}
                    className="inline-block border border-blue-500 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Care?</h2>
          <p className="text-lg mb-6">
            Contact us today for a free consultation and personalized care assessment.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              View Our Services
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
