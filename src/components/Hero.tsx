import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-lavender-50 via-peach-50 to-mint-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-peach-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-mint-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-lavender-300 to-peach-300 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              KK
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 font-inter">
            Karuna Kumawat
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">
            Aspiring Web Developer & Future Tech Entrepreneur
          </h2>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-500 mb-8 italic font-light">
            "Crafting Code, Creating Dreams"
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate B.Tech student turning ideas into reality through code. 
            Building meaningful projects with creativity, empathy, and purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-lavender-500 text-lavender-600 hover:bg-lavender-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:karuna@example.com" className="text-gray-600 hover:text-lavender-600 transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-lavender-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-lavender-600 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown 
            size={32} 
            className="text-gray-400 cursor-pointer hover:text-lavender-500 transition-colors duration-300"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;