import React from 'react';
import Image from 'next/image';
import { AppConfig } from '@/config/config';
import { usableImagePathGenerator } from '@/utils/constants/image';

const SkillSection: React.FC = () => {

  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="bg-primary py-10">
        <h2 className="text-tertiary_text text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-5xl mx-auto">
          {
            AppConfig.topSkills.map((skill, index) => (
              <div key={index} className="bg-gray-800 hover:bg-secondary text-tertiary_text hover:text-quaternary_text  p-4 rounded-lg flex flex-col items-center">
                <Image src={usableImagePathGenerator(skill.src)} alt={skill.name} width={48} height={48} className="mb-2" />
                <span className="  font-semibold">{skill.name}</span>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
};

export default SkillSection;
