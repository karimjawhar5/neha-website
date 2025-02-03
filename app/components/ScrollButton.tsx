'use client';

import React from 'react';

interface ScrollButtonProps {
  direction: 'down' | 'up'; // Prop to switch between scroll directions
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction }) => {
  const handleScroll = () => {
    const targetSectionId = direction === 'down' ? 'next-section' : 'top-section';
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="flex flex-col items-center cursor-pointer"
    >
      <span className="text-white text-sm mb-1">
        {direction === 'down' ? 'Scroll down' : 'Scroll up'}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            direction === 'down'
              ? 'M19 9l-7 7-7-7' // Arrow pointing down
              : 'M19 15l-7-7-7 7' // Arrow pointing up
          }
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
