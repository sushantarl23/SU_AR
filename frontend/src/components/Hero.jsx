import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToExpertise = () => {
    const element = document.querySelector('#expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-slate-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#dc143c]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Pre-heading */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <span className="w-2 h-2 bg-[#dc143c] rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Sustaining the Digital Frontier</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            I am{' '}
            <span className="text-[#dc143c] relative">
              {personalInfo.brand}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#dc143c]/30 rounded-full" />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
            {personalInfo.name}
          </p>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToExpertise}
            className="bg-[#dc143c] hover:bg-[#b01030] text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#dc143c]/25 hover:scale-105"
          >
            Explore My Vision
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors duration-300 group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default Hero;
