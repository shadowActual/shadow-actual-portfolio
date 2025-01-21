import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'App Design', description: 'Creating user-friendly mobile apps.' },
    { title: 'Website Design', description: 'Crafting modern websites.' },
    { title: 'Dashboard', description: 'Designing custom dashboards.' },
  ];

  return (
    <section id="services" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Services I Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
