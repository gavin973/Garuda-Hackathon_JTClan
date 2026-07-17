import { useState, useRef, useEffect } from "react";
import api from "../services/api";

const soilFields = [
    { icon: "🌿", label: "Nitrogen (N)", name: "N", min: 0, max: 140, unit: "mg/kg" },
    { icon: "🧪", label: "Phosphorus (P)", name: "P", min: 0, max: 145, unit: "mg/kg" },
    { icon: "🍃", label: "Potassium (K)", name: "K", min: 0, max: 205, unit: "mg/kg" },
    { icon: "⚗", label: "Soil pH", name: "ph", min: 0, max: 14, step: 0.1, unit: "" },
];

const envFields = [
    { icon: "🌡", label: "Temperature", name: "temperature", min: 0, max: 50, unit: "°C" },
    { icon: "💧", label: "Humidity", name: "humidity", min: 0, max: 100, unit: "%" },
    { icon: "🌧", label: "Rainfall", name: "rainfall", min: 0, max: 300, unit: "mm" },
];

const presets = [
    { label: "Rice Field", values: { N: 90, P: 42, K: 43, temperature: 25, humidity: 80, ph: 6.5, rainfall: 200 } },
    { label: "Dry Climate", values: { N: 70, P: 35, K: 40, temperature: 32, humidity: 45, ph: 7.0, rainfall: 80 } },
    { label: "Tropical", values: { N: 85, P: 50, K: 55, temperature: 28, humidity: 90, ph: 6.0, rainfall: 250 } },
];

function RangeField({ item, value, onChange }) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const pct = ((value - item.min) / (item.max - item.min)) * 100;
        ref.current.style.setProperty("--range-progress", `${pct}%`);
    }, [value, item.min, item.max]);

    return (
        <div className="group">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                    <span>{item.icon}</span>
                    {item.label}
                </span>
                <span className="text-sm font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-lg tabular-nums">
                    {value}{item.unit && ` ${item.unit}`}
                </span>
            </div>
            <input
                ref={ref}
                type="range"
                name={item.name}
                value={value}
                min={item.min}
                max={item.max}
                step={item.step || 1}
                onChange={onChange}
            />
            <div className="flex justify-between mt-1">
                <span className="text-[11px] text-slate-400">{item.min}</span>
                <span className="text-[11px] text-slate-400">{item.max}</span>
            </div>
        </div>
    );
}

export default function PredictionForm({ setResult }) {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        N: 90,
        P: 42,
        K: 43,
        temperature: 25,
        humidity: 80,
        ph: 6.5,
        rainfall: 200,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: Number(e.target.value) });
    };

    const applyPreset = (values) => {
        setForm(values);
        setResult(null);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setResult(null);

        try {
            const response = await api.post("/predict", form);
            setTimeout(() => {
                setResult({
                    ...response.data,
                    input: response.data.input ?? form,
                });
                setLoading(false);
            }, 1200);
        } catch {
            alert("Prediction failed. Please check your connection and try again.");
            setLoading(false);
        }
    };

    return (
        <section className="relative bg-white rounded-3xl border border-green-100/80 shadow-xl shadow-green-900/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 animate-shimmer" />

            <div className="p-8 lg:p-12">
                <div className="text-center max-w-xl mx-auto">
                    <span className="section-label">AI Prediction</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Crop Recommendation
                    </h2>
                    <p className="mt-4 text-slate-500 leading-relaxed">
                        Adjust the sliders below to match your soil and environmental
                        conditions, then let AI find the best crop for you.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {presets.map((preset) => (
                        <button
                            key={preset.label}
                            type="button"
                            onClick={() => applyPreset(preset.values)}
                            className="px-4 py-2 text-sm font-semibold rounded-full border border-brand-200 text-brand-700 bg-brand-50/50 hover:bg-brand-100 transition-colors"
                        >
                            {preset.label}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid lg:grid-cols-2 gap-10">
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6">
                            <span className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-sm">🧪</span>
                            Soil Nutrients
                        </h3>
                        <div className="space-y-7">
                            {soilFields.map((item) => (
                                <RangeField
                                    key={item.name}
                                    item={item}
                                    value={form[item.name]}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-6">
                            <span className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-sm">🌤</span>
                            Environment
                        </h3>
                        <div className="space-y-7">
                            {envFields.map((item) => (
                                <RangeField
                                    key={item.name}
                                    item={item}
                                    value={form[item.name]}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-12 w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-700 to-brand-500 text-white text-lg font-bold py-5 shadow-lg shadow-brand-700/25 hover:shadow-brand-700/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-3">
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            AI is analyzing your soil data...
                        </span>
                    ) : (
                        "🌱 Predict Best Crop"
                    )}
                </button>
            </div>
        </section>
    );
}
