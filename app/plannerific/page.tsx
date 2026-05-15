import {
  IconActivity,
  IconCalendarWeek,
  IconClipboardCheck,
  IconBell,
  IconMoon,
  IconLock,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "/plannerific/privacy" },
  { label: "carsonjs.me", href: "/" },
];

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

export const metadata = {
  title: "Plannerific — Plan, terrifically.",
  description: "A native iOS planner built for students who want to stay on top of their semester without the clutter. Know what's next, always.",
};

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
        <a 
          href="/plannerific"
          className="text-lg font-extrabold tracking-tight text-[#00C3D0] dark:text-[#01D2E0]" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.5px" }}
        >
          Plannerific
        </a>
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-[#00C3D0] dark:hover:text-[#01D2E0] transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto px-8 pt-20 pb-16">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#00C3D0] dark:text-[#01D2E0] bg-[#00C3D0]/10 dark:bg-[#01D2E0]/10 px-2.5 py-1 rounded-full mb-5">
            📱 iOS App
          </div>
          <h1
            className="text-5xl font-extrabold leading-none mb-3 text-zinc-900 dark:text-zinc-50"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-2px" }}
          >
            Plan, <span className="text-[#00C3D0] dark:text-[#01D2E0]">terrifically.</span>
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
          <button
            disabled
            className="bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-xl px-5 py-2.5 text-sm font-medium no-underline cursor-not-allowed border border-zinc-200 dark:border-zinc-700"
          >
            Coming soon to the App Store
          </button>
        </div>

        {/* Hero placeholder */}
        <div className="flex justify-center items-center">
          <div className="w-48 aspect-[9/16] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl flex items-center justify-center">
            <span className="text-xs text-zinc-400">Screenshot coming soon</span>
          </div>
        </div>
      </section>

      <div className="h-px bg-zinc-100 dark:bg-zinc-800 mx-8" />

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-8 py-16">
        <p className="text-[11px] font-medium tracking-widest uppercase text-[#00C3D0] dark:text-[#01D2E0] mb-1">Features</p>
        <h2 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-1px" }}>
          Everything you need. Nothing you don't.
        </h2>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-lg mb-10">
          Plannerific keeps your academic life organized with tools that stay out of your way and show up when it matters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00C3D0]/10 dark:bg-[#01D2E0]/10 flex items-center justify-center text-[#00C3D0] dark:text-[#01D2E0] mb-4">
                {f.icon}
              </div>
              <p className="text-sm font-bold mb-1.5 text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "'Syne', sans-serif" }}>
                {f.title}
              </p>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 m-0">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Live Activities spotlight */}
      <div className="bg-zinc-50 dark:bg-zinc-900 border-t border-b border-zinc-100 dark:border-zinc-800 py-16">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Placeholders */}
          <div className="flex gap-4 justify-center items-end">
            <div className="flex flex-col items-center gap-2">
              <div className="w-28 aspect-[9/16] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center">
                <span className="text-[9px] text-zinc-400 text-center px-2">Coming soon</span>
              </div>
              <p className="text-[9px] text-zinc-400 italic text-center">Lock Screen</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-28 aspect-[9/16] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center" style={{ height: "256px" }}>
                <span className="text-[9px] text-zinc-400 text-center px-2">Coming soon</span>
              </div>
              <p className="text-[9px] text-zinc-400 italic text-center">Schedule View</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-[#00C3D0] dark:text-[#01D2E0] mb-1">Live Activities</p>
            <h2 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-zinc-50" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-1px" }}>
              Your schedule, live.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-5">
              Plannerific uses iOS Live Activities to put a real-time class countdown on your Lock Screen and Dynamic Island — so you always know exactly how long until your next class without unlocking your phone.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-[#00C3D0] dark:bg-[#01D2E0] text-white text-[9px] font-medium px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Live
              </div>
              <span className="text-xs text-zinc-400">Updates in real time via ActivityKit</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2
          className="text-4xl font-extrabold mb-4 text-[#00C3D0] dark:text-[#01D2E0]"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-1.5px" }}
        >
          Plannerific
        </h2>
        <p className="text-sm italic text-zinc-500 dark:text-zinc-400 mb-8">Download for free and experience it all, because getting organized shouldn't cost students money.</p>
        <button
            disabled
            className="bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-xl px-5 py-2.5 text-sm font-medium no-underline cursor-not-allowed border border-zinc-200 dark:border-zinc-700"
          >
            Coming soon to the App Store
          </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 px-8 py-6 flex items-center justify-between">
        <div className="flex gap-6">
        <span className="text-sm font-extrabold text-[#00C3D0] dark:text-[#01D2E0]" style={{ fontFamily: "'Syne', sans-serif" }}>
          Plannerific
        </span>
        <p className="text-sm text-zinc-400" style={{ fontFamily: "system-ui" }}>© 2026 Carson Smith. Built in San Jose, California.</p>
        </div>
        <div className="flex gap-6">
          <a href="mailto:support@carsonjs.me" className="text-sm text-zinc-400 hover:text-[#00C3D0] dark:hover:text-[#01D2E0] transition-colors" style={{ fontFamily: "system-ui" }}>
            support@carsonjs.me
          </a>
          <a href="/plannerific/privacy" className="text-sm text-zinc-400 hover:text-[#00C3D0] dark:hover:text-[#01D2E0] transition-colors" style={{ fontFamily: "system-ui" }}>
              Privacy Policy
            </a>
        </div>
      </footer>
    </main>
  );
}