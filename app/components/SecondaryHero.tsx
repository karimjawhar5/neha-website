import React from "react";
import Header from "./Header";

interface SecondaryHeroProps {
  imageUrl: string;
}

const SecondaryHero: React.FC<SecondaryHeroProps> = ({ imageUrl }) => {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content container */}
      <div className="relative flex flex-col justify-between h-full px-8 md:px-36 py-20">
        {/* Header Component */}
        <Header />
      </div>
    </div>
  );
};

export default SecondaryHero;
