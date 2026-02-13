import React, { useEffect, useRef, useState } from 'react';
import { MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { aboutData } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#dc143c]" />
            <span className="text-[#dc143c] text-sm font-medium uppercase tracking-widest">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {aboutData.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {aboutData.story.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Journey Markers */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                <MapPin className="w-4 h-4 text-[#dc143c]" />
                <span className="text-sm text-gray-700">Simichaur, Gulmi</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                <GraduationCap className="w-4 h-4 text-[#dc143c]" />
                <span className="text-sm text-gray-700">PhD Researcher</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                <Sparkles className="w-4 h-4 text-[#dc143c]" />
                <span className="text-sm text-gray-700">New Zealand</span>
              </div>
            </div>
          </div>

          {/* Stats Cards with Light Glassmorphism */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 gap-6">
              {aboutData.highlights.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#dc143c]/30 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#dc143c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-between">
                    <span className="text-gray-500 text-lg">{stat.label}</span>
                    <span className="text-5xl font-bold text-gray-900 group-hover:text-[#dc143c] transition-colors duration-300">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
