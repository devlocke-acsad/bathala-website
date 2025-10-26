"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // ...existing code...
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 ${scrolled ? 'bg-[#181415] shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo and desktop nav here if needed */}
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#77888C] focus:outline-none p-2"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div
              className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'flex' : 'hidden'} bg-[#150E10]`}
              style={{ minHeight: '100vh', width: '100vw' }}
            >
              {/* Single close button, positioned top right, no duplicate */}
              <button
                className="absolute top-6 right-6 text-gray-400 text-3xl bg-transparent"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center justify-center gap-12 w-full">
                  {[
                    { href: "#home", label: "Home" },
                    { href: "#the-game", label: "Game" },
                    { href: "#the-world", label: "World" },
                    { href: "#features", label: "Features" },
                    { href: "#the-thesis", label: "Thesis" },
                    { href: "#media", label: "Media" },
                    { href: "#about", label: "About" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-dungeonMode text-2xl text-[#8a9a9a] hover:text-[#b8c6c6] transition-colors duration-200 text-center w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
// ...existing code...

// ...existing code...
  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 ${scrolled ? 'bg-[#181415] shadow-lg' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo and desktop nav here if needed */}
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#77888C] focus:outline-none p-2"
              style={{ backgroundColor: 'transparent', border: 'none' }}
              aria-label="Open menu"
            >
              <Menu size={28} color="#77888C" />
            </button>
          </div>
        </div>
  </nav>
  );
}
export default Navbar;
          className="fixed inset-0 z-50 md:hidden flex bg-[#150E10] w-full h-full"
          style={{ minHeight: '100vh', width: '100vw' }}
        >
          <button
            className="absolute top-6 right-6 text-gray-400 text-3xl bg-transparent"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center justify-center gap-16 w-full">
              {[
                { href: "#home", label: "Home" },
                { href: "#the-game", label: "Game" },
                { href: "#the-world", label: "World" },
                { href: "#features", label: "Features" },
                { href: "#the-thesis", label: "Thesis" },
                { href: "#media", label: "Media" },
                { href: "#about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-dungeonMode text-2xl text-[#8a9a9a] hover:text-[#b8c6c6] transition-colors duration-200 text-center w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
  );
export default Navbar;
    </nav>
  );
export default Navbar;