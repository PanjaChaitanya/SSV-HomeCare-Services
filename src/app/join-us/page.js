'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Heart, Award, Clock, Shield, CheckCircle, Phone, Mail, Upload, Star, Home, Baby, Stethoscope, ChefHat} from 'lucide-react';

export default function JoinUs() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   experience: '',
  //   position: '',
  //   availability: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Application submitted:', formData);
  //   alert('Thank you for your application! We will contact you soon.');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     experience: '',
  //     position: '',
  //     availability: '',
  //     message: ''
  //   });
  // };
  
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

      {/* Benefits & Perks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value our team and offer comprehensive benefits to support your well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health & Safety</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Comprehensive health insurance</li>
                <li>• Safety training and equipment</li>
                <li>• Regular health check-ups</li>
                <li>• Accident insurance coverage</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <Award className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Development</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Free certification programs</li>
                <li>• Skill enhancement workshops</li>
                <li>• Career advancement opportunities</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <Clock className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Flexible scheduling</li>
                <li>• Paid time off</li>
                <li>• Holiday bonuses</li>
                <li>• Family support programs</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <Star className="h-8 w-8 text-yellow-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognition & Rewards</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Performance bonuses</li>
                <li>• Employee of the month awards</li>
                <li>• Long-service recognition</li>
                <li>• Referral bonuses</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Support</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• 24/7 supervisor support</li>
                <li>• Team building activities</li>
                <li>• Open communication culture</li>
                <li>• Grievance resolution system</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Benefits</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Transportation allowance</li>
                <li>• Uniform provided</li>
                <li>• Mobile phone reimbursement</li>
                <li>• Festival bonuses</li>
              </ul>
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

      {/* Application Form
      <section id="application" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply to Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards a rewarding career in home care services
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years (Entry Level)</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years (Experienced)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    <option value="child-care">Child Care Specialist</option>
                    <option value="elder-care">Elder Care Assistant</option>
                    <option value="housekeeping">Housekeeping Staff</option>
                    <option value="cooking">Cooking Support</option>
                    <option value="medical-care">Medical Care Assistant</option>
                    <option value="multiple">Multiple Positions</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full-time (40+ hours/week)</option>
                    <option value="part-time">Part-time (20-40 hours/week)</option>
                    <option value="flexible">Flexible/As needed</option>
                    <option value="night-shift">Night shift preferred</option>
                    <option value="weekend">Weekends only</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself and why you want to join our team
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Share your experience, motivation, and what makes you a great fit for our team..."
                ></textarea>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-start space-x-3">
                  <Upload className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Documents to Prepare</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Please have the following documents ready for the interview process:
                    </p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Updated resume/CV</li>
                      <li>• Educational certificates</li>
                      <li>• Previous work experience letters</li>
                      <li>• Valid ID proof</li>
                      <li>• Professional certifications (if any)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Contact HR */}
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