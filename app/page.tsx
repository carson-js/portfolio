const projects = [
  {
    title: "Curb",
    description: "A car management app for tracking maintenance, costs, and vehicle info. Built with SwiftUI and SwiftData.",
    tags: ["SwiftUI", "Swift", "SwiftData", "iOS"],
    link: "/curb",
  },
  {
    title: "Plannerific",
    description: "A school planner iOS app for managing assignments, schedules, and deadlines.",
    tags: ["SwiftUI", "iOS"],
    link: null,
  },
  {
    title: "Battleship",
    description: "A fully-featured C++ Battleship game with binary file save/load, BFS-based ship detection, all with a hand-made game loop.",
    tags: ["C++", "File I/O", "BFS"],
    link: null,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm text-zinc-500 mb-3">Computer Engineering @ SJSU</p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Hi, I'm Carson 🌊
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mb-8">
          I build iOS apps and am currently digging into systems-level programming with C and C++.
          Currently a freshman with a focus on making things that actually work well.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Contact me
            </a>
        </div>
      </section>
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 border-t boarder-zinc-100 dark:boarder-zinc-800">
        <p className="text-sm text-zinc-500 mb-3">About</p>
        <h2 className="text-3xl font-bold tracking-tight mb-6">A bit about me</h2>
        <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400 max-w-lg">
          <p>
            I'm a Computer Engineering student at San Jose State University,
            expected to graduate in May 2029. I carry a 4.0 GPA and am part of
            the Software and Computer Engineering Society and the Responsible
            Computing Club.
          </p>
          <p>
            I like understanding how things work under the hood. I'd rather
            build and compile things manually than let an IDE do it for me.
            Outside of class, I'm building iOS apps with SwiftUI and working
            through systems programming, learning both C and C++.
          </p>
        </div>
      </section>
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
        <p className="text-sm text-zinc-400">© 2026 Carson. Built with Next.js and Tailwind.</p>
      </footer>
    </main>
  );
}
