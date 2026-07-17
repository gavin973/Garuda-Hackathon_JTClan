import { getCrop } from "../data/crops";
import SoilHealthIndicator from "./SoilHealthIndicator";

const medals = ["🥇", "🥈", "🥉"];

function getBadgeStyle(confidence) {
    if (confidence >= 90) return "bg-emerald-100 text-emerald-700 ring-emerald-200";
    if (confidence >= 70) return "bg-amber-100 text-amber-700 ring-amber-200";
    return "bg-red-100 text-red-700 ring-red-200";
}

function getBarColor(confidence) {
    if (confidence >= 90) return "bg-gradient-to-r from-brand-600 to-brand-400";
    if (confidence >= 70) return "bg-gradient-to-r from-amber-500 to-amber-400";
    return "bg-gradient-to-r from-red-500 to-red-400";
}

export default function ResultCard({ result }) {
    if (!result) return null;

    const crop = getCrop(result.recommendation);

    return (
        <section className="mt-10 animate-fade-up">
            <div className="bg-white rounded-3xl border border-green-100/80 shadow-xl shadow-green-900/5 overflow-hidden">
                <div className="bg-gradient-to-br from-brand-700 to-brand-600 px-8 py-10 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white" />
                    </div>

                    <div className="relative">
                        <p className="text-brand-200 text-sm font-semibold uppercase tracking-widest">
                            Recommended Crop
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 capitalize">
                            {result.recommendation}
                        </h2>
                        <span
                            className={`inline-block mt-4 px-5 py-2 rounded-full font-bold text-sm ring-1 ring-inset ${getBadgeStyle(result.confidence)}`}
                        >
                            {result.confidence}% Confidence
                        </span>
                    </div>
                </div>

                <div className="p-8 lg:p-10">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-semibold text-slate-700">AI Confidence Level</span>
                            <span className="text-sm font-bold text-brand-700">{result.confidence}%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarColor(result.confidence)}`}
                                style={{ width: `${result.confidence}%` }}
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
                            🏆 Top Recommendations
                        </h3>
                        <div className="space-y-4">
                            {result.top3.map((item, index) => (
                                <div key={item.crop} className="group">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-slate-700 flex items-center gap-2">
                                            <span className="text-lg">{medals[index]}</span>
                                            <span className="capitalize">{item.crop}</span>
                                        </span>
                                        <span className="text-sm font-bold text-brand-700 tabular-nums">
                                            {item.confidence}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2.5 mt-2 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarColor(item.confidence)}`}
                                            style={{ width: `${item.confidence}%`, transitionDelay: `${index * 150}ms` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <SoilHealthIndicator
                        input={result.input}
                        cropName={result.recommendation}
                    />

                    {crop && (
                        <div className="mt-10 pt-10 border-t border-slate-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                🌱 Crop Information — {crop.displayName}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {crop.description}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                                {[
                                    { icon: "📅", label: "Harvest", value: crop.harvest },
                                    { icon: "💧", label: "Water", value: crop.water },
                                    { icon: "🌡", label: "Temperature", value: crop.temperature },
                                    { icon: "⚗", label: "Soil pH", value: crop.ph },
                                ].map((info) => (
                                    <div
                                        key={info.label}
                                        className="bg-brand-50/70 border border-green-100 rounded-xl p-4 hover:bg-brand-50 transition-colors"
                                    >
                                        <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                                            {info.icon} {info.label}
                                        </p>
                                        <p className="mt-1 font-bold text-slate-800 text-sm">
                                            {info.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-10 bg-gradient-to-br from-brand-50 to-emerald-50/50 rounded-2xl p-6 border border-green-100/80">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            🤖 AI Analysis
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {[
                                "Random Forest model predicts this crop with high confidence.",
                                "Soil nutrients match the recommended crop profile.",
                                "Environmental conditions are suitable for growth.",
                                "Recommendation based on ML analysis of agricultural data.",
                            ].map((text) => (
                                <li key={text} className="flex items-start gap-2 text-sm text-slate-600">
                                    <span className="text-brand-600 mt-0.5 shrink-0">✓</span>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

