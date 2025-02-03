// app/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white font-light text-sm">
      {/* Horizontal line separator */}
      <hr className="border-t border-gray-500 mx-auto" />

      <div className="max-w-7xl mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Right: Full Name */}
        <div>
          NEHA ARORA PORTFOLIO SITE
        </div>
    

        {/* Center: Copyright and Date */}
        <div className="mb-2 md:mb-0 text-center">
          © {currentYear} All rights reserved
        </div>

                {/* Left: Website Domain */}
                <div className="mb-2 md:mb-0">
          <a href="https://www.nehaarora.com" className="hover:underline">
          nehaarora.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
