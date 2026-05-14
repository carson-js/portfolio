import {
  IconActivity,
  IconCalendarWeek,
  IconClipboardCheck,
  IconBell,
  IconMoon,
  IconLock,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconActivity size={20} />,
    title: "Live Class Countdowns",
    desc: "Real-time countdowns on your Lock Screen and Dynamic Island via Live Activities. Always know how long until your next class.",
  },
  {
    icon: <IconCalendarWeek size={20} />,
    title: "Class Schedule",
    desc: "Enter your semester schedule once. See your week laid out clearly, with color-coded classes and room numbers always at hand.",
  },
  {
    icon: <IconClipboardCheck size={20} />,
    title: "Assignment Tracking",
    desc: "Log assignments with due dates and get reminded before deadlines. Nothing slips through the cracks when your homework lives in one place.",
  },
  {
    icon: <IconBell size={20} />,
    title: "Smart Reminders",
    desc: "Timely notifications before classes start and deadlines hit. Built on local notifications — no account or server required.",
  },
  {
    icon: <IconMoon size={20} />,
    title: "Light & Dark Mode",
    desc: "Fully supports iOS system appearance. Looks great in lecture halls and late-night study sessions alike.",
  },
  {
    icon: <IconLock size={20} />,
    title: "Private by Default",
    desc: "All data lives on your device. No account needed, no data sent to any server. Your schedule is yours.",
  },
];

export default function Plannerific() {
  return (
    <main
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');`}</style>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-100 dark:border-zinc-800">
        <span className="text-lg font-extrabold tracking-tight text-[#1D9E75]" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.5px" }}>
          Plannerific
        </span>
        <ul className="flex gap-6 list-none m-0 p-0">
          {["Features", "Privacy", "carsonjs.me"].map((link) => (
            <li key={link}>
              <a
                href={link === "carsonjs.me" ? "/" : `#${link.toLowerCase()}`}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-[#1D9E75] transition-colors no-underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto px-8 pt-20 pb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#1D9E75] bg-[#E1F5EE] dark:bg-[#1D9E75]/10 px-2.5 py-1 rounded-full mb-5">
            📱 iOS App
          </div>
          <h1
            className="text-5xl font-extrabold leading-none mb-3 text-zinc-900 dark:text-zinc-50"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-2px" }}
          >
            Plan, <span className="text-[#1D9E75]">terrifically.</span>
          </h1>
          <p className="text-sm italic font-light text-zinc-500 dark:text-zinc-400 mb-1 tracking-wide">
            Plannerific — your school schedule, always one glance away.
          </p>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 max-w-sm">
            A native iOS planner built for students who want to stay on top of their semester without the clutter. Know what's next, always.
          </p>
          <div className="flex gap-2 flex-wrap mb-6">
            {["SwiftUI", "Live Activities", "iOS 18+"].map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 bg-[#1D9E75] text-white rounded-xl px-5 py-2.5 text-sm font-medium no-underline hover:opacity-90 transition-opacity"
            >
              App Store
            </a>
          </div>
        </div>

        {/* Hero placeholder */}
        <div className="flex justify-center items-center">
          <div className="w-48 aspect-[9/16] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl flex items-center justify-center">
            <span className="text-xs text-zinc-400">Screenshot coming soon</span>
          </div>
        </div>
      </section>

      <div className="h-px bg-zinc-100 dark:bg-zinc-800 mx-8" />

      

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 px-8 py-6 flex items-center justify-between">
        <div className="flex gap-6">
        <span className="text-sm font-extrabold text-[#1D9E75]" style={{ fontFamily: "'Syne', sans-serif" }}>
          Plannerific
        </span>
        <p className="text-sm text-zinc-400" style={{ fontFamily: "system-ui" }}>© 2026 Carson Smith. Built in San Jose.</p>
        </div>
        <div className="flex gap-6">
          <a href="mailto:support@carsonjs.me" className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors" style={{ fontFamily: "system-ui" }}>
            support@carsonjs.me
          </a>
          <a href="/plannerific/privacy" className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors" style={{ fontFamily: "system-ui" }}>
              Privacy Policy
            </a>
        </div>
      </footer>
    </main>
  );
}