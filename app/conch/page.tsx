"use client"

import "./conch.css";
import Image from "next/image";
import { useState } from "react";



export default function Conch() {
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <>
      {/* Navigation */}
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "var(--bg-page)",
        backdropFilter: "blur(12px)",
        borderColor: "1px solid var(--border-color)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 900, padding: "0 2rem", height: 56 }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 13,
            color: "var(--green)",
            letterSpacing: "0.05em",
          }}
        >
          carson smith
        </span>
        <div className="nav-links-desktop">
          {["about", "projects", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={'#' + section}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                color: "var(--text-muted)",
                textDecoration: "none",
                letterSpacing: "0.03em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {section}
            </a>
          ))}
        </div>

          {/* Hamburger Button */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>    
      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {["overview", "logic", "structure", "planned"].map((section) => (
          <a
            key={section}
            href={'#' + section}
            onClick={() => setMenuOpen(false)}
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
    </>
  );
}