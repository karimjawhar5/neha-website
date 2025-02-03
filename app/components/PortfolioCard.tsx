import React from 'react'

interface PortfolioCardProps {
  title: string;
  role: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, role, imageUrl }) => (
  <div className="relative group overflow-hidden shadow-lg">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{role}</p>
    </div>
  </div>
);

export default PortfolioCard;