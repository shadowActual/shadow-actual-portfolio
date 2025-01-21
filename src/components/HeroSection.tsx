import { AppConfig } from '@/config/config';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-green-500 text-white text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">I&apos;m {AppConfig.name}</h1>
        <p className="mt-4 text-xl">Product Designer Based in USA.</p>
        <button className="mt-6 px-6 py-2 bg-yellow-400 text-green-900 font-bold rounded-lg">Contact Me</button>
      </div>
    </section>
  );
};

export default HeroSection;