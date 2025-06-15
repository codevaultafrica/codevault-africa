import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
      {/* African Map Background */}
      <div className="absolute inset-0 opacity-15 african-map-bg animate-pulse" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-transparent to-green-600/10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30 grid-pattern" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight text-gradient animate-fadeInUp">
            Drive Digital Transformation For Africa
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-300 animate-fadeInUp">
            Empowering Nigerian businesses and organizations with tailored, cutting-edge digital solutions that achieve excellence and meaningful impact
          </p>
          
          <p className="text-base md:text-lg mb-12 max-w-4xl mx-auto text-gray-400 animate-fadeInUp">
            We deliver comprehensive software solutions, payment systems, IT consultancy, and digital transformation services designed specifically for the Nigerian market and beyond.
          </p>

          <div className="flex justify-center gap-8 md:gap-16 mt-12 flex-wrap animate-fadeInUp">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '100+', label: 'Projects Delivered' },
              { number: '80+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center min-w-28 p-4 md:p-6 rounded-xl bg-green-500/15 border border-green-500/40 backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-x-full animate-shimmer" />
                <span className="text-3xl md:text-4xl font-bold block text-green-500 relative z-10">{stat.number}</span>
                <span className="text-sm md:text-base text-gray-300 relative z-10">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;