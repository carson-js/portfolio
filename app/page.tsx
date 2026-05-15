"use client";

import Typewriter from "typewriter-effect";

const projects = [
  {
    title: "Curb",
    description: "A car management app for tracking maintenance, costs, and vehicle info.",
    tags: ["SwiftUI", "Swift", "SwiftData", "iOS"],
    link: "/curb",
    num: "01",
  },
  {
    title: "Plannerific",
    description: "A school planner iOS app for managing assignments, schedules, and deadlines.",
    tags: ["SwiftUI", "iOS", "SwiftData", "Live Activities"],
    link: null,
    num: "02",
  },
]

export default function Home() {
  return (
    <main 
      className={'min-h-screen'}
      style={{ fontFamily: "'Space Mono', monospace", background: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');`}</style>

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--bg-page)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--border-color)",
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
          <div className="flex items-center gap-8">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "6rem 2rem 5rem" }}>
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
            fontSize: "clamp(2rem, 5.2vw, 3.6rem)",
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          Hi, I&apos;m Carson -<br />
          <span className="typewriter-wrap" style={{ display: "flex", alignItems: "baseline", gap: "0.3em", flexWrap: "wrap" }}>
            <span style={{ fontWeight: 600 }}>a</span>
            <span style={{ color: "#2563EB" }}>
              <Typewriter
                options={{
                  strings: [
                    "student.",
                    "developer.",
                    "programmer.",
                    "iOS engineer.",
                    "builder.",
                    "systems thinker.",
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
          style={{
            fontSize: "1.05rem",
            color: "var(--text-muted)",
            maxWidth: 480,
            marginBottom: "2.5rem",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          I build{" "}
          <span style={{ color: "var(--text-emphasis)", fontWeight: 400 }}>iOS apps</span> and dig
          into systems-level programming with C and C++. Freshman with a 4.0, focused on making
          things that actually work well.
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
            GitHub
          </a>
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
      <section id="projects" style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2rem" }}>
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
            className="text-sm text-zinc-400" 
            style={{ 
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              textDecoration: "none",
              color: "var(--text-muted)",
             }}
          >
            © 2026 Carson Smith. Built in San Jose, California.
          </p>
          <div className="flex gap-6">
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
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
