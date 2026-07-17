const steps = [
    {
        icon: "🌱",
        title: "Enter Soil Data",
        description: "Input soil nutrients, temperature, humidity, pH, and rainfall using intuitive sliders.",
    },
    {
        icon: "🤖",
        title: "AI Analysis",
        description: "Our Machine Learning model analyzes the data and predicts the most suitable crop.",
    },
    {
        icon: "🌾",
        title: "Get Recommendation",
        description: "Receive the best crop recommendation instantly with confidence scores and insights.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 lg:py-32 bg-brand-50/60 relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="section-label">How It Works</span>
                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Smart Farming Made{" "}
                        <span className="gradient-text">Easy</span>
                    </h2>
                    <p className="mt-5 text-slate-500 text-lg">
                        Get the best crop recommendation in just three simple steps.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="relative bg-white rounded-2xl p-8 text-center border border-green-100/80 shadow-sm card-hover"
                        >
                            <div className="relative inline-flex">
                                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-white text-xs font-bold shadow-md">
                                    {index + 1}
                                </span>
                                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-50 text-5xl">
                                    {step.icon}
                                </div>
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-slate-800">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
