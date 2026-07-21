"use client"

import { useState } from "react";

export default function CrumbClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="min-h-screen"
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
              color: "#2563EB",
              letterSpacing: "0.05em",
            }}
          >
            carson smith
          </a>
          <div className="nav-links-desktop">
            {["about", "projects", "skills", "contact"].map((section) => (
              <a
                key={section}
                href={'/#' + section}
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
          {["about", "projects", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={'/#' + section}
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>

      {/*  Hero (no screenshot yet — single column)  */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "3.5rem 2rem 3rem" }}>
        <div>
          <p
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--purple)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <span style={{ display: "block", width: 24, height: 1, background: "var(--purple)" }} />
            Emulator Project
          </p>
          <h1
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3rem)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.03em", marginBottom: "1.25rem", color: "var(--text-primary)" }}
          >
            <span style={{ color: "var(--purple)" }}>Crumb</span> —<br />
            CHIP-8 Emulator
          </h1>
          <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.75rem", maxWidth: 620 }}>
            A CHIP-8 interpreter built from scratch in C — modeling the virtual machine directly,
            with registers, memory, a stack, timers, and{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>a function-pointer opcode table</span>{" "}
            driving the fetch-decode-execute cycle at the center of every emulator.
          </p>
 
          {/* Badges */}
          <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.5rem" }}>
            {[
              { label: "v1.0.0", purple: true },
              { label: "C", purple: false },
              { label: "CMake", purple: false },
              { label: "SDL2", purple: false },
              { label: "MIT License", purple: false },
            ].map(({ label, purple }) => (
              <span
                key={label}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  padding: "0.22rem 0.6rem",
                  borderRadius: 4,
                  letterSpacing: "0.03em",
                  background: purple ? "var(--purple-tag-bg)" : "var(--tag-bg)",
                  border: `1px solid ${purple ? "var(--purple-tag-border)" : "var(--tag-border)"}`,
                  color: purple ? "var(--purple-tag-text)" : "var(--tag-text)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
 
          {/* GitHub button */}
          <a
            href="https://github.com/carson-js/crumb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              padding: "0.6rem 1.1rem",
              border: "1px solid var(--border-color)",
              borderRadius: 6,
              background: "var(--bg-surface)",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--purple-border-hover)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/carson-js/crumb
          </a>
        </div>
      </section>
    </main>
  );
}