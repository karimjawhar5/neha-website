// app/components/PortfolioItem.tsx
import React from 'react';
import Link from 'next/link';

interface PortfolioItemProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, subtitle, href }) => {
  return (
    <Link href={href}>
      <div className="block relative group">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Overlay at bottom left */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
