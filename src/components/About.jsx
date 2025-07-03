import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-2">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-orange-500 mb-8">
        About Us
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Youtube frame */}
        <div className="w-full md:w-1/2">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            {/* <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/29C2crcXn-E?si=uzXeuur0E_lnZL5l"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-gray-700 text-base md:text-lg">
            Sri Siddi Vinayaka Home Care Services was founded with the mission to bring compassionate, professional care into the homes of families across Andhra Pradesh. Whether it&apos;s a child, an elder, or a recovering loved one — we treat every person like our own.
          </p>
          <Link href="/about">
            <button className="mt-6 bg-lime-700 text-white px-6 py-3 rounded-lg hover:bg-lime-600 transition">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About;
