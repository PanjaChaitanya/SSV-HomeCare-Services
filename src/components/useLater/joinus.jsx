'use client';
import Image from 'next/image';
import { Users, Heart, Award, Clock, Shield, CheckCircle, Phone, Mail, Star, Briefcase, MessageCircle, ArrowRight } from 'lucide-react';

export default function JoinUs() {
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-bold border border-orange-100">
                <Star size={14} className="fill-current" /> We are Hiring!
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                Turn Your Compassion into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Career</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join a team that values your dedication. We offer stable employment, respect, and the opportunity to make a real difference in families' lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+919381952242"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call to Apply
                </a>
                <a
                  href="https://wa.me/919381952242?text=I'm%20interested%20in%20joining%20your%20team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-full hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100 mt-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900">250+</div>
                  <div className="text-sm font-medium text-slate-500">Caregivers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm font-medium text-slate-500">On-Time Pay</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">12+</div>
                  <div className="text-sm font-medium text-slate-500">Districts</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image Group */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
               <div className="relative w-full aspect-square max-w-md bg-gradient-to-tr from-orange-200 to-blue-200 rounded-[2rem] rotate-3">
                  <div className="absolute inset-2 bg-white rounded-[1.8rem] overflow-hidden -rotate-3 shadow-2xl">
                     <Image
                        src="/images/join-us-homecare.jpg" // Ensure you have this image
                        alt="Caregiver smiling"
                        fill
                        className="object-cover"
                     />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                     <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="text-green-600 h-6 w-6" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-900">Verified Job</p>
                        <p className="text-xs text-slate-500">Immediate Joining</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 3-Step Process (New Section) */}
      <section className="py-16 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900">How to Join Us</h2>
               <p className="text-slate-500 mt-2">Start your journey in 3 simple steps</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

               {[
                  { title: "Call or WhatsApp", desc: "Contact us with your details and experience.", icon: <Phone /> },
                  { title: "Interview & Verify", desc: "Visit our office for a quick chat and document check.", icon: <Users /> },
                  { title: "Start Earning", desc: "Get assigned to a family and start working.", icon: <Briefcase /> }
               ].map((step, idx) => (
                  <div key={idx} className="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center group hover:-translate-y-2 transition-transform">
                     <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4 text-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        {step.icon}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                     <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
               More Than Just a Job
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               We treat our caregivers with the same respect we treat our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { icon: <Award className="h-6 w-6" />, title: "High Pay Scale", desc: "Best-in-market salaries with timely payouts." },
               { icon: <Shield className="h-6 w-6" />, title: "Job Security", desc: "Consistent work availability throughout the year." },
               { icon: <Clock className="h-6 w-6" />, title: "Flexible Shifts", desc: "Choose between Day, Night, or 24hr Live-in shifts." },
               { icon: <Heart className="h-6 w-6" />, title: "Safety First", desc: "We verify all client homes to ensure your safety." },
            ].map((item, i) => (
               <div key={i} className="p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors border border-slate-100 hover:border-orange-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-4">
                     {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
               <p className="text-slate-400">We are actively recruiting for these roles immediately.</p>
            </div>
            <a href="tel:+919381952242" className="text-orange-400 font-bold flex items-center hover:text-orange-300">
               Call to inquire <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
               { title: "Elder Care Assistant", tags: ["High Demand", "Live-in"], desc: "Assisting seniors with daily activities, medication, and companionship." },
               { title: "Child Care / Nanny", tags: ["Day Shift", "Part-time"], desc: "Taking care of infants or toddlers, ensuring their safety and engagement." },
               { title: "Patient Care (Medical)", tags: ["Nursing Required", "Shift Basis"], desc: "Care for bedridden or post-op patients. Basic nursing skills required." },
               { title: "Cook / Chef", tags: ["Residential"], desc: "Preparing healthy, hygienic meals for families." },
               { title: "Housekeeping Staff", tags: ["Immediate"], desc: "Deep cleaning and maintenance of residential homes." },
               { title: "Physiotherapist", tags: ["Visit Basis"], desc: "Home visits for elderly mobility and rehabilitation." },
            ].map((job, idx) => (
               <div key={idx} className="bg-slate-800 p-6 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>
                  <div className="flex gap-2 mb-4 flex-wrap">
                     {job.tags.map(tag => (
                        <span key={tag} className="text-xs font-bold bg-slate-900 text-slate-300 px-2 py-1 rounded-md border border-slate-600">
                           {tag}
                        </span>
                     ))}
                  </div>
                  <p className="text-slate-400 text-sm mb-6">{job.desc}</p>
                  <a href="tel:+919381952242" className="w-full block text-center py-2 rounded-lg bg-orange-600 text-white font-bold text-sm hover:bg-orange-500 transition-colors">
                     Apply Now
                  </a>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Documents Required</h3>
                  <p className="text-blue-700 mb-4">Please bring these originals and one set of photocopies when you come for the interview.</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-800 font-medium">
                     {[
                        "Aadhar Card", "Pan Card", "Police Verification", 
                        "Passport Size Photos (2)", "Experience Letter (if any)", "Education Certificates"
                     ].map((doc, i) => (
                        <li key={i} className="flex items-center gap-2">
                           <CheckCircle size={16} /> {doc}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="shrink-0">
                  <a href="https://maps.google.com" target="_blank" className="block p-4 bg-white rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 text-blue-600">
                        <ArrowRight />
                     </div>
                     <span className="font-bold text-slate-900">Get Office<br/>Directions</span>
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Don't hesitate. Call us today and start your journey with Sri Siddhi Vinayaka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919381952242"
              className="px-8 py-3 bg-white text-orange-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> Call +91 93819 52242
            </a>
            <a
              href="mailto:jobs@srisiddivinayaka.com"
              className="px-8 py-3 bg-orange-700 text-white font-bold rounded-full border border-orange-500 hover:bg-orange-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Email Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};