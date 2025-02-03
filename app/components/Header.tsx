import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full">
      {/* Left: Title and Subtitle */}
      <div>
        <h1 className="font-heading text-8xl">NEHA ARORA</h1>
        <p className="font-body text-lg font-light">Director, Editor, and Production Designer</p>
      </div>

      {/* Right: Navigation Menu */}
      <nav className="font-body flex space-x-10">
        <Link href="/edits" className="text-md font-bold hover:underline">
          EDITS
        </Link>
        <Link href="/films" className="text-md font-bold hover:underline">
          FILMS
        </Link>
        <Link href="/setdesign" className="text-md font-bold hover:underline">
          SET DESIGN
        </Link>
        <Link href="/photography" className="text-md font-bold hover:underline">
          PHOTOGRAPHY
        </Link>
        <Link href="/about" className="text-md font-bold hover:underline">
          ABOUT ME
        </Link>
      </nav>
    </header>
  );
};

export default Header;
