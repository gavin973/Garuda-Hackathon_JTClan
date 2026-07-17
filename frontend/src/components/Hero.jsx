import { IconArrowRight, IconChart, IconCpu, IconLeaf, IconSprout } from "./Icons";

const stats = [
    { value: "20+", label: "Crop Types" },
    { value: "95%", label: "Accuracy" },
    { value: "<2s", label: "Response Time" },
];

const previewCrops = [
    { name: "Rice", confidence: 92 },
    { name: "Maize", confidence: 78 },
    { name: "Banana", confidence: 65 },
];

const soilMetrics = [
    { label: "Nitrogen", value: "90 mg/kg" },
    { label: "Phosphorus", value: "42 mg/kg" },
    { label: "Potassium", value: "43 mg/kg" },
    { label: "Soil pH", value: "6.5" },
];

function HeroPreview() {
    return (
        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-brand-100/40 blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/8 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 bg-brand-800 border-b border-brand-700/50">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-700 text-white">
                            <IconCpu className="w-4 h-4" />
                        </span>
                        <div>
                            <p className="text-xs font-semibold text-white leading-tight">AgroMind Engine</p>
                            <p className="text-[10px] text-brand-200">Live prediction preview</p>
                        </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-700/80 text-[10px] font-semibold text-brand-100 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                    </span>
                </div>

                <div className="p-5 space-y-4">
                    <div className="rounded-xl bg-brand-50 border border-brand-100 p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-600">
                                    Top Recommendation
                                </p>
                                <p className="mt-1 text-2xl font-extrabold text-slate-900 capitalize">
                                    {previewCrops[0].name}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-extrabold text-brand-700 tabular-nums">
                                    {previewCrops[0].confidence}%
                                </p>
                                <p className="text-[10px] font-medium text-slate-500">confidence</p>
                            </div>
                        </div>
                        <div className="mt-3 h-2 bg-white rounded-full overflow-hidden border border-brand-100">
                            <div
                                className="h-full rounded-full bg-brand-600"
                                style={{ width: `${previewCrops[0].confidence}%` }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                        {soilMetrics.map((metric) => (
                            <div
                                key={metric.label}
                                className="rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-2.5"
                            >
                                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                    {metric.label}
                                </p>
                                <p className="mt-0.5 text-sm font-bold text-slate-800 tabular-nums">
                                    {metric.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-xl border border-slate-100 p-3.5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-2.5">
                            Ranked Alternatives
                        </p>
                        <div className="space-y-2">
                            {previewCrops.map((crop, index) => (
                                <div key={crop.name} className="flex items-center gap-2.5">
                                    <span className="flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold bg-slate-200 text-slate-600">
                                        {index + 1}
                                    </span>
                                    <span className="text-sm font-medium text-slate-700 capitalize flex-1">
                                        {crop.name}
                                    </span>
                                    <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-brand-500"
                                            style={{ width: `${crop.confidence}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 tabular-nums w-8 text-right">
                                        {crop.confidence}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-700">
                    <IconChart className="w-4 h-4" />
                </span>
                <div>
                    <p className="text-xs font-bold text-slate-800">ML-Powered</p>
                    <p className="text-[10px] text-slate-500">Random Forest model</p>
                </div>
            </div>

            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg shadow-slate-900/6">
                <IconSprout className="w-4 h-4 text-brand-600" />
                <span className="text-xs font-semibold text-slate-700">20+ crops</span>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative pt-[calc(var(--navbar-height)+3rem)] pb-20 lg:pb-28 hero-bg overflow-hidden">
            <div className="absolute inset-0 hero-grid pointer-events-none opacity-40" />
            <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-6 lg:px-8 relative">
                <div className="animate-fade-up">
                    <span className="section-label">
                        <IconLeaf className="w-3.5 h-3.5" />
                        Sustainable Agriculture
                    </span>

                    <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight text-slate-900">
                        AI-Powered{" "}
                        <span className="gradient-text">Crop</span>
                        <br />
                        Recommendation
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                        Empowering farmers with artificial intelligence to maximize
                        harvest while promoting sustainable agriculture.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="#predict" className="btn-primary">
                            Try AI Now
                            <IconArrowRight />
                        </a>
                        <a href="#features" className="btn-secondary">
                            Learn More
                        </a>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-extrabold text-brand-700 tabular-nums">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-slate-500 font-medium mt-0.5">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="animate-fade-up" style={{ animationDelay: "0.12s" }}>
                    <HeroPreview />
                </div>
            </div>
        </section>
    );
}
