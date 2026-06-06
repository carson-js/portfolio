"use client"

import Image from "next/image";
import { useState } from "react";

export default function Conch() {
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <main 
      className={'min-h-screen'} 
      style={{ fontFamily: "'Space Mono', monospace", background: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');`}</style>
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
          <a
            href="/"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              color: "var(--green)",
              letterSpacing: "0.05em",
            }}
          >
            carson smith
          </a>
          <div className="nav-links-desktop">
            {["about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`/#${section}`}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "var(--text-muted)", textDecoration: "none", letterSpacing: "0.03em", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {section}
              </a>
            ))}
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
        <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
          {["about", "projects", "contact"].map((section) => (
            <a key={section} href={`/#${section}`} onClick={() => setMenuOpen(false)}>{section}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section" style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="hero-inner">
          {/* Text */}
          <div className="hero-text">
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--green)",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ display: "block", width: 24, height: 1, background: "var(--green)" }} />
              Systems Project
            </p>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                color: "var(--text-primary)",
              }}
            >
              <span style={{ color: "var(--green)" }}>Conch</span><br />
              Unix Shell
            </h1>

            <p
              className="hero-body"
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                maxWidth: 480,
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              A functional Unix shell written from scratch in C — implementing a full
              read-eval-print loop, <strong>POSIX process forking</strong>, PATH-based
              command resolution, and builtin commands.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#projects"
                style={{
                  display: "inline-block",
                  padding: "0.65rem 1.4rem",
                  background: "var(--green)",
                  color: "#fff",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.02em",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--green-hover)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--green)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View projects
              </a>
            </div>
          </div>

          {/* Screenshot */}
          <div>
            <Image
              src="/conch-term-dark.png"
              alt="Conch shell running the about command, showing ASCII art logo, version 0.4.0, and the conch prompt"
              width={560}
              height={400}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}