import React from 'react';
import Image from 'next/image';
import { usableImagePathGenerator } from '@/utils/constants/image';
import { AppConfig } from '@/config/config';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary_bg">
      <div className="container mx-auto px-4 w-[80%]">
        <div className='text-3xl text-quaternary_text'> <span className='text-secondary'>-</span> My Portfolio</div>
        <div className='flex justify-between'>
          <div className='text-5xl text-quaternary_text pt-3'> <span className='font-bold'>My  Latest</span> <span className='text-secondary italic'> Projects</span></div>
          <div className='flex gap-4 pt-5'>
            <div className="flex items-center justify-center">
              <button className="flex items-center bg-secondary text-tertiary_text text-2px rounded-full px-1 py-1 space-x-2 hover:bg-yellow-500">
                <span className="bg-primary text-tertiary_tx px-6 py-2 rounded-full">
                  View All Projects
                </span>
                <span className="bg-white text-green-900 p-2 rounded-full">
                  <Image src={usableImagePathGenerator("/icons/left_arrow.svg")} alt="View My CV" width={20} height={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 ">
          {AppConfig.projects.map((project, index) => (
            <div key={index} className='bg-primary_bg rounded-3xl py-4 px-4'>
              <Image src={project.image} alt={project.title} width={300} height={500} className="w-full h-48 object-cover rounded-lg" />
              <div className='py-4'>
                {

                  project.tags.map((tag, index) => {
                    return (
                      <span key={index} className="inline-block bg-secondary text-quaternary_text rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tag}</span>
                    )
                  })
                }
              </div>
              <div className='flex w-full justify-between'>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="bg-quaternary_text text-green-900 p-2 rounded-full">
                  <Image src={usableImagePathGenerator("/icons/left_arrow_yellow.svg")} alt="See more" width={25} height={25} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
