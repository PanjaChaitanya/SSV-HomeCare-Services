import Link from 'next/link'

export default function Hero() {
  return (
    <>
       <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-blue-900">
            Compassionate Home Care Services You Can Trust
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Serving your loved ones with warmth, dignity, and care
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
              Book a Free Consultation
            </button>
          </Link>
        </div>
    </>
  )
}
