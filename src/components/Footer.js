import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-950 to-gray-900 border-t-2 border-green-500 pt-16 md:pt-20 pb-8 relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border-2 border-green-500">
                <span className="text-green-500 font-mono text-xl font-bold">&lt;/&gt;</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-xl md:text-2xl font-bold">CodeVault</span>
                <span className="text-green-500 text-base md:text-lg font-medium">Africa</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-xs text-sm md:text-base">
              Empowering Nigerian businesses with cutting-edge digital solutions, driving innovation and growth across Africa's technology landscape.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 md:mb-8 text-white text-base md:text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-green-500 after:rounded">
              Services
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {['Software Solutions', 'Payment Systems', 'IT Consultancy', 'Digital Transformation'].map((service, index) => (
                <li key={index}>
                  <button
                    className="text-gray-300 text-sm transition-all duration-300 hover:text-green-500 hover:translate-x-1 bg-transparent border-none cursor-pointer p-0 flex items-center gap-2 group"
                    onClick={() => scrollToSection('services')}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-green-500 -translate-x-2 group-hover:translate-x-0">→</span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 md:mb-8 text-white text-base md:text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-green-500 after:rounded">
              Company
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                { name: 'About Us', id: 'about' },
                { name: 'Our Work', id: 'projects' },
                { name: 'Solutions', id: 'frameworks' },
                { name: 'Careers', id: 'contact' }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    className="text-gray-300 text-sm transition-all duration-300 hover:text-green-500 hover:translate-x-1 bg-transparent border-none cursor-pointer p-0 flex items-center gap-2 group"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-green-500 -translate-x-2 group-hover:translate-x-0">→</span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 md:mb-8 text-white text-base md:text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-green-500 after:rounded">
              Get In Touch
            </h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 p-3 md:p-4 bg-green-500/5 rounded-lg border-l-2 border-green-500">
                <span className="text-green-500 text-base md:text-lg mt-0.5">📍</span>
                <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  C05 Kabuga City Plaza Opp Taj Bank Kano, Nigeria
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 md:p-4 bg-green-500/5 rounded-lg border-l-2 border-green-500">
                <span className="text-green-500 text-base md:text-lg mt-0.5">📞</span>
                <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  +234 808 030 0708<br />
                  +234 816 380 6023
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 md:p-4 bg-green-500/5 rounded-lg border-l-2 border-green-500">
                <span className="text-green-500 text-base md:text-lg mt-0.5">✉️</span>
                <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  info@codevaultafrica.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 md:pt-8 border-t border-green-500/20 text-gray-500 text-xs md:text-sm">
          <p>&copy; 2025 CodeVault Africa. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;