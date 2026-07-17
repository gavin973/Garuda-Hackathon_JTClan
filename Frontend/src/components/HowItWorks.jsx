import { IconBrain, IconDatabase, IconSprout } from "./Icons";

const steps = [
    {
        Icon: IconDatabase,
        title: "Enter Soil Data",
        description: "Input soil nutrients, temperature, humidity, pH, and rainfall using intuitive sliders.",
    },
    {
        Icon: IconBrain,
        title: "AI Analysis",
        description: "Our machine learning model analyzes the data and predicts the most suitable crop.",
    },
    {
        Icon: IconSprout,
        title: "Get Recommendation",
        description: "Receive the best crop recommendation instantly with confidence scores and insights.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="section-label">How It Works</span>
                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                        Smart Farming Made{" "}
                        <span className="gradient-text">Easy</span>
                    </h2>
                    <p className="mt-5 text-slate-500 text-lg">
                        Get the best crop recommendation in just three simple steps.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-slate-200" />

                    {steps.map(({ Icon, title, description }, index) => (
                        <div
                            key={title}
                            className="relative bg-white rounded-2xl p-8 text-center border border-slate-200/80 shadow-sm card-hover"
                        >
                            <div className="relative inline-flex">
                                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-white text-xs font-bold">
                                    {index + 1}
                                </span>
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-brand-50 text-brand-700">
                                    <Icon className="w-8 h-8" />
                                </div>
                            </div>

                            <h3 className="mt-6 text-lg font-bold text-slate-800">
                                {title}
                            </h3>
                            <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
