import React from 'react';

const Frameworks = () => {
  const frameworks = [
    {
      title: 'AI-Enabled Semantic Search Framework',
      description: 'Leveraging AI and Gen AI for secure, insightful data retrieval, enabling faster decisions and enhanced productivity.'
    },
    {
      title: 'AI-Based Payment Detection System',
      description: 'Detect, prevent, and mitigate payments fraud in real-time, ensuring compliance and security for financial transactions at scale.'
    },
    {
      title: 'Loyalty Management System',
      description: 'Strengthen customer connections with a white-label loyalty solution designed to drive retention and value.'
    }
  ];

  return (
    <section id="frameworks" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-green-600 after:rounded">
            Our Custom Digital Frameworks
          </h2>
          <p className="text-lg md:text-xl text-gray-300">Engineered for Success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-8 md:p-10 rounded-2xl border border-green-500/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-gradient-to-br hover:from-green-500/15 hover:to-green-600/8"
            >
              <h3 className="text-lg md:text-xl mb-4 text-white font-semibold">{framework.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{framework.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;