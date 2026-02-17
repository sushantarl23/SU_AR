import React from 'react';
import { Heart, ArrowUp, Linkedin, GraduationCap, FileText } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/mock';

const iconMap = {
  Linkedin: Linkedin,
  GraduationCap: GraduationCap,
  FileText: FileText,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-gray-900 mb-2">
              {personalInfo.brand}
            </span>
            <p className="text-gray-500 text-sm">
              Medicinal Chemistry Researcher
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-[#dc143c]/50 hover:bg-[#dc143c]/10 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 text-gray-500 group-hover:text-[#dc143c] transition-colors duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-300 group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center group-hover:border-[#dc143c]/50 group-hover:bg-[#dc143c]/10 transition-all duration-300">
              <ArrowUp className="w-4 h-4 group-hover:text-[#dc143c] transition-colors duration-300" />
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 | {personalInfo.brand} | Sushant Aryal, Ph.D.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-[#dc143c]" /> in New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
