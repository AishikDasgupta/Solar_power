import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-green-400">Green Power Solar Energy</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering a sustainable future with professional solar energy solutions since 2023.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1BdkeeLaF4/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/g.p.solar.energy?igsh=cXYzOGlmemtvOWxv" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              <Link to="/why-choose-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/service/installation" className="text-gray-300 hover:text-white transition-colors">New Project Installation</Link>
              <Link to="/service/repair" className="text-gray-300 hover:text-white transition-colors">Project Repairing</Link>
              <Link to="/service/amc" className="text-gray-300 hover:text-white transition-colors">AMC Industrial</Link>
              <Link to="/sales/panel-solar" className="text-gray-300 hover:text-white transition-colors">Solar Panels</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/WoZkhx4RoHJZiJoU6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-green-300 transition-colors"
              >
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>412D/5, NSC Bose Road</p>
                  <p>Opp Garia Traffic Guard</p>
                  <p>Kolkata – 700047 WB</p>
                  <p className="text-green-400 mt-1 text-xs">View on Google Maps →</p>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <div className="text-sm text-gray-300">
                  <p>99031 44213</p>
                  <p>90511 67746</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">99031 44213</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <div className="text-sm text-gray-300">
                  <p>gpse1988@gmail.com</p>
                  <p>connect@gpse.co.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Green Power Solar Energy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};