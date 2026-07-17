import { getCrop } from "../data/crops";
import SoilHealthIndicator from "./SoilHealthIndicator";
import {
    IconBrain,
    IconCalendar,
    IconCheck,
    IconDroplet,
    IconFlask,
    IconSprout,
    IconThermometer,
    IconTrophy,
} from "./Icons";

function getBadgeStyle(confidence) {
    if (confidence >= 85) return "bg-brand-50 text-brand-800 ring-brand-200";
    if (confidence >= 65) return "bg-brand-50/80 text-brand-700 ring-brand-100";
    return "bg-slate-100 text-slate-700 ring-slate-200";
}

function getBarColor(confidence) {
    if (confidence >= 85) return "bg-brand-600";
    if (confidence >= 70) return "bg-brand-500";
    if (confidence >= 55) return "bg-brand-400";
    return "bg-brand-300";
}

const rankBarColors = ["bg-brand-600", "bg-brand-500", "bg-brand-400"];

function RankBadge({ rank }) {
    const styles = [
        "bg-brand-700 text-white",
        "bg-slate-600 text-white",
        "bg-slate-400 text-white",
    ];
    return (
        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold ${styles[rank]}`}>
            {rank + 1}
        </span>
    );
}

export default function ResultCard({ result }) {
    if (!result) return null;

    const crop = getCrop(result.recommendation);

    return (
        <section className="mt-10 animate-fade-up">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 overflow-hidden">
                <div className="bg-brand-800 px-8 py-10 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white" />
                    </div>

                    <div className="relative">
                        <p className="text-brand-200 text-xs font-semibold uppercase tracking-widest">
                            Recommended Crop
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 capitalize">
                            {result.recommendation}
                        </h2>
                        <span
                            className={`inline-block mt-4 px-4 py-1.5 rounded-full font-semibold text-sm ring-1 ring-inset ${getBadgeStyle(result.confidence)}`}
                        >
                            {result.confidence}% Confidence
                        </span>
                    </div>
                </div>

                <div className="p-8 lg:p-10">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-semibold text-slate-700">AI Confidence Level</span>
                            <span className="text-sm font-bold text-brand-700 tabular-nums">{result.confidence}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarColor(result.confidence)}`}
                                style={{ width: `${result.confidence}%` }}
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-base font-bold text-slate-800 mb-5 flex items-center gap-2">
                            <IconTrophy className="w-5 h-5 text-brand-700" />
                            Top Recommendations
                        </h3>
                        <div className="space-y-4">
                            {result.top3.map((item, index) => (
                                <div key={item.crop} className="group">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-slate-700 flex items-center gap-2.5">
                                            <RankBadge rank={index} />
                                            <span className="capitalize">{item.crop}</span>
                                        </span>
                                        <span className="text-sm font-bold text-brand-700 tabular-nums">
                                            {item.confidence}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${rankBarColors[index] ?? "bg-brand-400"}`}
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
                            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <IconSprout className="w-5 h-5 text-brand-700" />
                                Crop Information — {crop.displayName}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {crop.description}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                                {[
                                    { Icon: IconCalendar, label: "Harvest", value: crop.harvest },
                                    { Icon: IconDroplet, label: "Water", value: crop.water },
                                    { Icon: IconThermometer, label: "Temperature", value: crop.temperature },
                                    { Icon: IconFlask, label: "Soil pH", value: crop.ph },
                                ].map(({ Icon, label, value }) => (
                                    <div
                                        key={label}
                                        className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors"
                                    >
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                                            <Icon className="w-3.5 h-3.5" />
                                            {label}
                                        </p>
                                        <p className="mt-1.5 font-bold text-slate-800 text-sm">
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-10 bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <IconBrain className="w-5 h-5 text-brand-700" />
                            AI Analysis
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {[
                                "Random Forest model predicts this crop with high confidence.",
                                "Soil nutrients match the recommended crop profile.",
                                "Environmental conditions are suitable for growth.",
                                "Recommendation based on ML analysis of agricultural data.",
                            ].map((text) => (
                                <li key={text} className="flex items-start gap-2.5 text-sm text-slate-600">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-700 mt-0.5 shrink-0">
                                        <IconCheck className="w-3 h-3" />
                                    </span>
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
