// app/components/NavMenu.tsx
import React from 'react';
import Link from 'next/link';

const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold">
        <li>
          <Link href="#home" className="text-white hover:underline">
            HOME
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-white hover:underline">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="#portfolio" className="text-white hover:underline">
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-white hover:underline">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
