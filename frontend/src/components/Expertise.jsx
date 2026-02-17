import React, { useEffect, useRef, useState } from 'react';
import { FlaskConical, Atom, Microscope, ArrowRight } from 'lucide-react';
import { expertiseData } from '../data/mock';

const iconMap = {
  FlaskConical: FlaskConical,
  Atom: Atom,
  Microscope: Microscope,
};

const Expertise = () => {
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
      id="expertise"
      ref={sectionRef}
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#dc143c]" />
            <span className="text-[#dc143c] text-sm font-medium uppercase tracking-widest">
              Research Focus
            </span>
            <span className="w-12 h-px bg-[#dc143c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Advancing medicinal chemistry through innovative synthesis and drug development
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-[#dc143c]/40 transition-all duration-500 hover:shadow-xl overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#dc143c]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#dc143c]/10 border border-[#dc143c]/20 flex items-center justify-center mb-6 group-hover:bg-[#dc143c]/20 group-hover:border-[#dc143c]/40 transition-all duration-500">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-[#dc143c]" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#dc143c] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-[#dc143c] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#dc143c]/5 rounded-full blur-3xl group-hover:bg-[#dc143c]/10 transition-colors duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
