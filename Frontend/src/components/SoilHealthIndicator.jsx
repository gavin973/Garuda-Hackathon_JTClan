import { evaluateSoilHealth } from "../utils/soilHealth";
import { IconSprout, StatusDot } from "./Icons";

const statusStyles = {
    good: "text-emerald-700",
    medium: "text-amber-700",
    poor: "text-red-700",
};

export default function SoilHealthIndicator({ input, cropName }) {
    const health = evaluateSoilHealth(input, cropName);

    if (!health) return null;

    const { overallScore, rating, metrics } = health;

    return (
        <div className="mt-10 bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-200">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                <IconSprout className="w-5 h-5 text-brand-700" />
                Soil Health
            </h3>

            <div className="flex items-center gap-2 mb-4">
                <StatusDot level={rating.level} />
                <p className={`text-base font-bold ${rating.color}`}>
                    {rating.label} ({overallScore}%)
                </p>
            </div>

            <div className="mb-6">
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-700 ${rating.bg}`}
                        style={{ width: `${overallScore}%` }}
                    />
                </div>
            </div>

            <div className="space-y-2.5 rounded-xl bg-white border border-slate-200 p-4">
                {metrics.map((metric) => (
                    <div
                        key={metric.key}
                        className="flex items-center justify-between gap-4 py-1"
                    >
                        <span className="text-sm font-semibold text-slate-700">
                            {metric.label}
                        </span>
                        <span className={`text-sm font-bold tabular-nums flex items-center gap-2 ${statusStyles[metric.level]}`}>
                            <StatusDot level={metric.level} />
                            {metric.text}
                        </span>
                    </div>
                ))}
            </div>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Evaluated against optimal conditions for{" "}
                <span className="font-semibold text-brand-700 capitalize">{cropName}</span>{" "}
                based on agricultural dataset profiles.
            </p>
        </div>
    );
}
