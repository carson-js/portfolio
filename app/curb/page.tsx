import Image from "next/image";

export const metadata = {
  title: "Curb — Your Garage, Digitized.",
  description: "A clean, private way to track maintenance, fuel, and efficiency. No ads, no tracking, just utility.",
};

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "/curb/privacy" },
  { label: "carsonjs.me", href: "/" },
];

export default function Curb() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }} className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-100 dark:border-zinc-800">
        <a 
          href="/curb" 
          className="text-lg font-extrabold" 
        >
          Curb
        </a>
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-red-500 transition-colors no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-20 text-center">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-red-500 bg-red-500/10 dark:bg-red-500/10 px-2.5 py-1 rounded-full mb-5" style={{ fontFamily: "system-ui" }}>
          📱💻⌚ Now on iPhone, iPad, Mac &amp; Watch
        </div>
        <Image
          src="/curb-icon-light.png"
          alt="Curb app icon"
          width={128}
          height={128}
          className="mx-auto mb-6 rounded-2xl dark:hidden"
          priority
        />
        <Image
          src="/curb-icon-dark.png"
          alt="Curb app icon"
          width={128}
          height={128}
          className="mx-auto mb-6 rounded-2xl hidden dark:block"
          priority
        />
        <h1 className="text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
          Curb: Your Garage,<br />Digitized.
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          A clean, private way to track maintenance, fuel, and efficiency — now synced everywhere via iCloud. No ads, no tracking, just utility.
        </p>
        <a
          href="https://apps.apple.com/us/app/curb-your-garage-digitized/id6763365112"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-red-700 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
        <div className="pt-10">
            <Image
              src="/screenshots/hero-multiplatform-light.png"
              alt="Curb running on iPhone, iPad, Mac, and Apple Watch"
              width={1600}
              height={1000}
              className="max-w-2xl w-full h-auto mx-auto dark:hidden"
              priority
            />
            <Image
              src="/screenshots/hero-multiplatform-dark.png"
              alt="Curb running on iPhone, iPad, Mac, and Apple Watch"
              width={1600}
              height={1000}
              className="max-w-2xl w-full h-auto mx-auto hidden dark:block"
              priority
            />
          </div>
      </section>

      {/* What's New in 2.0 */}
      <section id="whats-new" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-xs tracking-widest uppercase text-zinc-400 mb-16 text-center" style={{ fontFamily: "system-ui" }}>New in 2.0</p>

        {/* One App, Every Device — image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Multiplatform</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>One App, Every Device</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Curb is now a fully native experience on iPhone, iPad, Mac, and Apple Watch. Log an entry on your phone and see it instantly on your Mac — everything stays in sync via your own iCloud account.
            </p>
          </div>
          <div>
            <Image
              src="/screenshots/homedetail-light.png"
              alt="Curb bento-style car details view on iPad"
              width={3000}
              height={2300}
              className="w-full max-w-md mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/homedetail-dark.png"
              alt="Curb bento-style car details view on iPad"
              width={3000}
              height={2300}
              className="w-full max-w-md mx-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Every Entry, In Context — image left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Fuel & Service</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Every Entry, In Context</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Fuel, charge, and service detail views now share one unified design, led by a map hero showing exactly where each entry happened. Curb still automatically calculates your fuel economy (MPG) or electric efficiency (mi/kWh), so you always know how your vehicle is performing.
            </p>
          </div>
          <div className="md:order-first">
            <Image
              src="/screenshots/service-light.png"
              alt="Curb redesigned fuel entry detail view with map hero"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/service-dark.png"
              alt="Curb redesigned fuel entry detail view with map hero"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Find Anything, Fast — image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>History</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Find Anything, Fast</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Fuel, charge, and service history are now grouped into month sections with a search bar to jump straight to any entry. Your car list can be sorted too, so the vehicle you need is always within reach.
            </p>
          </div>
          <div>
            <Image
              src="/screenshots/fuelhistory-light.png"
              alt="Curb history view grouped by month with search bar"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/fuelhistory-dark.png"
              alt="Curb history view grouped by month with search bar"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto hidden dark:block"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-800">
        <p className="text-xs tracking-widest uppercase text-zinc-400 mb-16 text-center" style={{ fontFamily: "system-ui" }}>Features</p>

        {/* Your Whole Garage, One Glance — image left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Car Details</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Every detail, organized.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              The car details screen has been redesigned from the ground up: a map snapshot card shows where you last drove, and a new vehicle info card keeps your VIN, insurance, registration, and license plate on hand. On iPad and Mac, a bento-style layout puts it all in view at once.
            </p>
          </div>
          <div className="md:order-first">
            <Image
              src="/screenshots/detail-light.png"
              alt="Curb redesigned car details screen with map snapshot and vehicle info cards"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/detail-dark.png"
              alt="Curb redesigned car details screen with map snapshot and vehicle info cards"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Reminders — image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Reminders</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Reminders that meet you there.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Never miss an oil change or tire rotation again. Set reminders based on specific dates or mileage intervals. Curb watches your odometer so you don't have to.
            </p>
          </div>
          <div>
            <Image
              src="/screenshots/reminders-light.png"
              alt="Lock screen highlighting Curb reminder notification"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/reminders-dark.png"
              alt="Lock screen highlighting Curb reminder notification"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto hidden dark:block"
            />
          </div>
        </div>

        {/* EV Ready — image left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>EV Ready</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Gas or Electric, We Speak Both.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Curb is built for the modern garage. Toggle EV mode to switch from gallons to kilowatt-hours, giving you accurate efficiency metrics for your electric vehicles.
            </p>
          </div>
          <div className="md:order-first">
            <Image
              src="/screenshots/ev-light.png"
              alt="Curb ev detail screen"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/ev-dark.png"
              alt="Curb ev detail screen"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Map View — image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Map View</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Your Journey, On the Map.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every fuel and service entry can be tagged with a location. View your entire history on an interactive map to see exactly where you've been and where you've serviced your car.
            </p>
          </div>
          <div>
            <Image
              src="/screenshots/map-light.png"
              alt="Curb fuel map tagging view"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto dark:hidden"
            />
            <Image
              src="/screenshots/map-dark.png"
              alt="Curb fuel map tagging view"
              width={800}
              height={600}
              className="w-64 h-auto mx-auto hidden dark:block"
            />
          </div>
        </div>
      </section>

      {/* Technical Framework */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-zinc-400 mb-4 text-center" style={{ fontFamily: "system-ui" }}>Under the Hood</p>
          <h2 className="text-4xl font-bold text-center mb-16" style={{ letterSpacing: "-0.02em" }}>Modern Engineering.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "SwiftData", desc: "Pure Swift persistence for a fast, responsive UI." },
              { label: "Multiplatform SwiftUI", desc: "One codebase, native on iPhone, iPad, Mac & Watch." },
              { label: "Built for Scale", desc: "Optimized storage and querying — handles large histories and backfilled entries smoothly." },
              { label: "Apple Intelligence", desc: "On-device CoreML and Vision models scan receipts to auto-fill fuel and service entries." },
              { label: "Haptic Feedback", desc: "Subtle haptics on iPhone for key actions." },
              { label: "Your Units", desc: "Toggle between imperial and metric units anytime." },
            ].map((item) => (
              <div key={item.label} className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <div className="w-2 h-2 rounded-full bg-red-500 mb-4" />
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2" style={{ fontFamily: "system-ui" }}>{item.label}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed" style={{ fontFamily: "system-ui" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-t border-zinc-200 dark:border-zinc-800 py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-zinc-400 mb-4 text-center" style={{ fontFamily: "system-ui" }}>Privacy</p>
          <h2 className="text-4xl font-bold text-center mb-16" style={{ letterSpacing: "-0.02em" }}>Your Data Stays Yours.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Private by Design", desc: "Curb has no servers of its own. Your location, receipts, and vehicle data sync privately across your devices through your personal iCloud account — never to a third party." },
              { label: "No Tracking", desc: "Zero analytics. Zero ads. Zero third-party SDKs." },
              { label: "Full Portability", desc: "Export your entire database to a standard .json file at any time. You aren't just a user; you're the owner." },
            ].map((item) => (
              <div key={item.label} className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2" style={{ fontFamily: "system-ui" }}>{item.label}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed" style={{ fontFamily: "system-ui" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">

        {/* Fine Print */}
        <div className="max-w-5xl mx-auto px-6 mb-8 text-xs text-zinc-400 leading-relaxed space-y-1" style={{ fontFamily: "system-ui" }}>
          <p>Photo Credits</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="https://unsplash.com/photos/silver-mercedes-benz-coupe-on-road-during-daytime-dlqYkIlDa3k" className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                Porsche 911 - Martin Katler on Unsplash
              </a>
            </li>
            <li>
              <a href="https://unsplash.com/photos/a-blue-and-white-motorcycle-parked-in-a-parking-lot-hrW7-73lL0Y" className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                Suzuki GSX-600R - Faiz (just_faaizz_) on Unsplash
              </a>
            </li>
            <li>
              <a href="https://unsplash.com/photos/a-tesla-electric-car-charging-at-a-charging-station-W8IvFdsKsl8" className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                Tesla Model 3 - Bram Van Oost on Unsplash
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-8 text-xs text-zinc-400 leading-relaxed space-y-1" style={{ fontFamily: "system-ui" }}>
          <p>Advanced receipt scanning accuracy requires a device compatible with Apple Intelligence running iOS 26 or later. Apple Intelligence is available on iPhone 16 and later, and iPhone 15 Pro models, with iOS 18.1 or later.</p>
        </div>

        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400" style={{ fontFamily: "system-ui" }}>© 2026 Carson Smith. Built in San Jose, California.</p>
          <div className="flex gap-6">
            <a href="mailto:support@carsonjs.me" className="text-sm text-zinc-400 hover:text-red-500 dark:hover:text-red-500 transition-colors" style={{ fontFamily: "system-ui" }}>
              support@carsonjs.me
            </a>
            <a href="/curb/privacy" className="text-sm text-zinc-400 hover:text-red-500 dark:hover:text-red-500 transition-colors" style={{ fontFamily: "system-ui" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}