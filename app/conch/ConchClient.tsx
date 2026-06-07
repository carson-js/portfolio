"use client"

import Image from "next/image";
import { useState } from "react";

export default function ConchClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: "'Space Mono', monospace", background: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');`}</style>

      {/*  Navigation  */}
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

      {/*  Hero  */}
      <section className="conch-hero">
        <div>
          <p
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <span style={{ display: "block", width: 24, height: 1, background: "var(--green)" }} />
            Systems Project
          </p>
          <h1
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3rem)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.03em", marginBottom: "1.25rem", color: "var(--text-primary)" }}
          >
            <span style={{ color: "var(--green)" }}>Conch</span> —<br />
            Unix Shell
          </h1>
          <p style={{ fontSize: "0.97rem", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.75rem" }}>
            A lightweight Unix shell built from scratch in C — implementing a full read-eval-print
            loop,{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>POSIX process forking</span>,
            PATH-based command resolution, and builtin commands.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.5rem" }}>
            {[
              { label: "v0.4.0", green: true },
              { label: "C", green: false },
              { label: "CMake", green: false },
              { label: "MIT License", green: false },
            ].map(({ label, green }) => (
              <span
                key={label}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  padding: "0.22rem 0.6rem",
                  borderRadius: 4,
                  letterSpacing: "0.03em",
                  background: green ? "var(--green-tag-bg)" : "var(--tag-bg)",
                  border: `1px solid ${green ? "var(--green-tag-border)" : "var(--tag-border)"}`,
                  color: green ? "var(--green-tag-text)" : "var(--tag-text)",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* GitHub button */}
          <a
            href="https://github.com/carson-js/conch"
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
              e.currentTarget.style.borderColor = "var(--green-border-hover)";
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
            github.com/carson-js/conch
          </a>
        </div>

        {/* Screenshot */}
        <div>
            <Image
                    src="/conch/conch-term-dark.png"
                    alt="Conch shell running the about command"
                    width={560}
                    height={400}
                    priority
                    className="hidden dark:block"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
        </div>
      </section>

      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />
      
      {/* Overview */}
      <section className="two-col-section">
        <span style={{ 
          fontFamily: "'Space Mono', monospace", 
          fontSize: 11, letterSpacing: "0.14em", 
          textTransform: "uppercase", 
          color: "var(--text-muted-light)", 
          paddingTop: "0.4rem" 
          }}
        >
          Overview
        </span>
        <div>
          <h2 style={{ 
              fontSize: "1.85rem", 
              fontWeight: 600, 
              letterSpacing: "-0.02em", 
              marginBottom: "1.25rem", 
              lineHeight: 1.2, 
              color: "var(--text-primary)" 
            }}
          >
            A shell from the ground up
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 300 }}>
            Conch is built entirely in C without any shell library, interfacing directly with the OS
            through{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>POSIX system calls</span>{" "}
            — managing process creation, executable loading, and memory manually.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8, fontWeight: 300 }}>
            The goal was to understand what actually happens between pressing Enter and seeing output:
            how the shell tokenizes input, why some commands must run inside the shell process (like{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>cd</span>), and how{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>fork + execvp</span> hands
            off execution to an external program.
          </p>

          <div className="conch-features-grid">
            {[
              { label: "REPL", desc: "Interactive prompt with a read-eval-print loop" },
              { label: "PATH resolution", desc: "Resolves external commands across $PATH" },
              { label: "Builtins", desc: "cd, exit, and about run in-process" },
              { label: "Error handling", desc: "Graceful handling of empty input and EOF" },
            ].map((f) => (
              <div
                key={f.label}
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)", borderRadius: 8, padding: "1rem 1.1rem", marginTop: "1rem", transition: "border-color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--green-border-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
              >
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--green-tag-text)", marginBottom: "0.35rem" }}>{f.label}</div>
                <div style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* How It Works */}
      <section className="two-col-section">
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted-light)", paddingTop: "0.4rem" }}>
          How It Works
        </span>
        <div>
          <h2 style={{ fontSize: "1.85rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.2, color: "var(--text-primary)" }}>
            Command pipeline
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 300 }}>
            Every command travels through a short, focused pipeline: tokenized into an argument
            array, checked against the builtin table, then either executed in-process or handed off
            to a forked child.
          </p>

          <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8, marginTop: "1.5rem", fontWeight: 300 }}>
            External commands are executed by forking a child process with{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>fork()</span> and
            replacing it via{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>execvp()</span>. The
            parent blocks on{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>waitpid()</span> until
            the child exits. Builtins like{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>cd </span>must run
            in-process — a child can&apos;t change the parent&apos;s working directory.
          </p>
        </div>
      </section>

      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/*  Structure  */}
      <section className="two-col-section">
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted-light)", paddingTop: "0.4rem" }}>
          Structure
        </span>
        <div>
          <h2 style={{ fontSize: "1.85rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.2, color: "var(--text-primary)" }}>
            Modular by design
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: "0rem", fontWeight: 300 }}>
            The codebase is split across focused source files so each concern — parsing, execution,
            builtins — lives in exactly one place.
          </p>
          <div className="conch-file-tree">
            {[
              { name: "conch/", indent: false, desc: "", highlight: false },
              { name: "main.c", indent: true, desc: "entry point & REPL loop", highlight: false },
              { name: "parser.c / .h", indent: true, desc: "tokenizes input → argv", highlight: true },
              { name: "shell.c / .h", indent: true, desc: "routes builtins or forks", highlight: true },
              { name: "builtins.c / .h", indent: true, desc: "cd, exit, about", highlight: true },
              { name: "CMakeLists.txt", indent: true, desc: "build config", highlight: false },
            ].map((row) => (
              <div className="conch-file-row" key={row.name}>
                {row.indent && <span style={{ color: "var(--border-color)", userSelect: "none" }}>├─</span>}
                <span style={{ color: row.highlight ? "var(--green-tag-text)" : "var(--text-primary)" }}>{row.name}</span>
                {row.desc && <span style={{ color: "var(--text-muted-light)", fontSize: 11, marginLeft: "auto" }}>{row.desc}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* ── Planned ── */}
      <section className="two-col-section">
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted-light)", paddingTop: "0.4rem" }}>
          What&apos;s Next
        </span>
        <div>
          <h2 style={{ fontSize: "1.85rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "1.25rem", lineHeight: 1.2, color: "var(--text-primary)" }}>
            Planned features
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: "1rem", fontWeight: 300 }}>
            Conch is actively being developed. Each of these features requires a deeper dive into
            how real shells handle I/O and process management.
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { token: "> <", label: "I/O redirection", desc: "Output and input redirection" },
              { token: "|", label: "Pipes", desc: "Chain commands with pipe() and dup2()" },
              { token: "↑", label: "Command history", desc: "Up-arrow navigation through past commands" },
              { token: "$VAR", label: "Env expansion", desc: "Expand $HOME, $PATH, and other variables" },
              { token: "&", label: "Background jobs", desc: "Run processes without blocking the prompt" },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="flex items-center gap-3"
                style={{ padding: "0.65rem 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border-color)" : "none" }}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "var(--green-tag-text)", background: "var(--green-tag-bg)", border: "1px solid var(--green-tag-border)", borderRadius: 4, padding: "0.1rem 0.45rem", flexShrink: 0 }}>
                  {item.token}
                </span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12.5, color: "var(--text-primary)", fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--text-muted-light)", marginLeft: "auto" }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer style={{ borderTop: "1px solid var(--border-color)", padding: "1.75rem 2rem" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-zinc-400 text-center sm:text-left"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              textDecoration: "none",
              color: "var(--text-muted)",
            }}
          >
            © 2026 Carson Smith. Built in San Jose, California.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              href="https://github.com/carson-js/conch"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: "var(--text-muted)", textDecoration: "none", letterSpacing: "0.03em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              github.com/carson-js/conch
            </a>
            <a 
              href="/#contact"
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
              contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}