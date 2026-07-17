import { IconChart, IconCpu, IconGlobe, IconTarget } from "./Icons";

const features = [
    {
        Icon: IconTarget,
        title: "Accurate Prediction",
        desc: "Predict the best crop based on soil nutrients and environmental conditions with high precision.",
    },
    {
        Icon: IconCpu,
        title: "AI Recommendation",
        desc: "Powered by machine learning to provide fast and reliable recommendations in seconds.",
    },
    {
        Icon: IconChart,
        title: "Data Driven",
        desc: "Recommendations based on real agricultural datasets and scientific analysis.",
    },
    {
        Icon: IconGlobe,
        title: "Sustainable Farming",
        desc: "Increase productivity while supporting sustainable and eco-friendly agriculture.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 lg:py-32 bg-white relative border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="section-label">Features</span>
                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                        Why Choose{" "}
                        <span className="gradient-text">AgroMind AI</span>?
                    </h2>
                    <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                        Empowering farmers with artificial intelligence to make smarter
                        crop decisions and improve agricultural productivity.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {features.map(({ Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group relative rounded-2xl p-7 bg-white border border-slate-200/80 card-hover cursor-default"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-100 transition-colors duration-300">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mt-5 text-slate-800">
                                {title}
                            </h3>
                            <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
