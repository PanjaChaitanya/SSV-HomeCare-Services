// components/about/CTA.jsx
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="py-20 bg-sky-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">Join Our Caring Family</h2>
          <p className="text-lg mb-6">We&apos;re here when you need us most. Let&apos;s connect today.</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-sky-600 font-medium rounded-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
