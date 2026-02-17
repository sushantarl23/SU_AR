import React, { useEffect, useRef, useState } from 'react';
import { Send, Linkedin, GraduationCap, FileText, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { socialLinks } from '../data/mock';

const iconMap = {
  Linkedin: Linkedin,
  GraduationCap: GraduationCap,
  FileText: FileText,
};

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (mock)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Store in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/50 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#dc143c]/5 rounded-full blur-3xl" />
      </div>

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
              Get In Touch
            </span>
            <span className="w-12 h-px bg-[#dc143c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Interested in research collaboration or academic discussions? I'd love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dc143c]/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#dc143c]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Dr. Jane Smith"
                      className="w-full bg-slate-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#dc143c]/50 focus:ring-[#dc143c]/20 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="jane.smith@university.edu"
                      className="w-full bg-slate-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#dc143c]/50 focus:ring-[#dc143c]/20 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="I'm interested in discussing potential research collaboration..."
                      rows={5}
                      className="w-full bg-slate-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#dc143c]/50 focus:ring-[#dc143c]/20 rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#dc143c] hover:bg-[#b01030] text-white py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#dc143c]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Social Links & Info */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Connect With Me
                </h3>
                <p className="text-gray-500 mb-8">
                  Find me on academic networks and stay updated on my latest research and publications.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#dc143c]/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#dc143c]/10 flex items-center justify-center group-hover:bg-[#dc143c]/20 transition-colors duration-300">
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 text-[#dc143c]" />
                        )}
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium group-hover:text-[#dc143c] transition-colors duration-300">
                          {link.name}
                        </span>
                        <p className="text-sm text-gray-400">View profile</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Current Position */}
              <div className="mt-8 p-6 rounded-2xl bg-[#dc143c]/5 border border-[#dc143c]/20">
                <h4 className="text-gray-900 font-semibold mb-2">Current Position</h4>
                <p className="text-gray-700 mb-1">Postdoctoral Fellow</p>
                <p className="text-gray-500 text-sm">University of Otago, New Zealand</p>
                <p className="text-gray-400 text-sm mt-2">
                  Project: "Cancer targeted biorthogonal prodrugs"
                </p>
                <p className="text-gray-400 text-sm">
                  Supervisor: A/Prof. Allan Gamble
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
