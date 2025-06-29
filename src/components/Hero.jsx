import Link from "next/link";
import Image from "next/image";
import BlurText from "./BlurText";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Orange curved background */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-l-[50%] -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-20">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl font-bold flex-col gap-2">
            <span className="text-gray-900 mb-2">Welcome to</span>
            <span className="text-orange-600">
              <BlurText
							text="Sri Siddhi Vinayaka"
							delay={50}
							animateBy="lettters"
							direction="bottom"
							/>
              <BlurText
							text="Home Care"
							delay={50}
							animateBy="lettters"
							direction="bottom"
							/>
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
          Serving your loved ones with warmth, dignity, and care
          </p>
          <Link href="/contact" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-orange-200 font-medium shadow-lg shadow-gray-400">
            <div className="relative inline-flex h-12 sm:h-14 md:h-16 overflow-hidden rounded-lg group cursor-pointer shadow-lg">
              {/* Default: orange bg, white text */}
              <div className="inline-flex h-12 sm:h-14 md:h-16 w-full items-center justify-center px-6 bg-orange-600 text-white transition-all duration-500 ease-in-out group-hover:-translate-y-[150%]">
                Get Consultation
              </div>

              {/* Hover: white bg, orange text */}
              <div className="absolute inline-flex h-12 sm:h-14 md:h-16 w-full items-center justify-center text-orange-600 transition-all duration-500 ease-in-out group-hover:translate-y-0 -translate-y-[150%]">
                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-white transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:scale-200"></span>
                <span className="z-10 font-semibold">Get Consultation</span>
              </div>
            </div>

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