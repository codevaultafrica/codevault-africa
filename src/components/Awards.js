import React from 'react';

const Awards = () => {
  const awards = [
    { icon: '🏆', title: 'Best Leadership 2023' },
    { icon: '🤝', title: 'Google Startups Partner 2025' },
    { icon: '⭐', title: 'Best Software Product 2023' },
    { icon: '🌟', title: 'Best Emerging Tech Company' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-green-600 after:rounded">
            Awards & Recognition
          </h2>
          <p className="text-lg md:text-xl text-gray-300">Accolades that keep us going</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="text-center p-8 md:p-10 rounded-2xl bg-gray-700 border border-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-2xl md:text-3xl">
                {award.icon}
              </div>
              <h3 className="text-white text-base md:text-lg font-semibold">{award.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;