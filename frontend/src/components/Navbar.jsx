import { useState, useEffect } from "react";
import { IconArrowRight, IconLeaf } from "./Icons";

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
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            <nav
                className={`navbar-bar transition-shadow duration-300 ${
                    scrolled ? "navbar-bar-scrolled" : ""
                }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 h-[var(--navbar-height)]">
                    <a href="#" className="flex items-center gap-3 group shrink-0">
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-700 text-white group-hover:bg-brand-800 transition-colors">
                            <IconLeaf className="w-4 h-4" />
                        </span>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-extrabold text-slate-900 leading-tight">
                                AgroMind
                            </h1>
                            <p className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase -mt-0.5">
                                AI Platform
                            </p>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-0.5">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-brand-700 hover:bg-slate-100 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#predict" className="btn-primary ml-2 !py-2 !px-4 !text-sm">
                            Try AI
                            <IconArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-100 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`block w-5 h-0.5 bg-slate-800 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-slate-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-slate-800 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden border-t border-slate-200 bg-white px-6 py-3 animate-fade-up">
                        <div className="flex flex-col gap-1">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-brand-700 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#predict"
                                onClick={() => setMenuOpen(false)}
                                className="btn-primary mt-2 text-center"
                            >
                                Try AI
                                <IconArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
