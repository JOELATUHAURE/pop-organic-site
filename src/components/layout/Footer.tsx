import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
  ];

  const services = [
    { name: 'Anti-Pimple Treatment', href: '/services' },
    { name: 'Deep Clean Facial', href: '/services' },
    { name: 'Organic Skincare', href: '/products' },
    { name: 'Consultation', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/popskincare' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/pop_orgarnic?igsh=MXhiN2d1M2FsNTd2eQ==' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/Pop_Uganda' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center overflow-hidden"
              >
                <img src="/images/pop logo.webp" alt="POP Skincare Logo" className="w-8 h-8 object-contain" />
              </motion.div>
              <span className="text-xl font-bold">POP Skincare</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Youth-driven, UNDP-funded organic skincare experts dedicated to helping you achieve healthy, beautiful skin naturally.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  God's Mercy Plaza, Kisingiri Rd, Kampala, Uganda
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+256 701 673510</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">popuganda232@gmail.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Working Hours</h3>
              <p className="text-gray-300 text-sm">Monday – Sunday: 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="py-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127672.31826276565!2d32.47666052483258!3d0.3099371794723076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x177dbd1012312531%3A0x9d51111b96076331!2s8H65%2B5JW%20God's%20Mercy%20Plaza%2C%20Kisingiri%20Rd%2C%20Kampala!3m2!1d0.3099375!2d32.559062499999996!5e0!3m2!1sen!2sug!4v1750505943754!5m2!1sen!2sug" 
            width="100%" 
            height="300" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for healthy skin in Uganda</span>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              <span>© 2025 POP Organic Skincare Uganda Limited. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;