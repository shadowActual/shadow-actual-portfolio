'use client';

import { AppConfig } from '@/config/config';
import React, { useEffect, useState } from 'react';

const TopNavbar: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        // Detect scroll for changing navbar background
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Detect the active section based on scrolling
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '0px', threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] z-50 transition-all rounded-[30px] duration-300 bg-primary `}
        // ${isScrolled ? 'bg-green-700/20 backdrop-blur-md' : ''
        // }

        >
            <div className="flex justify-between items-center p-2 w-full mx-auto text-tertiary_text">
                {/* Logo and Title */}
                <div className="text-2xl font-bold flex items-center">
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-primary text-sm font-bold mr-2"
                        style={{ minWidth: '2rem', minHeight: '2rem' }}
                    >
                        {AppConfig.callSign}
                    </div>
                    {AppConfig.shortName}
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#skills"
                            className={`hover:underline ${activeSection === 'skills' ? 'text-secondary font-bold' : 'text-tertiary_text'
                                }`}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`hover:underline ${activeSection === 'projects' ? 'text-secondary font-bold' : 'text-tertiary_text'
                                }`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`hover:underline ${activeSection === 'contact' ? 'text-secondary font-bold' : 'text-tertiary_text'
                                }`}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#career"
                            className={`hover:underline ${activeSection === 'contact' ? 'text-secondary font-bold' : 'text-tertiary_text'
                                }`}
                        >
                            Career
                        </a>
                    </li>
                </ul>

                {/* Contact Me Button */}
                <div
                    className="flex items-center justify-center w-40 h-10 rounded-full bg-primary_bg text-primary text-sm font-bold"
                    style={{ minWidth: '2rem', minHeight: '2rem' }}
                >
                    Contact Me
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
