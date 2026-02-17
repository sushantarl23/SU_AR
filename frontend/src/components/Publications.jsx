import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink, Award } from 'lucide-react';
import { publicationsData, awardsData } from '../data/mock';

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#dc143c]" />
            <span className="text-[#dc143c] text-sm font-medium uppercase tracking-widest">
              Academic Work
            </span>
            <span className="w-12 h-px bg-[#dc143c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications & Awards
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Peer-reviewed research contributions advancing the field of medicinal chemistry
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Publications List */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#dc143c]" />
              Selected Publications
            </h3>
            <div className="space-y-6">
              {publicationsData.map((pub, index) => (
                <a
                  key={index}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl bg-slate-50 border border-gray-200 hover:border-[#dc143c]/30 hover:bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Publication Image */}
                    <div className="sm:w-48 h-40 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Publication Content */}
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="text-gray-900 font-medium mb-2 group-hover:text-[#dc143c] transition-colors duration-300 leading-snug line-clamp-2">
                            {pub.title}
                          </h4>
                          <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                            {pub.authors}
                          </p>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-sm text-gray-600 font-medium">
                              {pub.journal} ({pub.year})
                            </span>
                            <span className="text-sm text-gray-400">
                              {pub.volume}
                            </span>
                          </div>
                          {pub.highlight && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 mt-2 rounded-full bg-[#dc143c]/10 text-[#dc143c] text-xs font-medium">
                              <Award className="w-3 h-3" />
                              {pub.highlight}
                            </span>
                          )}
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-gray-200 group-hover:border-[#dc143c]/30 group-hover:bg-[#dc143c]/10 transition-all duration-300">
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#dc143c] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#dc143c]" />
              Awards & Scholarships
            </h3>
            <div className="space-y-4">
              {awardsData.map((award, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#dc143c]/5 to-slate-50 border border-[#dc143c]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#dc143c]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#dc143c] font-bold text-lg">{award.year.slice(-2)}</span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">
                        {award.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {award.institution}
                      </p>
                      {award.duration && (
                        <p className="text-xs text-gray-400 mt-1">
                          Duration: {award.duration}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conference Presentations Note */}
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-gray-200">
              <h4 className="text-gray-900 font-semibold mb-2">
                Conference Presentations
              </h4>
              <p className="text-sm text-gray-500 mb-3">
                Including presentations at Pacifichem 2025, NZIC Conferences, and UC Research Showcases.
              </p>
              <span className="text-[#dc143c] text-2xl font-bold">6+</span>
              <span className="text-gray-400 text-sm ml-2">oral & poster presentations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
