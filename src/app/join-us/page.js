import Link from 'next/link';
import Image from 'next/image';
import { Users, Heart, Award, Clock, Shield, CheckCircle, Phone, Mail, Upload, Star, Home, Baby, Stethoscope, ChefHat} from 'lucide-react';

export default function JoinUs() {
  return (
    <div className="py-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Become a{' '}
                  <span className="text-blue-600">Care</span>{' '}
                  Giver
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Make a meaningful difference in families&apos; lives while building a rewarding career 
                  in home care services. We&apos;re looking for compassionate, dedicated professionals 
                  to join our growing team.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <a
                  href="#application"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </a> */}
                <a
                  href="tel:+91-9381952242"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call : +91-9381952242
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">250+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Families Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/join-us-homecare.jpg"
                  alt="Care Giver working"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Now Hiring</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-600 text-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-lg font-bold">Join</div>
                  <div className="text-sm">Our Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sri Siddhi Vinayaka as Your Employer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in supporting our team members with competitive benefits, 
              professional growth opportunities, and a positive work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-gray-600">
                Above-market salaries with performance bonuses and regular increments
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Meaningful Work</h3>
              <p className="text-gray-600">
                Make a real difference in families&apos; lives while building lasting relationships
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Growth</h3>
              <p className="text-gray-600">
                Continuous training programs and career advancement opportunities
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Choose shifts that work with your lifestyle and commitments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re actively hiring for multiple positions across all our service areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg mb-4 w-fit">
                <Baby className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Child Care Specialists</h3>
              <p className="text-gray-600 mb-4">
                Experienced caregivers for infants, toddlers, and school-age children
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Early childhood education background preferred</li>
                <li>• CPR/First Aid certification required</li>
                <li>• Flexible part-time and full-time positions</li>
              </ul>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Multiple Openings
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg mb-4 w-fit">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Elder Care Assistants</h3>
              <p className="text-gray-600 mb-4">
                Compassionate caregivers for elderly clients requiring daily assistance
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Experience with elderly care preferred</li>
                <li>• Patient and empathetic personality</li>
                <li>• Day and night shifts available</li>
              </ul>
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                High Demand
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg mb-4 w-fit">
                <Home className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Housekeeping Staff</h3>
              <p className="text-gray-600 mb-4">
                Detail-oriented professionals for comprehensive home cleaning services
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Experience in residential cleaning</li>
                <li>• Attention to detail and reliability</li>
                <li>• Flexible scheduling options</li>
              </ul>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Immediate Start
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg mb-4 w-fit">
                <Stethoscope className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Care Assistants</h3>
              <p className="text-gray-600 mb-4">
                Qualified professionals for bedridden and post-surgery patient care
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>• Medical training or certification required</li>
                <li>• Experience with patient care</li>
                <li>• 24/7 availability preferred</li>
              </ul>
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                Specialized Role
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We&apos;re Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek dedicated individuals who share our commitment to providing exceptional care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Qualifications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum 18 years of age</li>
                  <li>• High school diploma or equivalent</li>
                  <li>• Clean background check</li>
                  <li>• Valid identification documents</li>
                  <li>• Basic communication skills in local language</li>
                  <li>• Physical ability to perform care duties</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Preferred Experience</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Previous experience in home care or healthcare</li>
                  <li>• Certification in relevant field (nursing, childcare, etc.)</li>
                  <li>• CPR/First Aid certification</li>
                  <li>• Experience with elderly or special needs care</li>
                  <li>• Knowledge of basic cooking and housekeeping</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Qualities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Compassionate and empathetic nature</li>
                  <li>• Excellent communication skills</li>
                  <li>• Reliability and punctuality</li>
                  <li>• Patience and understanding</li>
                  <li>• Professional appearance and demeanor</li>
                  <li>• Ability to work independently</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Willingness to work flexible hours</li>
                  <li>• Ability to follow care plans and instructions</li>
                  <li>• Respect for client privacy and confidentiality</li>
                  <li>• Commitment to ongoing training and development</li>
                  <li>• Team player with positive attitude</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Working With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We are here to help you understand our opportunities and process
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+91-9381952242"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call : +91-9381952242
            </a>
            <a
              href="mailto:careers@srisiddivinayaka.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email: careers@srisiddivinayaka.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};