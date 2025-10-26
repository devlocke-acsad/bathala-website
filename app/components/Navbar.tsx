
"use client";

import Link from "next/link";

const Navbar = () => {
  return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-center items-center p-4 text-white">
        <ul className="flex justify-center gap-24 text-lg font-dungeonMode list-none">
          <li><Link href="#home" className="no-underline text-primary hover:text-white focus:outline-none">Home</Link></li>
          <li><Link href="#the-game" className="no-underline text-primary hover:text-white focus:outline-none">The Game</Link></li>
          <li><Link href="#the-world" className="no-underline text-primary hover:text-white focus:outline-none">The World</Link></li>
          <li><Link href="#features" className="no-underline text-primary hover:text-white focus:outline-none">Features</Link></li>
          <li><Link href="#the-thesis" className="no-underline text-primary hover:text-white focus:outline-none">The Thesis</Link></li>
          <li><Link href="#media" className="no-underline text-primary hover:text-white focus:outline-none">Media</Link></li>
          <li><Link href="#about" className="no-underline text-primary hover:text-white focus:outline-none">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
