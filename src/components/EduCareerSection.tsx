import { AppConfig } from '@/config/config';
import { EDUCATION_IMAGE, EXPERIENCE_IMAGE, usableImagePathGenerator } from '@/utils/constants/image';
import Image from 'next/image';
import React, { FC } from 'react';

type SectionCardProps = {
    title: string;
    icon?: string;
    items: { year: string; organization: string; role: string }[];
};

const SectionCard: FC<SectionCardProps> = ({ title, icon, items }) => {
    return (
        <div className="bg-secondary_bg rounded-lg p-10 w-full">
            <div className="flex items-center mb-4 gap-1">
                <div className="text-yellow-500">
                    <Image
                        src={icon as string}
                        alt={title}
                        width={30}
                        height={30}
                    />
                </div>
                <text className="text-3xl font-semibold ml-2">{title}</text>
            </div>
            <div className='flex items-center justify-center py-5'>
                <hr className="w-[90%] border-quinary_text opacity-30" />
            </div>
            <div className="space-y-5">
                {items.map((item, idx) => (
                    <div key={idx} className='flex flex-row'>
                        <div className='w-[5px] rounded-md bg-quinary_text opacity-30'></div>
                        <div className='px-4'>
                            <p className="text-gray-500 text-1xl">{item.year}</p>
                            <p className="font-semibold text-2xl">{item.organization}</p>
                            <p className="text-gray-500 text-1xl">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const EduCareerSection: React.FC = () => {

    return (
        <section id="eduCareer" className="py-20 bg-primary_bg">
            <div className="py-10 w-[80%] flex flex-col items-center mx-auto">
                <div className='text-2xl text-quaternary_text'> <span className='text-secondary'>-</span> Education and Work</div>
                <div className='text-5xl text-quaternary_text py-2'> <b>My</b> <span className='text-secondary italic'> Academic and</span></div>
                <div className='text-5xl text-secondary py-2'> <i>Professional</i> <span className='text-quaternary_text font-bold'> Journey</span></div>
                <div className="grid grid-cols-2 gap-4 px-4 mx-auto mt-10 w-[90%]">
                    <SectionCard
                        title="Education"
                        icon={usableImagePathGenerator(EDUCATION_IMAGE)}
                        items={AppConfig.education}
                    />
                    <SectionCard
                        title="Work Experience"
                        icon={usableImagePathGenerator(EXPERIENCE_IMAGE)}
                        items={AppConfig.workExperience}
                    />
                </div>
            </div>

        </section>
    );
};

export default EduCareerSection;
