import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import { CheckCircle2 } from "lucide-react";

export default function Founder() {
  return (
    <>
      <FadeInLeft className="md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400 to-orange-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <Image
            src="/images/founder.png" // Ensure you have a high-res webp/png
            alt="Founder - Addagalla Ganapathi Rao"
            width={400}
            height={400}
            className="relative z-10 rounded-2xl object-cover shadow-2xl border-4 border-white"
            priority
          />
        </div>
      </FadeInLeft>

      <FadeInRight className="md:w-1/2 space-y-6">
        <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold tracking-widest uppercase">
          Meet Our Leadership
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
          A Legacy of <span className="text-sky-600">Heartfelt Care</span>
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Under the vision of <span className="font-bold text-slate-900">Addagalla Ganapathi Rao</span>, we have transformed how families in Bangalore experience home care—prioritizing dignity over distance.
        </p>

        <ul className="space-y-3">
          {['Certified Medical Staff', 'Personalized Care Plans', '24/7 Dedicated Support'].map((text) => (
            <li key={text} className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-green-500" size={20} /> {text}
            </li>
          ))}
        </ul>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 hover:shadow-xl transition-all text-center"
          >
            Consult the Founder
          </Link>
          <a
            href="tel:+91XXXXXXXXXX"
            className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-center"
          >
            Emergency Call
          </a>
        </div>
      </FadeInRight>
    </>
  );
}