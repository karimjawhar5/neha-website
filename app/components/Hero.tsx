import React from "react";
import ScrollButton from "./ScrollButton";
import Header from "./Header";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content container */}
      <div className="relative flex flex-col justify-between h-full px-36 py-20">
        {/* Header Component */}
        <Header />

        {/* Footer Text */}
        <div className="flex justify-between items-end w-full text-white">
          <div className="max-w-md">
            <p className="text-lg font-light leading-relaxed">
              Every frame tells a story—here's where my journey as a director, editor, and creator begins.
            </p>
          </div>
          {/* Scroll Button */}
          <ScrollButton direction="down" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
