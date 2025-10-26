"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(21, 14, 16, 0.5)",
        backdropFilter: "blur(10px)",
        padding: "16px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <ul
          className="font-dungeonMode"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "18px",
          }}
        >
          <li>
            <Link
              href="#home"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#the-game"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              Game
            </Link>
          </li>
          <li>
            <Link
              href="#the-world"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              World
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#the-thesis"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              Thesis
            </Link>
          </li>
          <li>
            <Link
              href="#media"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              style={{
                textDecoration: "none",
                color: "#77888C",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#77888C")}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
