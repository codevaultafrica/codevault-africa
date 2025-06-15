import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Software Solutions',
      description: 'Custom software development tailored to your business needs. From web applications to enterprise systems, we build scalable solutions that drive efficiency and growth.'
    },
    {
      icon: '💳',
      title: 'Payment Solutions',
      description: 'Secure, reliable payment systems and fintech solutions designed for the Nigerian market. Integration with local and international payment gateways.'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations, enhance customer experience, and accelerate growth in the digital age.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-white relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-green-600 after:rounded">
            Empowering Nigerian Businesses
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            with cutting-edge Software Solutions, Payment Systems, IT Consultancy & Digital Transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 md:p-10 rounded-2xl border border-green-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="w-12 h-12 md:w-15 md:h-15 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 text-xl md:text-2xl">
                {service.icon}
              </div>
              
              <h3 className="text-lg md:text-xl mb-4 text-white font-semibold">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;