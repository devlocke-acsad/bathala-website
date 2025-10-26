
import Link from "next/link";

const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
