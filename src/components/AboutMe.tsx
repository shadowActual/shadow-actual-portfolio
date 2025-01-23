import React from 'react';
import { AppConfig } from '@/config/config';
import { getTotalYearsOfExperience } from '@/utils/helpers';
import Image from 'next/image';
import { usableImagePathGenerator } from '@/utils/constants/image';

const AboutMe: React.FC = () => {

    return (
        <section
            className="bg-primary min-h-[80vh] w-[100%] flex items-center justify-center"
        >
            <div className='flex items-center justify-center w-[70%] py-30'>
                <div className="container mx-auto px-1 w-[40%]">
                </div>
                <div className="container mx-auto px-1 w-[60%]">
                    <div className='text-2xl text-tertiary_text'> <span className='text-secondary'>-</span> About Me</div>
                    <div className='text-5xl text-tertiary_text pt-4'>Who is <text className='text-secondary italic'>{AppConfig.name}?</text></div>
                    <div className='text-quinary_text text-1xl pt-5'>{AppConfig.heroShortIntro}</div>
                    <div className='flex flex-row justify-between gap-4 pt-6'>
                        <div>
                            <div className='text-secondary text-4xl'>600+</div>
                            <div className='text-quinary_text text-[18px]'>Project Completed</div>
                        </div>
                        <div>
                            <div className='text-secondary text-4xl'>50+</div>
                            <div className='text-quinary_text text-[18px]'>Industry Covered</div>
                        </div>
                        <div>
                            <div className='text-secondary text-4xl'>{getTotalYearsOfExperience()}</div>
                            <div className='text-quinary_text text-[18px]'>Years of Experience</div>
                        </div>
                    </div>

                    <div className='flex gap-4 pt-5'>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center bg-secondary text-tertiary_text text-2px rounded-full px-1 py-1 space-x-2 hover:bg-yellow-500">
                                <span className="bg-primary text-tertiary_tx px-6 py-2 rounded-full">
                                    Download CV
                                </span>
                                <span className="bg-white text-green-900 p-2 rounded-full">
                                    <Image src={usableImagePathGenerator("/icons/download.svg")} alt="View My CV" width={20} height={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
