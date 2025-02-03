// app/components/HeroSection.tsx
import React from 'react';
import NavMenu from './NavMenu';
import { GoArrowDown } from "react-icons/go";
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-5/6 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex justify-between h-36 items-center px-24 py-10">
        {/* left: Text */}
        <div className="text-white text-left">
          <h1 className="text-5xl font-bold">NEHA ARORA</h1>
          <p className='font-light'>Director, Editor, and Production Designer</p>
        </div>
        {/* Right: Navigation Menu */}
        <div className="flex items-center">
          <NavMenu />
        </div>
      </div>

      {/* Overlay Content 2*/}
      <div className="absolute inset-0 flex justify-between items-end px-24 py-10">
        {/* left: Text */}
        <div className="text-white text-left w-96">
          <p className='font-light text-lg'>Crafting stories that move hearts, spark ideas, and leave lasting impressions. Dive into a world where every frame tells a story worth remembering.</p>
        </div>
        {/* left: Scroll button */}
        <div className="text-white">
          <Link href={"#about"}>
          <div className='flex items-center space-x-4 hover:underline'>
            <p className=''>Scroll Down</p>
            <GoArrowDown size={20}/>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
