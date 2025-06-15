import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-lg border-b border-green-500/20"
      style={{
        background: scrolled ? 'rgba(26, 26, 26, 0.98)' : 'rgba(26, 26, 26, 0.95)'
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-xl font-bold text-white no-underline hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center border-2 border-green-500 relative">
              <span className="text-green-500 font-mono text-base font-bold">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-lg">CodeVault</span>
              <span className="text-green-500 text-sm font-medium">Africa</span>
            </div>
          </button>

          <ul className={`flex list-none gap-10 transition-all duration-300 lg:flex ${isMenuOpen ? 'flex' : 'hidden'} lg:static absolute top-full left-0 w-full lg:w-auto lg:bg-transparent bg-gray-900/98 lg:backdrop-blur-none backdrop-blur-lg flex-col lg:flex-row lg:p-0 p-8 lg:shadow-none shadow-lg gap-6 lg:gap-10 lg:border-none border-t border-green-500/20`}>
            {[
              { name: 'Services', id: 'services' },
              { name: 'Projects', id: 'projects' },
              { name: 'Solutions', id: 'frameworks' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  className="text-gray-300 font-medium transition-all duration-300 relative py-2 hover:text-green-500 bg-transparent border-none cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="lg:hidden flex flex-col cursor-pointer gap-1 bg-transparent border-none p-2"
            onClick={toggleMenu}
          >
            <span className="w-6 h-0.5 bg-green-500 transition-all duration-300 rounded"></span>
            <span className="w-6 h-0.5 bg-green-500 transition-all duration-300 rounded"></span>
            <span className="w-6 h-0.5 bg-green-500 transition-all duration-300 rounded"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;