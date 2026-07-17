import { IconLeaf } from "./Icons";

export default function Footer() {
    return (
        <footer id="about" className="relative mt-24 bg-brand-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-700 text-white">
                                <IconLeaf className="w-5 h-5" />
                            </span>
                            <h2 className="text-xl font-extrabold">AgroMind AI</h2>
                        </div>
                        <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
                            AI-powered crop recommendation platform for sustainable
                            and data-driven farming decisions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-200 mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "#features", label: "Features" },
                                { href: "#how-it-works", label: "How It Works" },
                                { href: "#predict", label: "Predict Crop" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-200 mb-4 text-sm uppercase tracking-wide">Built For</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Garuda Hacks 2026
                        </p>
                        <p className="mt-2 text-slate-500 text-xs">
                            JTClan Team — Smart Agriculture Hackathon
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-brand-300/70 text-sm">
                        © 2026 AgroMind AI. All rights reserved.
                    </p>
                    <p className="text-brand-300/70 text-sm">
                        Built for farmers worldwide
                    </p>
                </div>
            </div>
        </footer>
    );
}
