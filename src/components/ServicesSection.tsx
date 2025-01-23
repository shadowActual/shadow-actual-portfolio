import { AppConfig } from '@/config/config';
import { usableImagePathGenerator } from '@/utils/constants/image';
import Image from 'next/image';
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-primary_bg text-gray-800">
      <div className="container mx-auto px-4 w-[80%]">
        <div className='text-2xl text-quaternary_text'> <span className='text-secondary'>-</span> Services</div>
        <div className='flex justify-between'>
          <div className='text-4xl text-quaternary_text pt-3'> <span className='text-secondary'>Services</span> <span className='font-bold'> I Provide</span></div>
          <div className='flex gap-4 pt-5'>
            <div className="flex items-center justify-center">
              <button className="flex items-center bg-secondary text-tertiary_text text-2px rounded-full px-1 py-1 space-x-2 hover:bg-yellow-500">
                <span className="bg-primary text-tertiary_tx px-6 py-2 rounded-full">
                  View All Services
                </span>
                <span className="bg-white text-green-900 p-2 rounded-full">
                  <Image src={usableImagePathGenerator("/icons/left_arrow.svg")} alt="View My CV" width={20} height={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {AppConfig.services.map((service, index) => (
            <div
              key={index}
              className="py-8 px-4 border rounded-lg shadow-lg text-start bg-secondary_bg flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4">
                  {service.description.length > 40
                    ? `${service.description.slice(0, 60)}...`
                    : service.description}
                </p>
              </div>
              <div className="flex items-center mt-4 gap-2">
                <h4 className="text-primary font-bold">Learn More</h4>
                <Image
                  src={usableImagePathGenerator("/icons/left_arrow_yellow.svg")}
                  alt="View My CV"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
