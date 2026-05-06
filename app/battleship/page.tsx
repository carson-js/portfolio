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

            {/* Technical highlights */}
            <section className="border-t border-slate-200 dark:border-slate-800 py-32">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-xs tracking-widest uppercase text-slate-400 mb-16 text-center">How it works</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "Algorithm",
                                title: "BFS Ship Detection",
                                body: "After each hit, a breadth-first search floods outward from the struck cell across all connected ship cells. If every cell in the connected component is hit, the ship is marked sunk and its icons update from 💥 to 🔥. Implemented independently - BFS wasn't covered in class, just hinted at as the right tool.",
                            },
                            {
                                tag: "Systems",
                                title: "Binary Save & Load",
                                body: "The full game state - both player and enemy boards - it is serialized to a binary file with a magic number header for format validation. The game can be saved mid-match and resumed exactly where it left off, with all board state intact.",
                            },
                            {
                                tag: "C Program",
                                title: "show_fleets",
                                body: "A standalone reader written purely in C that parses the binary save file and prints the current state of both boards to the terminal, along with whether the game is in progress, the player won, or the enemy won. A deliberate constraint to practice working across both languages.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-slate-400 dark:hover:border-slate-60 transition-colors"
                            >
                                <span className="text-xs tracking-widest uppercase text-[#e07060]">{item.tag}</span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{item.title}</h3>
                                <p className="text-sm text-slate-50 dark:text-slate-400 leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Game board legend */}
            <section className="border-t border-slate-200 dark:border-slate-800 py-32">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-xs tracking-widest uppercase text-slate-40 mb-16 text-center">Cell states</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                        {[
                            { emoji: "🚢", label: "Ship", desc: "Undamaged ship cell" },
                            { emoji: "💥", label: "Hit", desc: "Struck but not sunk" },
                            { emoji: "🔥", label: "Sunk", desc: "All cells hit — BFS confirmed" },
                            { emoji: "🚀", label: "Miss", desc: "Shot landed in open water" },
                        ].map((item) => (
                           <div key={item.label} className="flex flex-col items-center text-center gap-2 p-4 border broder-slate-200 dark:border-slate-800 rounded-2xl">
                                <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-slate-50">{item.label}</span>
                                <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                           </div> 
                        ))}
                    </div>
                </div>
            </section>
            {/* Screenshots placeholder */}
            <section className="border-t border-slate-200 dark:border-slate-800 py-32">
                <div className="max-w-5xl mx-auto px-6">
                <p className="text-xs tracking-widest uppercase text-slate-400 mb-16 text-center">In action</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Mid-game board", "Win screen", "show_fleets output"].map((label) => (
                    <div
                        key={label}
                        className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl aspect-video flex items-center justify-center"
                    >
                        <span className="text-xs text-slate-400">{label} — coming soon</span>
                    </div>
                    ))}
                </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-400">© 2026 Carson Smith. Built in San Jose.</p>
                    <a href="/" className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                        ← Back to portfolio
                    </a>
                </div>
            </footer>
        </main>
    )
}