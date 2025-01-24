import { AppConfig } from '@/config/config';
import { usableImagePathGenerator } from '@/utils/constants/image';
import Image from 'next/image';
import React from 'react'

export const NextProject = () => {
    return (
        <section className="lg:flex-row gap-8 lg:gap-16 px-6 lg:px-12 py-12 bg-primary_bg flex justify-center">
            <div className='container flex flex-col justify-center items-center mx-auto'>
                <div className='flex w-[80%]'>
                    {/* Left Section */}
                    <div className="flex-1 space-y-6 px-12">
                        <div className='text-2xl text-quaternary_text'> <span className='text-secondary'>-</span> Contact Us</div>
                        <h2 className="text-4xl lg:text-4xl font-bold text-quaternary_text">
                            Let’s Talk for <span className="text-secondary italic font-normal">Your Next Projects</span>
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={usableImagePathGenerator("/icons/phone.png")}
                                    alt="Phone"
                                    width={20}
                                    height={20}
                                />
                                <p className="text-gray-700">{AppConfig.contact.phone}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={usableImagePathGenerator("/icons/email.png")}
                                    alt="Phone"
                                    width={20}
                                    height={20}
                                />
                                <p className="text-gray-700">{AppConfig.contact.email}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={usableImagePathGenerator("/icons/location.png")}
                                    alt="Phone"
                                    width={20}
                                    height={20}
                                />
                                <p className="text-gray-700">{AppConfig.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="">Name <span>*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Email <span>*</span></label>
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="">Phone <span>*</span></label>
                                    <input
                                        type="tel"
                                        placeholder="Phone *"
                                        className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Interested In <span>*</span></label>
                                    <select
                                        className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    >
                                        <option>I’m Interested in</option>
                                        <option>Web Development</option>
                                        <option>Mobile App Development</option>
                                        <option>UI/UX Design</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="">Budget <span>*</span></label>
                                    <select
                                        className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    >
                                        <option>Budget Range (USD)</option>
                                        <option>$1,000 - $5,000</option>
                                        <option>$5,000 - $10,000</option>
                                        <option>$10,000+</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Country <span>*</span></label>
                                    <select
                                        className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    >
                                        <option>Country</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>India</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Description <span>*</span></label>
                                <textarea
                                    placeholder="Your Message *"
                                    className="w-full p-3 border-2 border-quinary_text bg-secondary_bg rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                                    rows={5}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex gap-4 pt-10'>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center bg-secondary text-tertiary_text text-2px rounded-full px-1 py-1 space-x-2 hover:bg-secondary">
                            <span className="bg-primary text-tertiary_tx px-6 py-2 rounded-full">
                                Submit
                            </span>
                            <span className="bg-white text-green-900 p-2 rounded-full">
                                <Image src={usableImagePathGenerator("/icons/left_arrow.svg")} alt="View My CV" width={20} height={20} />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};