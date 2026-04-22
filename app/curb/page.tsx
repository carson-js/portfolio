export default function Curb() {
  return (
    <main style={{ fontFamily: "'Georgia', serif" }} className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">

      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">← carsonjs.me</a>
        <span className="text-sm font-medium tracking-widest text-zinc-400 uppercase" style={{ fontFamily: "system-ui" }}>Curb</span>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-400 tracking-widest uppercase" style={{ fontFamily: "system-ui" }}>
          iOS App
        </div>
        <h1 className="text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
          Curb: Your Garage,<br />Digitized.
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          A clean, private way to track maintenance, fuel, and efficiency. No ads, no tracking, just utility.
        </p>
        <button
          disabled
          className="px-6 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 text-sm cursor-not-allowed border border-zinc-200 dark:border-zinc-700"
          style={{ fontFamily: "system-ui" }}
        >
          Coming soon to the App Store
        </button>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <p className="text-xs tracking-widest uppercase text-zinc-400 mb-16 text-center" style={{ fontFamily: "system-ui" }}>Features</p>

        {/* Effortless Logging */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Fuel & Service</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Effortless Logging</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Track every drop and every wrench turn. Log fuel entries or service records in seconds. Curb automatically calculates your fuel economy (MPG) or electric efficiency (mi/kWh), so you always know how your vehicle is performing.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl aspect-[4/3] flex items-center justify-center">
            <span className="text-zinc-400 dark:text-zinc-700 text-sm" style={{ fontFamily: "system-ui" }}>Screenshot coming soon</span>
          </div>
        </div>

        {/* AI Receipt Scanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl aspect-[4/3] flex items-center justify-center md:order-first order-last">
            <span className="text-zinc-400 dark:text-zinc-700 text-sm" style={{ fontFamily: "system-ui" }}>Screenshot coming soon</span>
          </div>
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Apple Intelligence</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>AI-Powered Receipt Scanning</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Let AI do the data entry. Powered by Apple Intelligence. Snap a photo of any receipt, and Curb's on-device vision models will instantly extract the date, cost, and totals for you.
            </p>
          </div>
        </div>

        {/* Reminders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Reminders</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Maintenance That Tracks With You</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Never miss an oil change or tire rotation again. Set reminders based on specific dates or mileage intervals. Curb watches your odometer so you don't have to.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl aspect-[4/3] flex items-center justify-center">
            <span className="text-zinc-400 dark:text-zinc-700 text-sm" style={{ fontFamily: "system-ui" }}>Screenshot coming soon</span>
          </div>
        </div>

        {/* EV Ready */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl aspect-[4/3] flex items-center justify-center md:order-first order-last">
            <span className="text-zinc-400 dark:text-zinc-700 text-sm" style={{ fontFamily: "system-ui" }}>Screenshot coming soon</span>
          </div>
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>EV Ready</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Gas or Electric. We Speak Both.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Curb is built for the modern garage. Toggle EV mode to switch from gallons to kilowatt-hours, giving you accurate efficiency metrics for your electric vehicles.
            </p>
          </div>
        </div>

        {/* Map View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <span className="text-xs tracking-widest uppercase text-red-500 mb-4 block" style={{ fontFamily: "system-ui" }}>Map View</span>
            <h2 className="text-4xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>Your Journey, on the Map.</h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every fuel and service entry can be tagged with a location. View your entire history on an interactive map to see exactly where you've been and where you've serviced your car.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl aspect-[4/3] flex items-center justify-center">
            <span className="text-zinc-400 dark:text-zinc-700 text-sm" style={{ fontFamily: "system-ui" }}>Screenshot coming soon</span>
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
              { label: "Apple Intelligence", desc: "Leveraging local CoreML and Vision frameworks for secure OCR." },
              { label: "Native SwiftUI", desc: "A 100% native experience optimized for iOS 18 & 26." },
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
              { label: "On-Device Processing", desc: "Curb has no servers. Your location, receipts, and vehicle data never leave your iPhone." },
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
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400" style={{ fontFamily: "system-ui" }}>© 2026 Carson Smith. Built in San Jose.</p>
          <div className="flex gap-6">
            <a href="mailto:support@carsonjs.me" className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors" style={{ fontFamily: "system-ui" }}>
              support@carsonjs.me
            </a>
            <a href="/curb/privacy" className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors" style={{ fontFamily: "system-ui" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}