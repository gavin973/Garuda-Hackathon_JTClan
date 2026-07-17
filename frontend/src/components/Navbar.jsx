import { useState, useEffect } from "react";

const links = [
    { href: "#", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#predict", label: "Predict" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "glass shadow-lg shadow-green-900/5 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
                <a href="#" className="flex items-center gap-2.5 group">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-white text-xl shadow-md shadow-brand-700/30 group-hover:scale-105 transition-transform">
                        🌱
                    </span>
                    <div>
                        <h1 className="text-xl font-extrabold text-brand-800 leading-tight">
                            AgroMind
                        </h1>
                        <p className="text-[10px] font-semibold text-brand-600 tracking-widest uppercase -mt-0.5">
                            AI Platform
                        </p>
                    </div>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#predict" className="btn-primary ml-3 !py-2.5 !px-5 !text-sm">
                        Try AI →
                    </a>
                </div>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-brand-50 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-brand-800 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-brand-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-brand-800 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden glass border-t border-white/50 animate-fade-up">
                    <div className="flex flex-col px-6 py-4 gap-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#predict"
                            onClick={() => setMenuOpen(false)}
                            className="btn-primary mt-2 text-center"
                        >
                            Try AI →
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
