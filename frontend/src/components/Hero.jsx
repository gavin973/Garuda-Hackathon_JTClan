import hero from "../assets/hero.png";

const stats = [
    { value: "9+", label: "Crop Types" },
    { value: "95%", label: "Accuracy" },
    { value: "<2s", label: "Response Time" },
];

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 mesh-bg overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-400/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-6 lg:px-8 relative">
                <div className="animate-fade-up">
                    <span className="section-label">
                        🌿 Sustainable Agriculture
                    </span>

                    <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                        AI-Powered{" "}
                        <span className="gradient-text">Crop</span>
                        <br />
                        Recommendation
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                        Empowering farmers with Artificial Intelligence to maximize
                        harvest while promoting sustainable agriculture.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#predict" className="btn-primary">
                            🚀 Try AI Now
                        </a>
                        <a href="#features" className="btn-secondary">
                            Learn More
                        </a>
                    </div>

                    <div className="mt-12 flex gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-extrabold text-brand-700">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-slate-500 font-medium mt-0.5">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-200/40 to-brand-400/20 rounded-3xl blur-2xl scale-90" />
                    <img
                        src={hero}
                        className="relative w-full max-w-lg drop-shadow-2xl animate-float rounded-2xl"
                        alt="Smart farming with AI"
                    />
                </div>
            </div>
        </section>
    );
}
