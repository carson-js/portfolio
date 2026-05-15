"use client";

import Typewriter from "typewriter-effect";
import { Geist, Space_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

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
      className={'${geist.variable} ${spaceMono.variable} min-h-screen'}
      style={{ fontFamily: "var(--font-geist)", background: "var(--bg-page)", color: "var(--text-primary)" }}
    >

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
              fontFamily: "var(--font-space-mono)",
              fontSize: 13,
              color: "#2563EB",
              letterSpacing: "0.05em",
            }}
          >
            carson smith
          </span>
          <div className="flex items-center gap-8">
            {["about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={'#$[section]'}
                style={{
                  fontFamily: "var(--font-space-mono)",
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
            fontFamily: "var(--font-space-mono)",
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
            fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          Hi, I&apos;m Carson -<br />
          <span style={{ display: "flex", alignItems: "baseline", gap: "0.3em", flexWrap: "wrap" }}>
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
              fontFamily: "var(--font-space-mono)",
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
              fontFamily: "var(--font-space-mono)",
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
        </div>
      </section>
      
      <hr style={{ borderColor: "var(--border-color)", margin: 0 }} />

      {/* About Section */}
      <section
        id="about"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "5rem 2rem",
          display: "grid",
          gridTemplateColumns: "190px 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
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
              { num: "'29", label: "Graduation" },
            ].map(({ num, label }) => (
              <div key={label}>
                <span
                  style={{
                    fontFamily: "var(--font-space-mono)",
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
                    fontFamily: "var(--font-space-mono)",
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
      <section id="projects" className="max-w-3xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-sm text-zinc-500 mb-3">Projects</p>
        <h2 className="text-3xl font-bold tracking-tight mb-8">Things I've built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => {
            const Card = (
              <div
                key={project.title}
                className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col gap-2 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">{project.description}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );

            return project.link ? (
              <a key={project.title} href={project.link} className="group">
                {Card}
              </a>
            ) : (
              <div key={project.title}>{Card}</div>
            );
          })}
        </div>
      </section>
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-sm text-zinc-500 mb-3">Contact</p>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Get in touch</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-8">
          I'm always open to chatting about projects, opportunities, or just cool tech.
          The best way to reach me is by email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
          href="mailto:me@carsonjs.me"
          className="px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:opacity-80 transition-opacity w-fit"
          >
            me@carsonjs.me
          </a> 
          <a
            href="https://www.github.com/carson-js"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg0zinc-900 transition-colors w-fit"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/carson-js"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg0zinc-900 transition-colors w-fit"
          >
            LinkedIn
          </a>
        </div>
      </section>
      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-sm text-zinc-400">© 2026 Carson Smith. Built with Next.js and Tailwind in San Jose, California.</p>
      </footer>
    </main>
  );
}
