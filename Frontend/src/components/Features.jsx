const features = [
    {
        icon: "🎯",
        title: "Accurate Prediction",
        desc: "Predict the best crop based on soil nutrients and environmental conditions with high precision.",
        accent: "from-emerald-500/10 to-green-500/5",
    },
    {
        icon: "⚡",
        title: "AI Recommendation",
        desc: "Powered by Machine Learning to provide fast and reliable recommendations in seconds.",
        accent: "from-lime-500/10 to-emerald-500/5",
    },
    {
        icon: "📊",
        title: "Data Driven",
        desc: "Recommendations based on real agricultural datasets and scientific analysis.",
        accent: "from-teal-500/10 to-green-500/5",
    },
    {
        icon: "🌍",
        title: "Sustainable Farming",
        desc: "Increase productivity while supporting sustainable and eco-friendly agriculture.",
        accent: "from-green-500/10 to-emerald-500/5",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="section-label">Features</span>
                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Why Choose{" "}
                        <span className="gradient-text">AgroMind AI</span>?
                    </h2>
                    <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                        Empowering farmers with Artificial Intelligence to make smarter
                        crop decisions and improve agricultural productivity.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className={`group relative rounded-2xl p-7 bg-gradient-to-br ${item.accent} border border-green-100/80 card-hover cursor-default`}
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm shadow-green-900/5 text-3xl group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mt-5 text-slate-800">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
