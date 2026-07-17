import { evaluateSoilHealth } from "../utils/soilHealth";

const statusStyles = {
    good: "text-emerald-700",
    medium: "text-amber-700",
    poor: "text-red-700",
};

const BLOCK_COUNT = 18;

export default function SoilHealthIndicator({ input, cropName }) {
    const health = evaluateSoilHealth(input, cropName);

    if (!health) return null;

    const { overallScore, rating, metrics } = health;
    const filledBlocks = Math.round((overallScore / 100) * BLOCK_COUNT);

    return (
        <div className="mt-10 bg-gradient-to-br from-brand-50/80 to-emerald-50/50 rounded-2xl p-6 lg:p-8 border border-green-100/80">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
                🌱 Soil Health
            </h3>

            <p className={`text-base font-bold mb-4 ${rating.color}`}>
                {rating.emoji} {rating.label} ({overallScore}%)
            </p>

            <div className="font-mono text-lg leading-none tracking-tight select-none mb-6">
                {Array.from({ length: BLOCK_COUNT }, (_, i) => (
                    <span
                        key={i}
                        className={i < filledBlocks ? "text-brand-600" : "text-slate-300"}
                    >
                        {i < filledBlocks ? "█" : "░"}
                    </span>
                ))}
            </div>

            <div className="space-y-2.5 rounded-xl bg-white/60 border border-white/80 p-4">
                {metrics.map((metric) => (
                    <div
                        key={metric.key}
                        className="flex items-center justify-between gap-4 py-1"
                    >
                        <span className="text-sm font-semibold text-slate-700">
                            {metric.label}
                        </span>
                        <span className={`text-sm font-bold tabular-nums ${statusStyles[metric.level]}`}>
                            {metric.icon} {metric.text}
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
