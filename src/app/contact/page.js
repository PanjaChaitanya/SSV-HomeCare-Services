import Link from 'next/link'
import {Phone,Mail,Download,MapPin,ExternalLink,Smartphone,Clock,ShieldCheck,ArrowRight,Eye,} from 'lucide-react'

export const metadata = {
  title: 'Contact Us 24/7 | Sri Siddhi Vinayaka Home Care',
  description:
    "Urgent home care needed? Contact Sri Siddhi Vinayaka Home Care 24/7. Call +91 93819 52242 or WhatsApp us for patient care, elder care, and nursing services.",
  alternates: {
    canonical: 'https://ssvhomecareservices.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Sri Siddhi Vinayaka Home Care | Available 24/7',
    description: 'Call, WhatsApp, or visit our office for professional home care services.',
    url: 'https://ssvhomecareservices.vercel.app/contact',
  },
}

// JSON-LD for Contact Page
const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Sri Siddhi Vinayaka Home Care Services",
    "telephone": "+91-9381952242",
    "email": "care@siddivinayakahomecare.in",
    "areaServed": ["Hyderabad", "Vijayawada", "Eluru", "Vizag"],
    "openingHours": "Mo-Su 00:00-23:59"
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_SCHEMA) }}
      />
      
      <main className="min-h-screen bg-slate-50">
        {/* Modern Hero Section */}
        <section className="relative bg-white pt-16 pb-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
                  <Clock size={14} /> Available 24/7 for Emergencies
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                  Let&apos;s talk about the <span className="text-orange-600">Care You Need</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8">
                  Whether you need immediate nursing or want to plan long-term elder care, 
                  our compassionate team is ready to listen and help.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919381952242" className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-200 transition-all active:scale-95">
                    <Phone size={20} /> Call +91 93819 52242
                  </a>
                  <a href="https://wa.me/919381952242" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-95">
                    <Smartphone size={20} /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Verified Badge / Quick Contact Card */}
              <div className="w-full lg:w-94 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldCheck size={120} />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-sky-400" /> Verified Care
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                    Registered & Certified Home Care Provider serving families since 2013.
                </p>
                <div className="flex justify-between border-t border-slate-800">
                   <Link href="/images/visiting-card.jpg" className="flex items-center justify-between group text-sm font-semibold pt-4">
                    View Card <Eye size={16} className="ml-1 w-4 h-4 group-hover:-translate-y-1 transition-transform group-hover:text-sky-400 transition-colors" />
                  </Link>
                  <Link
                    href="/images/visiting-card.jpg"
                    download="Sri_Siddhi_Vinayaka_Home_Care_Visiting_Card.jpg"
                    className="flex items-center justify-between group text-sm font-semibold pt-4"
                    aria-label="Download visiting card"
                  >
                    Download Card
                    <Download className="ml-1 w-4 h-4 group-hover:translate-y-1 transition-transform group-hover:text-orange-400 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Email us at</p>
                        <a href="mailto:care@siddivinayakahomecare.in" className="text-sky-600 hover:underline">care@siddivinayakahomecare.in</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Office Location</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Sri Siddhi Vinayaka Home Care,<br />
                            Regional Office, Bangalore/Vijayawada
                        </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Badge */}
              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                <h4 className="font-bold text-sky-900 mb-2">Service Areas</h4>
                <p className="text-sky-800/70 text-sm mb-4">We provide doorstep care in:</p>
                <div className="flex flex-wrap gap-2">
                    {['Hyderabad', 'Vijayawada', 'Vizag', 'Eluru', 'Guntur'].map(city => (
                        <span key={city} className="px-3 py-1 bg-white text-sky-700 text-xs font-bold rounded-full border border-sky-200">{city}</span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Map Section */}
        <section className="w-full h-[450px] relative bg-slate-200 overflow-hidden">
             <iframe
                title="Sri Siddhi Vinayaka Home Care - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.557719669604!2d81.53317847413894!3d16.548411426433805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d3004350d2a1%3A0x318786da5b3f8772!2sSRI%20SIDDHI%20VINAYAKA%20HOME%20CARE%20SERVICES!5e0!3m2!1sen!2sin!4v1750308618645!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Direct Navigation Button for Mobile UX */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[60%] sm:w-auto sm:left-10 sm:translate-x-0">
                <a 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/VL8nU2H7xG8dHjGY6" 
                    className="flex items-center justify-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-slate-100 active:scale-95 transition-all"
                >
                    <div className="bg-sky-500 p-2 rounded-lg text-white">
                        <ExternalLink size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-[10px] font-black text-slate-400 uppercase leading-none">Directions</p>
                        <p className="text-sm font-bold text-slate-900">Open in Google Maps</p>
                    </div>
                </a>
            </div>
        </section>
      </main>
    </>
  )
}