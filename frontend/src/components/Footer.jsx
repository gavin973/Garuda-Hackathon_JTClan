export default function Footer() {
    return (
        <footer id="about" className="relative mt-24 bg-brand-900 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-brand-400 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-brand-300 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-700 text-xl">
                                🌱
                            </span>
                            <h2 className="text-xl font-extrabold">AgroMind AI</h2>
                        </div>
                        <p className="mt-4 text-brand-200/80 text-sm leading-relaxed max-w-xs">
                            AI-powered crop recommendation platform for sustainable
                            and data-driven farming decisions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-brand-100 mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {[
                                { href: "#features", label: "Features" },
                                { href: "#how-it-works", label: "How It Works" },
                                { href: "#predict", label: "Predict Crop" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-brand-200/70 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-brand-100 mb-4">Built For</h3>
                        <p className="text-brand-200/80 text-sm leading-relaxed">
                            Garuda Hacks 2026
                        </p>
                        <p className="mt-2 text-brand-300/60 text-xs">
                            JTClan Team — Smart Agriculture Hackathon
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-brand-300/60 text-sm">
                        © 2026 AgroMind AI. All rights reserved.
                    </p>
                    <p className="text-brand-300/60 text-sm">
                        Made with 💚 for farmers worldwide
                    </p>
                </div>
            </div>
        </footer>
    );
}
