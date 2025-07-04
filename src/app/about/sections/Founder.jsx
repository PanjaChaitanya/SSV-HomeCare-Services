// components/about/Founder.jsx
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";

export default function Founder() {
  return (
    <>
      <FadeInLeft>
        {/* Use webp image; optimize size on build */}
        <Image
          src="/images/founder.png"
          alt="Founder - Addagalla Ganapathi Rao"
          width={320}
          height={320}
          className="rounded-full object-cover shadow-lg"
          priority // ensure hero image loads fast
        />
      </FadeInLeft>

      <FadeInRight className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-orange-600">Sri Siddhi Vinayaka</span>
        </h1>

        <p className="text-lg mb-6 text-gray-700">
          For over a decade, we&apos;ve been delivering heartfelt home care that brings peace,
          comfort, and dignity to families across the region.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          Connect With Us
        </Link>
      </FadeInRight>
    </>
  );
}
