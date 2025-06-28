import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Orange curved background */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-l-[50%] -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-20">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to{" "}
            <span className="text-orange-600">Sri Siddi Vinayaka Home Care</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
          Serving your loved ones with warmth, dignity, and care
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md"
          >
            Get Consultation Now
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="absolute -top-10 left-0">
            <Image src="/images/love.png" alt="banner-child" width={120} height={100} className=""/>
          </div>
          <div className="absolute top-40 left-40">
            <Image src="/images/banner-elder.jpg" alt="Chart 2" width={260} height={180} className="rounded-xl shadow-lg" />
          </div>
          <div className="absolute top-20 left-5">
            <Image src="/images/child.jpg" alt="Chart 2" width={160} height={120} className="rounded-xl"/>
          </div>
          <Image
            src="/images/hero-banner.jpg"
            alt="Hero Banner"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
