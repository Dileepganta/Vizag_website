import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visakapatnam</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              OceanSide District is committed to fostering a vibrant, sustainable community 
              where residents thrive and businesses prosper.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a className="text-gray-300 hover:text-gray-200 flex items-center gap-2" href="#">
                  <ExternalLink className="w-5 h-5" />
                  Famous Persons
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-200 flex items-center gap-2" href="#">
                  <ExternalLink className="w-5 h-5" />
                  Public Utilities
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-200 flex items-center gap-2" href="#">
                  <ExternalLink className="w-5 h-5" />
                  Tourism
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-200 flex items-center gap-2" href="#">
                  <ExternalLink className="w-5 h-5" />
                  Transports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">7VRW+PJ7, Near Railway Station,<br />Madhurwada Junction, Visakapatnam, Andhra Pradesh 532001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">100/108</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Visakapatnam.ap.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm">
              © {currentYear} Riverside District. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
