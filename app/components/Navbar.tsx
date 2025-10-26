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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "18px",
            fontFamily: "inherit",
          }}
        >
          <li>
            <Link
              href="#home"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#the-game"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              The Game
            </Link>
          </li>
          <li>
            <Link
              href="#the-world"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              The World
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#the-thesis"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              The Thesis
            </Link>
          </li>
          <li>
            <Link
              href="#media"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
            >
              Media
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
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
