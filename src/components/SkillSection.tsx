import React from 'react';
import Image from 'next/image';
import { AppConfig } from '@/config/config';
import { usableImagePathGenerator } from '@/utils/constants/image';

const SkillSection: React.FC = () => {

  return (
    <section id="skills" className="py-20 bg-primary_bg">
      <div className="py-10 w-[80%] flex flex-col items-center mx-auto">
        <div className='text-2xl text-quaternary_text'> <span className='text-secondary'>-</span> My Favorite Tech Stacks</div>
        <div className='text-5xl text-secondary italic py-2'>Exploring the Technologies</div>
        <div className='text-5xl text-quaternary_text py-2 font-semibold'>The Tools Behind My Code</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 px-4 max-w-5xl mx-auto mt-10">
          {
            AppConfig.topSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary_bg text-quaternary_text flex flex-col items-center px-3"
                style={{ borderRadius: "20px", paddingTop: "1rem", paddingBottom: "2rem" }}
              >

                <div className="rounded-full h-20 w-20 bg-primary_bg flex items-center justify-center">
                  <Image
                    src={usableImagePathGenerator(skill.src)}
                    alt={skill.name}
                    width={48}
                    height={48}
                  />
                </div>
                <span className="mt-4 text-quaternary_text text-1xl font-semibold">{skill.name}</span>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  );
};

export default SkillSection;
