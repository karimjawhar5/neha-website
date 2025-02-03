// app/components/AboutSection.tsx
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        {/* Left Column - Text & Links */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-6 font-light leading-relaxed">
            I’m a passionate film student at Sheridan College dedicated to storytelling through cinematography, editing, and production design. My creative journey is driven by a love for visual art and technical innovation, capturing the beauty in every frame.
          </p>
          <p className="mb-6 font-light leading-relaxed">
            I’m a passionate film student at Sheridan College dedicated to storytelling through cinematography, editing, and production design. My creative journey is driven by a love for visual art and technical innovation, capturing the beauty in every frame.
          </p>
          
          {/* My Films Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">My Latest Films</h3>
            <div className="flex space-x-4">
              {/* Video Thumbnail 1 */}
              <a href="#" className="block w-48">
                <video
                  poster="/videos/film-1.jpg"
                  className="w-full h-auto object-cover rounded-sm shadow-lg"
                  playsInline
                  muted
                >
                  <source src="/videos/film-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
              {/* Video Thumbnail 2 */}
              <a href="/videos/film2" className="block w-48">
                <video
                  poster="/videos/film-2.jpg"
                  className="w-full h-auto object-cover rounded-sm shadow-lg"
                  playsInline
                  muted
                >
                  <source src="/videos/film-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            </div>
        </div>

        {/* Right Column - Image(s) */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/images/about-image.jpg"
            alt="Neha Arora Portrait"
            className="rounded-md shadow-lg w-full object-cover"
          />
          {/* Optionally, you can add more images here */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
