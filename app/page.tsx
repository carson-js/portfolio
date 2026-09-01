"use client";

import Typewriter from "typewriter-effect";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Curb",
    description: "A car management app for tracking maintenance, costs, and vehicle info — now on iPhone, iPad, Mac, and Apple Watch.",
    tags: ["SwiftUI", "Swift", "SwiftData", "Multiplatform"],
    link: "/curb",
    num: "01",
  },
  {
    title: "Conch",
    description: "A lightweight Unix shell written in C from scratch, implementing a full REPL with process forking, PATH-based command resolution, and builtin commands.",
    tags: ["C", "Unix Shell", "Systems Programming"],
    link: "/conch",
    num: "02",
  },
  {
    title: "Crumb",
    description: "A CHIP-8 emulator written in C from scratch, implementing the full fetch-decode-execute cycle with a function-pointer opcode table.",
    tags: ["C", "CHIP-8", "Emulator", "Systems Programming"],
    link: "/crumb",
    num: "03",
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
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
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              color: "#2563EB",
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
          {["about", "projects", "skills", "contact"].map((section) => (
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

      {/* Hero Section */}
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
                color: "#2563EB",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ display: "block", width: 24, height: 1, background: "#2563EB" }} />
              Computer Engineering @ SJSU
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
              Hi, I&apos;m Carson —<br />
              <span className="typewriter-wrap">
                <span style={{ color: "#2563EB" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "a student.",
                        "a developer.",
                        "a programmer.",
                        "an iOS engineer.",
                        "a builder.",
                        "a systems thinker.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 80,
                      deleteSpeed: 40,
                    }}
                  />
                </span>
              </span>
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
              I build{" "}
              <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>iOS apps</span> and
              dig into systems-level programming with C and C++. Freshman with a 4.0, focused on
              making things that actually work well.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="#projects"
                style={{
                  display: "inline-block",
                  padding: "0.65rem 1.4rem",
                  background: "#2563EB",
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
                  e.currentTarget.style.background = "#1D4ED8";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View projects
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "0.65rem 1.4rem",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-muted)",
                  borderRadius: 6,
                  fontSize: 14,
                  textDecoration: "none",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.02em",
                  background: "var(--btn-ghost-bg)",
                  transition: "border-color 0.2s, color 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get in touch
              </a>
              <a
                href="https://www.github.com/carson-js"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.4rem",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-muted)",
                  borderRadius: 6,
                  fontSize: 14,
                  textDecoration: "none",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.02em",
                  background: "var(--btn-ghost-bg)",
                  transition: "border-color 0.2s, color 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo-wrap">
            <Image
              src="/me.jpeg"
              alt="Carson Smith"
              width={780}
              height={1040}
              className="hero-photo"
              priority
            />
          </div>
        </div>
      </section>
      
      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* About Section */}
      <section id="about" className="two-col-section">
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted-light)",
            paddingTop: "0.4rem",
          }}
        >
          About
        </span>
        <div>
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}
          >
            A bit about me
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              marginBottom: "1rem",
              fontWeight: 300,
            }}
          >
            I&apos;m a Computer Engineering student at{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>
              San José State University
            </span>
            , expected to graduate in May 2029. I&apos;m part of the Software and Computer
            Engineering Society and the Responsible Computing Club.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            I like understanding how things work under the hood — I&apos;d rather build and compile
            things manually than let an IDE do it for me. Outside of class I&apos;m building iOS
            apps with{" "}
            <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>SwiftUI</span> and
            working through systems programming in C and C++.
          </p>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {[
              { num: "4.0", label: "GPA" },
              { num: "2", label: "iOS apps" },
              { num: "May 2029", label: "Graduation" },
            ].map(({ num, label }) => (
              <div key={label}>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#2563EB",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted-light)",
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* Projects Section */}
      <section id="projects" className="projects-section" style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem" }}>
        <div className="two-col-header">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted-light)",
            }}
          >
            Projects
          </span>
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Things I&apos;ve built
          </h2>
        </div>
 
        {projects.map((project) => {
          const cardContent = (
            <>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: "#2563EB",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                  opacity: 0.6,
                }}
              >
                {project.num}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                      marginBottom: "0.45rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      fontWeight: 300,
                      maxWidth: 460,
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.45rem",
                      flexWrap: "wrap",
                      marginTop: "1rem",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 11,
                          padding: "0.22rem 0.6rem",
                          borderRadius: 4,
                          background: "var(--tag-bg)",
                          border: "1px solid var(--tag-border)",
                          color: "var(--tag-text)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <span
                    className="project-arrow"
                    style={{
                      fontSize: "1.25rem",
                      color: "#2563EB",
                      flexShrink: 0,
                      fontFamily: "'Space Mono', monospace",
                      opacity: 0,
                      transform: "translate(-4px, 4px)",
                      transition: "opacity 0.2s, transform 0.2s",
                    }}
                  >
                    ↗
                  </span>
                )}
              </div>
            </>
          );
 
          const sharedStyle: React.CSSProperties = {
            border: "1px solid var(--border-color)",
            borderRadius: 12,
            padding: "1.75rem",
            marginBottom: "0.75rem",
            background: "var(--bg-surface)",
            position: "relative",
          };
 
          return project.link ? (
            <a
              key={project.title}
              href={project.link}
              style={{
                ...sharedStyle,
                display: "block",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.06)";
                e.currentTarget.style.transform = "translateY(-1px)";
                const arrow = e.currentTarget.querySelector(".project-arrow") as HTMLElement;
                if (arrow) {
                  arrow.style.opacity = "1";
                  arrow.style.transform = "translate(0, 0)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                const arrow = e.currentTarget.querySelector(".project-arrow") as HTMLElement;
                if (arrow) {
                  arrow.style.opacity = "0";
                  arrow.style.transform = "translate(-4px, 4px)";
                }
              }}
            >
              {cardContent}
            </a>
          ) : (
            <div key={project.title} style={{ ...sharedStyle, opacity: 0.5 }}>
              <span
                style={{
                  position: "absolute",
                  top: "1.1rem",
                  right: "1.1rem",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted-light)",
                  border: "1px solid var(--border-color)",
                  borderRadius: 4,
                  padding: "0.2rem 0.55rem",
                  background: "var(--soon-bg)",
                }}
              >
                Soon
              </span>
              {cardContent}
            </div>
          );
        })}
      </section>

      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* Skills */}
      <section id="skills" className="two-col-section">
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted-light)",
            paddingTop: "0.4rem",
          }}
        >
          Skills
        </span>
        <div>
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}
          >
            What I work with
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              {
                category: "Languages",
                skills: ["C", "C++", "Python", "Swift"],
              },
              {
                category: "iOS & Mobile",
                skills: ["Swift", "SwiftUI", "SwiftData", "Xcode"],
              },
              {
                category: "Web",
                skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
              },
              {
                category: "Tools",
                skills: ["Git", "GitHub", "SOLIDWORKS", "Autodesk Fusion 360", "NI Multisim"],
              },
              {
                category: "Hardware",
                skills: ["Breadboarding", "Logic Probe", "Oscilloscope", "Integrated Circuits", "Function Generator", "Soldering"],
              },
            ].map(({ category, skills }) => (
              <div key={category} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted-light)",
                  }}
                >
                  {category}
                </span>
                <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        fontSize: 12,
                        padding: "0.3rem 0.75rem",
                        borderRadius: 4,
                        background: "var(--tag-bg)",
                        border: "1px solid var(--tag-border)",
                        color: "var(--tag-text)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* Contact */}
      <section id="contact" className="two-col-section">
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted-light)",
            paddingTop: "0.4rem",
          }}
        >
          Contact
        </span>
        <div>
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
              color: "var(--text-primary)",
            }}
          >
            Get in touch
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
              fontWeight: 300,
              maxWidth: 400,
            }}
          >
            Open to chatting about projects, internships, or just cool tech. Best reached by email.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a
              href="mailto:me@carsonjs.me"
              style={{
                display: "inline-block",
                padding: "0.65rem 1.4rem",
                background: "#2563EB",
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
                e.currentTarget.style.background = "#1D4ED8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              me@carsonjs.me
            </a>
            {[
              { label: "GitHub", href: "https://www.github.com/carson-js" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/carson-js" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.4rem",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-muted)",
                  borderRadius: 6,
                  fontSize: 14,
                  textDecoration: "none",
                  fontFamily: "'Space Mono', monospace",
                  letterSpacing: "0.02em",
                  background: "var(--btn-ghost-bg)",
                  transition: "border-color 0.2s, color 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {label === "GitHub" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                )}
                {label === "LinkedIn" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14.82 0H1.18C.53 0 0 .52 0 1.16v13.68C0 15.48.53 16 1.18 16h13.64c.65 0 1.18-.52 1.18-1.16V1.16C16 .52 15.47 0 14.82 0zM4.75 13.62H2.38V6h2.38v7.62zM3.56 4.96c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.62 1.38-1.38 1.38zm10.06 8.66h-2.37V9.9c0-.86-.02-1.97-1.2-1.97-1.2 0-1.39.94-1.39 1.91v3.78H6.3V6h2.28v1.04h.03c.32-.6 1.09-1.23 2.24-1.23 2.4 0 2.84 1.58 2.84 3.63v4.18z" />
                  </svg>
                )}
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
              href="mailto:support@carsonjs.me"
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
              support@carsonjs.me
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
