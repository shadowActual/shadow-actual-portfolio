"use client"

import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleMenu}
                    className="p-2 text-white rounded-full shadow-lg focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <IoClose size={24} /> : <FiMoreVertical size={24} />}
                </button>
            </nav>

            {/* Floating Fullscreen Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-40"
                    onClick={() => setIsOpen(false)} // Close menu when clicking the background
                >
                    <div
                        className="text-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                    >
                        <ul className="space-y-8">
                            <li>
                                <a
                                    href="/projects"
                                    className="text-8xl font-bold text-white hover:text-blue-400 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/education"
                                    className="text-8xl font-bold text-white hover:text-blue-400 transition-colors"
                                >
                                    Education
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-8xl font-bold text-white hover:text-blue-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;