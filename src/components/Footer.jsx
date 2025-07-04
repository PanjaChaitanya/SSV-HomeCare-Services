'use client';
import Link from 'next/link'
import { Phone, Clock,Users,Mail,Instagram, MessageCircle, Facebook } from 'lucide-react'
export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-cta rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sri Siddhi Vinayaka</h3>
                <p className="text-sm text-gray-300">Home Care Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Providing trusted, compassionate home care services with experienced caregivers. 
              Your family's comfort and well-being is our priority.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-4 text-gray-300">
              <ul className="space-y-2">
                <li>Gadiyaram Street</li>
                <li >Bhimavaram,534201</li>
                <li>West Godavari, Andhra Pradesh</li>
              </ul>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 93819 52242</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@srisiddhivinayakahomecare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-blue-400" />
                <span>24/7 Emergency Support Available</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a
                href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={24} />
              </a>
              <a
                href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:gap-5'>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-yellow-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-yellow-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-yellow-300 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-300 hover:text-yellow-300 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-yellow-300 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-yellow-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">Child Care</li>
                <li className="text-gray-300">Elder Care</li>
                <li className="text-gray-300">Housekeeping</li>
                <li className="text-gray-300">Cooking Support</li>
                <li className="text-gray-300">Bedridden Patient Care</li>
              </ul>
            </div>
            {/* Trust Badges */}
              <div className="mt-6 col-span-2 space-y-2 flex flex-col items-center text-green-400">
                <div className="flex items-center space-x-2 text-care-green-400">
                  <Users size={16} />
                  <span className="text-sm">Certified Caregivers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span className="text-sm">10+ Years Experience</span>
                </div>
              </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sri Siddhi Vinayaka Home Care Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
