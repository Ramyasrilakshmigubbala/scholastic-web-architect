
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white text-primary h-10 w-10 flex items-center justify-center rounded-md">
                <span className="font-montserrat font-bold text-lg">EC</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl">Elite College</h3>
            </div>
            <p className="text-sm md:text-base mb-4 text-gray-200">
              Empowering Future Leaders with Knowledge, Innovation, and Excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Academics', 'Admissions', 'Campus Life', 'Faculty', 'Alumni', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Academic Calendar', 
                'Library', 
                'Student Portal', 
                'Career Services',
                'Scholarships',
                'Sports & Recreation',
                'FAQ'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-').replace('&', 'and')}`} 
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <p className="text-sm md:text-base text-gray-200">
                  123 University Ave, Academic City,<br />New York, NY 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <p className="text-sm md:text-base text-gray-200">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <p className="text-sm md:text-base text-gray-200">admissions@elitecollege.edu</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row md:items-center justify-between text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Elite College. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
