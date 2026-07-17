const cropRanges = {
    rice:        { N: [60, 99],   P: [35, 60],   K: [35, 45],   temperature: [20, 27], humidity: [80, 85], ph: [5.0, 7.9], rainfall: [183, 299] },
    maize:       { N: [60, 100],  P: [35, 60],   K: [15, 25],   temperature: [18, 27], humidity: [55, 75], ph: [5.5, 7.0], rainfall: [61, 110] },
    chickpea:    { N: [20, 60],   P: [55, 80],   K: [75, 85],   temperature: [17, 21], humidity: [14, 20], ph: [6.0, 8.9], rainfall: [65, 95] },
    kidneybeans: { N: [0, 40],    P: [55, 80],   K: [15, 25],   temperature: [15, 25], humidity: [18, 25], ph: [5.5, 6.0], rainfall: [60, 150] },
    pigeonpeas:  { N: [0, 40],    P: [55, 80],   K: [15, 25],   temperature: [18, 37], humidity: [30, 70], ph: [4.5, 7.4], rainfall: [90, 199] },
    mothbeans:   { N: [0, 40],    P: [35, 60],   K: [15, 25],   temperature: [24, 32], humidity: [40, 65], ph: [3.5, 9.9], rainfall: [31, 74] },
    mungbean:    { N: [0, 40],    P: [35, 60],   K: [15, 25],   temperature: [27, 30], humidity: [80, 90], ph: [6.2, 7.2], rainfall: [36, 60] },
    blackgram:   { N: [20, 60],   P: [55, 80],   K: [15, 25],   temperature: [25, 35], humidity: [60, 70], ph: [6.5, 7.8], rainfall: [60, 75] },
    lentil:      { N: [0, 40],    P: [55, 80],   K: [15, 25],   temperature: [18, 30], humidity: [60, 70], ph: [5.9, 7.8], rainfall: [35, 55] },
    pomegranate: { N: [0, 40],    P: [5, 30],    K: [35, 45],   temperature: [18, 25], humidity: [85, 95], ph: [5.6, 7.2], rainfall: [103, 113] },
    banana:      { N: [80, 120],  P: [70, 95],   K: [45, 55],   temperature: [25, 30], humidity: [75, 85], ph: [5.5, 6.5], rainfall: [90, 120] },
    mango:       { N: [0, 40],    P: [15, 40],   K: [25, 35],   temperature: [27, 36], humidity: [45, 55], ph: [4.5, 7.0], rainfall: [89, 101] },
    grapes:      { N: [0, 40],    P: [120, 145], K: [195, 205], temperature: [9, 42],  humidity: [80, 84], ph: [5.5, 6.5], rainfall: [65, 75] },
    watermelon:  { N: [80, 120],  P: [5, 30],    K: [45, 55],   temperature: [24, 27], humidity: [80, 90], ph: [6.0, 7.0], rainfall: [40, 60] },
    muskmelon:   { N: [80, 120],  P: [5, 30],    K: [45, 55],   temperature: [27, 30], humidity: [90, 95], ph: [6.0, 6.8], rainfall: [20, 30] },
    apple:       { N: [0, 40],    P: [120, 145], K: [195, 205], temperature: [21, 24], humidity: [90, 95], ph: [5.5, 6.5], rainfall: [100, 125] },
    orange:      { N: [0, 40],    P: [5, 30],    K: [5, 15],    temperature: [10, 35], humidity: [90, 95], ph: [6.0, 8.0], rainfall: [100, 120] },
    papaya:      { N: [31, 70],   P: [46, 70],   K: [45, 55],   temperature: [23, 44], humidity: [90, 95], ph: [6.5, 7.0], rainfall: [40, 249] },
    coconut:     { N: [0, 40],    P: [5, 30],    K: [25, 35],   temperature: [25, 30], humidity: [90, 100], ph: [5.5, 6.5], rainfall: [131, 226] },
    cotton:      { N: [100, 140], P: [35, 60],   K: [15, 25],   temperature: [22, 26], humidity: [75, 85], ph: [5.8, 8.0], rainfall: [61, 100] },
    jute:        { N: [60, 100],  P: [35, 60],   K: [35, 45],   temperature: [23, 27], humidity: [71, 90], ph: [6.0, 7.5], rainfall: [150, 200] },
    coffee:      { N: [80, 120],  P: [15, 40],   K: [25, 35],   temperature: [23, 28], humidity: [50, 70], ph: [6.0, 7.5], rainfall: [115, 200] },
};

const parameters = [
    { key: "N", label: "Nitrogen", labels: { good: "Good", medium: "Medium", poor: "Low" } },
    { key: "P", label: "Phosphorus", labels: { good: "Good", medium: "Medium", poor: "Low" } },
    { key: "K", label: "Potassium", labels: { good: "Good", medium: "Medium", poor: "Low" } },
    { key: "ph", label: "Soil pH", labels: { good: "Optimal", medium: "Medium", poor: "Poor" } },
    { key: "temperature", label: "Temperature", labels: { good: "Suitable", medium: "Moderate", poor: "Unsuitable" } },
    { key: "humidity", label: "Humidity", labels: { good: "Suitable", medium: "Moderate", poor: "Unsuitable" } },
    { key: "rainfall", label: "Rainfall", labels: { good: "Good", medium: "Medium", poor: "Low" } },
];

function scoreValue(value, [min, max]) {
    if (value >= min && value <= max) return 100;

    const range = max - min || 1;
    const distance = value < min ? min - value : value - max;
    return Math.max(0, Math.round(100 - (distance / range) * 80));
}

function getStatus(score, labels) {
    if (score >= 85) return { level: "good", text: labels.good };
    if (score >= 60) return { level: "medium", text: labels.medium };
    return { level: "poor", text: labels.poor };
}

function getOverallRating(score) {
    if (score >= 90) return { label: "Excellent", level: "excellent", color: "text-emerald-600", bg: "bg-emerald-500" };
    if (score >= 75) return { label: "Good", level: "good", color: "text-brand-600", bg: "bg-brand-500" };
    if (score >= 60) return { label: "Fair", level: "fair", color: "text-amber-600", bg: "bg-amber-500" };
    return { label: "Poor", level: "poor", color: "text-red-600", bg: "bg-red-500" };
}

export function evaluateSoilHealth(input, cropName) {
    const cropKey = cropName?.toLowerCase().replace(/\s+/g, "") ?? "";
    const ranges = cropRanges[cropKey];

    if (!input || !ranges) return null;

    const metrics = parameters.map(({ key, label, labels }) => {
        const score = scoreValue(input[key], ranges[key]);
        const status = getStatus(score, labels);
        return { key, label, score, ...status };
    });

    const overallScore = Math.round(
        metrics.reduce((sum, m) => sum + m.score, 0) / metrics.length
    );

    return {
        overallScore,
        rating: getOverallRating(overallScore),
        metrics,
    };
}

export default evaluateSoilHealth;
