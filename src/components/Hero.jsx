import Link from 'next/link'

export default function Hero() {
  return (
    <>
       <div className="max-w-4xl max-h-screen">
          <h1 className="text-3xl md:text-4xl text-blue-900">
            Compassionate Home Care Services You Can Trust
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Serving your loved ones with warmth, dignity, and care
          </p>
          <div className="relative mt-5 inline-block p-[2px] rounded-full overflow-hidden group">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#ff0000,#00ff00,#0000ff,#ff0000)] bg-[length:300%_300%] animate-border-spin" />

            {/* Actual Button */}
            <Link
              href="/contact"
              className="relative z-10 block bg-white tracking-wide text-green-700 font-semibold px-6 py-3 rounded-full group-hover:bg-green-700 group-hover:text-white transition-all duration-300"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
    </>
  )
}
