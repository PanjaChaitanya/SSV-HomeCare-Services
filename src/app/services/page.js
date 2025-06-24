import Link from 'next/link';
import {
  Users,
  User,
  Home,
  Clock,
  Phone,
  Check,
  Star,
} from 'lucide-react';

export const metadata = {
  title: 'Our Services | Sri Siddi Vinayaka Home Care',
  description:
    'Explore our trusted in-home care services - from childcare to elderly support, patient care, housekeeping, and cooking assistance.',
  alternates: {
    canonical: 'https://yourdomain.com/services',
  },
  openGraph: {
    title: 'Services | Sri Siddi Vinayaka Home Care',
    description:
      'Tailored care solutions including elder care, child care, bedridden patient care, and household help.',
    url: 'https://yourdomain.com/services',
  },
};

const Services = () => {
  const services = [
    {
      title: 'Child Care Services',
      icon: Users,
      description: 'Professional, nurturing care for children of all ages with trained, loving caregivers who prioritize safety, development, and fun.',
      features: [
        'Certified and background-checked babysitters',
        'Age-appropriate activities and educational play',
        'Meal preparation and feeding assistance',
        'Homework help and tutoring support',
        'Transportation to activities and appointments',
        'Overnight care available',
        'Emergency response training',
        'Regular progress updates to parents'
      ],
      availability: '24/7 including weekends and holidays',
      priceRange: '₹200 - ₹500 per hour',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      title: 'Elder Care Services',
      icon: User,
      description: 'Compassionate, dignified care for seniors including personal care, companionship, and specialized support for various health conditions.',
      features: [
        'Personal hygiene and grooming assistance',
        'Medication reminders and management',
        'Companion care and social interaction',
        'Light housekeeping and laundry',
        'Meal planning and preparation',
        'Medical appointment accompaniment',
        'Mobility assistance and physical therapy support',
        'Specialized dementia and Alzheimer\'s care'
      ],
      availability: 'Live-in and hourly care options',
      priceRange: '₹300 - ₹800 per hour',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop'
    },
    {
      title: 'Housekeeping Services',
      icon: Home,
      description: 'Comprehensive home cleaning and maintenance services to keep your home spotless, organized, and comfortable for your family.',
      features: [
        'Deep cleaning and regular maintenance',
        'Kitchen and bathroom sanitization',
        'Dusting, vacuuming, and mopping',
        'Laundry and ironing services',
        'Organizing and decluttering',
        'Window and appliance cleaning',
        'Eco-friendly cleaning products available',
        'Customizable cleaning schedules'
      ],
      availability: 'Daily, weekly, bi-weekly, or monthly',
      priceRange: '₹1,500 - ₹5,000 per visit',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop'
    },
    {
      title: 'Cooking ',
      icon: Clock,
      description: 'Healthy, delicious meals prepared in your home according to dietary preferences, restrictions, and family traditions.',
      features: [
        'Nutritious meal planning and preparation',
        'Accommodation of dietary restrictions',
        'Traditional and regional cuisine specialties',
        'Fresh ingredient shopping and selection',
        'Kitchen organization and maintenance',
        'Meal prep for busy families',
        'Special occasion and party catering',
        'Cooking lessons and recipe sharing'
      ],
      availability: 'Daily or as-needed basis',
      priceRange: '₹250 - ₹600 per meal',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop'
    },
    {
      title: 'Bedridden Patient Care',
      icon: User,
      description: 'Specialized medical and personal care for patients who are bedridden or have limited mobility, ensuring comfort and dignity.',
      features: [
        'Personal hygiene and bathing assistance',
        'Turning and repositioning to prevent bedsores',
        'Medication administration and monitoring',
        'Wound care and dressing changes',
        'Physical therapy and mobility exercises',
        'Nutritional support and feeding assistance',
        '24/7 monitoring and emergency response',
        'Coordination with healthcare providers'
      ],
      availability: '24/7 live-in care recommended',
      priceRange: '₹500 - ₹1,200 per hour',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
    }
  ];

  const serviceHighlights = [
    { title: 'Background-Checked Staff', description: 'All caregivers undergo thorough background checks and verification', icon: Check },
    { title: '24/7 Emergency Support', description: 'Round-the-clock availability for urgent care needs and emergencies', icon: Clock },
    { title: 'Customized Care Plans', description: 'Personalized care plans tailored to individual needs and preferences', icon: Star },
    { title: 'Licensed & Insured', description: 'Fully licensed and insured for your peace of mind and protection', icon: Users },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-care-blue-50 via-white to-care-cream-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive Home Care Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            From child care to elder care, housekeeping to specialized patient care – we provide trusted, professional services that keep your family comfortable and safe at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-care-blue-600 text-white text-lg px-8 py-4 rounded-md font-semibold hover:bg-care-blue-700 transition">
              Get Custom Care Plan
            </Link>
            <a href="tel:+919876543210" className="text-care-blue-600 border-2 border-care-blue-600 text-lg px-8 py-4 rounded-md font-semibold hover:bg-care-blue-600 hover:text-white transition flex items-center justify-center">
              <Phone className="mr-2" size={20} /> Call for Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {serviceHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className='border-2'>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-gray-900" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-care-blue-500 to-care-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check size={16} className="text-care-blue-600 mt-1" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Availability</p>
                      <p className="text-sm text-gray-600">{service.availability}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Starting From</p>
                      <p className="text-sm text-care-blue-600 font-bold">{service.priceRange}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="inline-block mt-4 bg-care-blue-600 text-blue-400 px-6 py-3 rounded-md font-medium hover:bg-care-blue-700 transition">
                    Request This Service
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-care-blue-600 to-care-blue-700 text-gray-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us create a personalized care plan that meets your family's unique needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gray-500 text-blue-300 hover:bg-gray-100 text-lg px-8 py-4 rounded-md font-semibold">
              Get Free Consultation
            </Link>
            <a href="tel:+919876543210" className="border-2 border-gray-600 text-gray-500 hover:bg-white hover:text-care-blue-600 text-lg px-8 py-4 rounded-md font-semibold flex items-center justify-center">
              <Phone className="mr-2" size={20} /> Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
