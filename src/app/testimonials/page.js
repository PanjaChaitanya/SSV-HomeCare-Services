import { User, MapPin,BadgeCheck, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Lakshmi Devi',
    location: 'Vijayawada',
    message:
      'The caretaker was patient, kind, and very supportive. I’m thankful for their help during my mother’s recovery.',
    rating: 5,
  },
  {
    name: 'Ramesh Kumar',
    location: 'Hyderabad',
    message:
      'Reliable service! The nurse visited daily and took excellent care of my father. Professional and polite staff.',
    rating: 5,
  },
  {
    name: 'Kavitha Reddy',
    location: 'Eluru',
    message:
      'Sri Siddhi Vinayaka team responded quickly when we needed urgent night care. They really care about patients.',
    rating: 3,
  },
  {
    name: 'Meena Choudhary',
    location: 'Rajahmundry',
    message:
      'Very professional service. They explained everything clearly before starting the care routine.',
    rating: 4,
  },
  {
    name: 'Suresh Naidu',
    location: 'Hyderabad',
    message:
      'Excellent nursing service for bedridden patients. Communication and support were great.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Vizag',
    message:
      'Friendly staff and quick assistance. The nurse helped my grandmother recover faster.',
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#f25939]">
          What Our Clients Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 flex flex-col justify-between border border-gray-100"
            >
              {/* Top Section */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#f25939]/10 p-3 rounded-full">
                  <User className="text-[#f25939]" size={22} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 flex items-center gap-1">
                        {t.name}<BadgeCheck size={18} className="text-green-500" />
                    </h3>
                    <div className="text-sm flex text-gray-500">
                        <MapPin size={15}/>{t.location}
                    </div>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{t.message}”
              </p>

              {/* Rating */}
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < t.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
