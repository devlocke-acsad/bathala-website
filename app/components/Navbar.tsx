
"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-dungeonMode">
          BATHALA
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="#home">Home</Link>
          <Link href="#the-game">The Game</Link>
          <Link href="#the-world">The World</Link>
          <Link href="#features">Features</Link>
          <Link href="#the-thesis">The Thesis</Link>
          <Link href="#media">Media</Link>
          <Link href="#about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
