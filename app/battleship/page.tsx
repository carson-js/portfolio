export default function Battleship() {
    return (
        <main
          className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100"
          style={{ fontFamily: "'Courier New', 'Courier', monospace" }}
        >
            {/* Navigation */}
            <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
                <a href="/" className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                    ← carsonjs.me
                </a>
                <span className="text-sm tracking-widest text-slate-400 uppercase">Battleship</span>
            </nav>

            {/* Hero */}
            <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-32 overflow-hidden">
                <div className="relative z-10 max-w-xl">
                    <div className="inline-block mb-6 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs text-slate-400 tracking-widest uppercase">
                        C / C++ · Spring 2026
                    </div>
                    <h1 className="text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-slate-50" style={{ letterSpacing: "-0.03em" }}>
                        Battleship
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                        A fully-featured terminal Battleship game built from scratch in C++.
                    </p>
                </div>
            </section>
        </main>
    )
}