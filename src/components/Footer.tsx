import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-lavender-500 to-peach-500 rounded-full flex items-center justify-center text-white font-bold">
                  K
                </div>
                <span className="text-xl font-semibold">Karuna Kumawat</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Aspiring web developer with a passion for creating meaningful digital experiences. 
                Always learning, always growing, always dreaming big.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:karuna@example.com" className="text-gray-300 hover:text-lavender-400 transition-colors duration-300">
                  <Mail size={20} />
                </a>
                <a href="https://github.com" className="text-gray-300 hover:text-lavender-400 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-lavender-400 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-lavender-400 transition-colors duration-300">About Me</a>
                <a href="#projects" className="block text-gray-300 hover:text-lavender-400 transition-colors duration-300">Projects</a>
                <a href="#skills" className="block text-gray-300 hover:text-lavender-400 transition-colors duration-300">Skills</a>
                <a href="#education" className="block text-gray-300 hover:text-lavender-400 transition-colors duration-300">Education</a>
                <a href="#contact" className="block text-gray-300 hover:text-lavender-400 transition-colors duration-300">Contact</a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 karuna.kumawat@example.com</p>
                <p>📱 +91 9876543210</p>
                <p>📍 Ujjain, Madhya Pradesh</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-400">
                  Currently pursuing B.Tech CS at SGSTS Ujjain & Web Development Diploma at NavGurukul Pune
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-300">
                <span>© 2025 Karuna Kumawat. Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and lots of</span>
                <span className="text-lavender-400">code</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-lavender-500 to-peach-500 hover:from-lavender-600 hover:to-peach-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 italic">
              "The best way to predict the future is to create it." - Peter Drucker
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;