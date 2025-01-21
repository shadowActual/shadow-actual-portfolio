import React from 'react';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  const projects = [
    { title: 'E-commerce App', image: '/images/project1.png' },
    { title: 'Product Landing Page', image: '/images/project2.png' },
    { title: 'Portfolio Website', image: '/images/project3.png' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">My Latest Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div key={index}>
              <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
