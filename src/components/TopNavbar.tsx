'use client';

import React, { useEffect, useState } from 'react';

const TopNavbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-green-700/20 backdrop-blur-md' : 'bg-green-700'
                }`}
        >
            <div className="flex justify-between items-center p-4 max-w-7xl mx-auto text-white">
                <div className="text-2xl font-bold">Portfolio</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#services" className="hover:underline">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default TopNavbar;
