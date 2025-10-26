
"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="text-4xl font-dungeonMode">
          BATHALA
        </Link>
        <div className="flex gap-8 text-lg">
          <Link href="#home" className="hover:text-gray-400">Home</Link>
          <Link href="#the-game" className="hover:text-gray-400">The Game</Link>
          <Link href="#the-world" className="hover:text-gray-400">The World</Link>
          <Link href="#features" className="hover:text-gray-400">Features</Link>
          <Link href="#the-thesis" className="hover:text-gray-400">The Thesis</Link>
          <Link href="#media" className="hover:text-gray-400">Media</Link>
          <Link href="#about" className="hover:text-gray-400">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
