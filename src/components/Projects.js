import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Created a one stop perfume online shop',
      description: 'Revolutionary e-commerce platform with advanced features and seamless user experience',
      category: 'E-Commerce Platform'
    },
    {
      title: 'A Digital Solution for Business Management',
      description: 'Comprehensive digital management system for streamlined product management',
      category: 'Business Management System'
    },
    {
      title: 'Custom Mobile Solution for Streamlined Operations',
      description: 'Advanced mobile application designed to optimize business operations and workflow',
      category: 'Mobile Operations App'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-green-600 after:rounded">
            Discover Our Successful Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Look at our remarkable track record, featuring a collection of accomplished projects highlighting our expertise in delivering innovative and impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl overflow-hidden border border-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="h-40 md:h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-base md:text-lg text-center p-4 font-semibold">
                {project.category}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-base md:text-lg mb-3 text-white font-semibold leading-tight">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;