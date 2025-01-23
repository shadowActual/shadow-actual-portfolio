import { AppConfig } from '@/config/config';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <>

      <section
        className="bg-primary_bg min-h-[80vh] w-[70%] flex items-center justify-center"
      >
        <div className='flex items-center justify-center'>
          <div className="container mx-auto px-1 w-[60%]">
            <div className='text-4xl'>Hello There!</div>
            <div className='text-6xl pt-4 font-bold'>I am <text className='text-secondary italic underline'>{AppConfig.name},</text></div>
            <div className='text-6xl font-bold'>{AppConfig.specialization}</div>
            <div className='text-6xl font-bold'>Based in {AppConfig.country}</div>
            <div className='text-secondary_text text-2xl pt-6'>{AppConfig.heroShortIntro}</div>
            <div className='flex gap-4 pt-5'>
              <div className="flex items-center justify-center">
                <button className="flex items-center bg-secondary text-tertiary_text text-2px rounded-full px-1 py-1 space-x-2 hover:bg-yellow-500">
                  <span className="bg-primary text-tertiary_tx px-6 py-2 rounded-full">
                    View My CV
                  </span>
                  <span className="bg-white text-green-900 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.804 8L6.5 11.11V4.89L10.804 8z" />
                    </svg>
                  </span>
                </button>
              </div>

              <button className="flex items-center text-quaternary_text rounded-full px-6 py-1 space-x-2 border-2 border-quaternary_text">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="h-16 bg-primary transform -skew-y-2 origin-bottom-center"></div>
        <div className="absolute top-0 w-full h-16 bg-secondary flex items-center justify-center space-x-6">
          <div className="flex space-x-8 text-quaternary_text text-lg font-semibold">
            {
              AppConfig.servicesShortList.map((service, index) => (
                <span key={index}>{service}</span>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;