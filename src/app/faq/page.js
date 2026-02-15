'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Search, ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

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
        answer: 'Yes, all our caregivers are professionally trained and undergo thorough background verification. They receive ongoing training in medical basics and grooming to maintain high standards.'
      },
      {
        question: 'Do you provide services 24/7?',
        answer: 'Yes, we offer 24/7 round-the-clock care services, especially for elder care and patient care. Our care coordinators are also available for emergency support at any time.'
      }
    ]
  },
  {
    category: 'Pricing & Booking',
    questions: [
      {
        question: 'How much do your services cost?',
        answer: 'Pricing varies by service. Child care starts from ₹800/day, while specialized patient care starts from ₹1,800/day. We provide a transparent quote after an initial consultation.'
      },
      {
        question: 'How do I book your services?',
        answer: 'You can book by calling +91 93819 52242 or filling our online form. We typically arrange a home visit within 24 hours to assess requirements.'
      }
    ]
  },
  {
    category: 'Safety & Trust',
    questions: [
      {
        question: 'How do you ensure family safety?',
        answer: 'We conduct comprehensive police background checks, verify Aadhar cards, and maintain a detailed database of all staff. We also conduct regular supervisor check-ins.'
      },
      {
        question: 'What if a caregiver is absent?',
        answer: 'We maintain a buffer staff and will provide a replacement caregiver within 4-6 hours to ensure your family’s routine is not disrupted.'
      }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      {/* --- Header Section --- */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            How can we <span className="text-orange-600">help you?</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8">
            Find quick answers to common questions about our home care services.
          </p>
        </motion.div>
      </section>

      {/* --- FAQ Content Grid --- */}
      <section className="max-w-5xl mx-auto px-6 gap-12">
        {/* FAQ Accordions */}
        <div className="lg:col-span-3 space-y-8">
          {faqs.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="text-orange-600" /> {section.category}
              </h2>
              
              <div className="space-y-4">
                {section.questions.map((faq, qIdx) => {
                  const uniqueId = `${sIdx}-${qIdx}`;
                  const isOpen = openIndex === uniqueId;

                  return (
                    <div key={qIdx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all hover:shadow-md">
                      <button 
                        onClick={() => toggleFAQ(uniqueId)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                      >
                        <span className={`font-bold transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-800'}`}>
                          {faq.question}
                        </span>
                        <ChevronDown className={`shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-50 pt-4"
                          >
                            {faq.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact CTA Section --- */}
      <section className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-600 rounded-full blur-[80px] opacity-20" />
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Still have questions?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">
            Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            <a href="tel:+919381952242" className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all group">
              <Phone className="mx-auto mb-3 text-orange-500 group-hover:scale-110 transition-transform" />
              <p className="font-bold">Call Us</p>
              <p className="text-xs text-slate-500">24/7 Helpline</p>
            </a>
            <a href="https://wa.me/919381952242" className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all group">
              <MessageCircle className="mx-auto mb-3 text-emerald-500 group-hover:scale-110 transition-transform" />
              <p className="font-bold">WhatsApp</p>
              <p className="text-xs text-slate-500">Instant Chat</p>
            </a>
            <a href="mailto:care@siddivinayakahomecare.in" className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-sky-500 transition-all group">
              <Mail className="mx-auto mb-3 text-sky-500 group-hover:scale-110 transition-transform" />
              <p className="font-bold">Email</p>
              <p className="text-xs text-slate-500">Official Support</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;