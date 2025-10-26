
"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bathala">
          BATHALA
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="#home">Home</Link>
          <Link href="#the-game">The Game</Link>
          <Link href="#the-world">The World</Link>
          <Link href="#features">Features</Link>
          <Link href="#the-thesis">The Thesis</Link>
          <Link href="#media">Media</Link>
          <Link href="#about">About</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href="#home" className="block py-2">Home</Link>
          <Link href="#the-game" className="block py-2">The Game</Link>
          <Link href="#the-world" className="block py-2">The World</Link>
          <Link href="#features" className="block py-2">Features</Link>
          <Link href="#the-thesis" className="block py-2">The Thesis</Link>
          <Link href="#media" className="block py-2">Media</Link>
          <Link href="#about" className="block py-2">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
