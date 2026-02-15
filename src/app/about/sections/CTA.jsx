import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] p-8 md:p-16 shadow-2xl">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left lg:max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to provide the <span className="text-sky-400">best care</span> for your loved ones?
                </h2>
                <p className="text-slate-400 text-lg mb-0">
                  Join 1,000+ happy families in Bangalore. Our team is ready to create a personalized care plan for you today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-sky-900/20"
                >
                  Book Free Consultation <ArrowRight size={18} />
                </Link>
                
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl transition-all backdrop-blur-sm"
                >
                  <Phone size={18} /> +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}