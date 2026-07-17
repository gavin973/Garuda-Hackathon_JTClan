const crops = {
    rice: {
        displayName: "Rice",
        description:
            "Rice is a staple cereal crop that thrives in warm, humid climates with high rainfall. It requires abundant water and nitrogen-rich soil, making it ideal for lowland and irrigated fields.",
        harvest: "110 – 130 days",
        water: "High",
        ph: "5.0 – 7.9",
        temperature: "20°C – 27°C",
    },
    maize: {
        displayName: "Maize",
        description:
            "Maize (corn) is a versatile cereal crop suited to warm temperate climates with moderate rainfall. It responds well to balanced NPK fertilization and grows best in well-drained loamy soil.",
        harvest: "90 – 110 days",
        water: "Medium",
        ph: "5.5 – 7.0",
        temperature: "18°C – 27°C",
    },
    chickpea: {
        displayName: "Chickpea",
        description:
            "Chickpea is a drought-tolerant legume grown in cool, semi-arid regions. It enriches soil with nitrogen through biological fixation and prefers low to moderate rainfall with alkaline soil.",
        harvest: "95 – 120 days",
        water: "Low",
        ph: "6.0 – 8.9",
        temperature: "17°C – 21°C",
    },
    kidneybeans: {
        displayName: "Kidney Beans",
        description:
            "Kidney beans are protein-rich legumes that grow in mild climates with moderate humidity. They need phosphorus-rich soil and moderate rainfall, performing well in slightly acidic conditions.",
        harvest: "90 – 120 days",
        water: "Medium",
        ph: "5.5 – 6.0",
        temperature: "15°C – 25°C",
    },
    pigeonpeas: {
        displayName: "Pigeon Peas",
        description:
            "Pigeon peas are hardy legumes adapted to semi-arid tropical regions. They tolerate heat and variable rainfall, fix nitrogen in the soil, and are widely used as both food and fodder.",
        harvest: "120 – 180 days",
        water: "Medium",
        ph: "4.5 – 7.4",
        temperature: "18°C – 37°C",
    },
    mothbeans: {
        displayName: "Moth Beans",
        description:
            "Moth beans are drought-resistant legumes suited to arid and semi-arid zones. They require minimal water, tolerate high temperatures, and grow well in sandy soils with low to moderate nutrients.",
        harvest: "60 – 90 days",
        water: "Low",
        ph: "3.5 – 9.9",
        temperature: "24°C – 32°C",
    },
    mungbean: {
        displayName: "Mung Bean",
        description:
            "Mung beans are fast-growing legumes ideal for warm, humid climates. They enrich soil fertility, need moderate potassium, and are commonly grown as a short-duration pulse crop.",
        harvest: "60 – 75 days",
        water: "Low",
        ph: "6.2 – 7.2",
        temperature: "27°C – 30°C",
    },
    blackgram: {
        displayName: "Black Gram",
        description:
            "Black gram is a heat-tolerant pulse crop grown in tropical and subtropical regions. It prefers moderate rainfall, well-drained soil, and performs well in slightly alkaline conditions.",
        harvest: "70 – 90 days",
        water: "Low",
        ph: "6.5 – 7.8",
        temperature: "25°C – 35°C",
    },
    lentil: {
        displayName: "Lentil",
        description:
            "Lentils are cool-season legumes that require minimal water and moderate temperatures. They thrive in well-drained soils with good phosphorus content and are highly drought tolerant.",
        harvest: "110 – 130 days",
        water: "Low",
        ph: "5.9 – 7.8",
        temperature: "18°C – 30°C",
    },
    pomegranate: {
        displayName: "Pomegranate",
        description:
            "Pomegranate is a fruit tree that grows in semi-arid subtropical climates. It tolerates drought once established, prefers moderate rainfall, and produces best in well-drained calcareous soil.",
        harvest: "5 – 7 months (fruit)",
        water: "Medium",
        ph: "5.6 – 7.2",
        temperature: "18°C – 25°C",
    },
    banana: {
        displayName: "Banana",
        description:
            "Banana is a tropical fruit crop requiring high humidity, warm temperatures, and consistent moisture. It needs potassium-rich soil and performs best in sheltered, well-irrigated areas.",
        harvest: "9 – 12 months",
        water: "High",
        ph: "5.5 – 6.5",
        temperature: "25°C – 30°C",
    },
    mango: {
        displayName: "Mango",
        description:
            "Mango is a tropical fruit tree suited to hot, dry climates with moderate rainfall. It prefers slightly acidic soil, tolerates drought during flowering, and needs warm temperatures year-round.",
        harvest: "3 – 5 months (fruit)",
        water: "Medium",
        ph: "4.5 – 7.0",
        temperature: "27°C – 36°C",
    },
    grapes: {
        displayName: "Grapes",
        description:
            "Grapes are temperate fruit crops that need high phosphorus and potassium in soil. They grow in a wide temperature range but prefer moderate rainfall and slightly acidic, well-drained soil.",
        harvest: "120 – 150 days",
        water: "Low",
        ph: "5.5 – 6.5",
        temperature: "9°C – 42°C",
    },
    watermelon: {
        displayName: "Watermelon",
        description:
            "Watermelon is a warm-season fruit crop that needs high nitrogen and potassium with low rainfall during ripening. It thrives in hot climates with high humidity and well-drained sandy loam.",
        harvest: "70 – 90 days",
        water: "Medium",
        ph: "6.0 – 7.0",
        temperature: "24°C – 27°C",
    },
    muskmelon: {
        displayName: "Muskmelon",
        description:
            "Muskmelon is a heat-loving fruit crop requiring very low rainfall and high humidity. It needs nitrogen-rich soil and warm temperatures, making it ideal for dry-season cultivation.",
        harvest: "70 – 90 days",
        water: "Low",
        ph: "6.0 – 6.8",
        temperature: "27°C – 30°C",
    },
    apple: {
        displayName: "Apple",
        description:
            "Apple is a temperate fruit crop requiring cool climates, high phosphorus, and moderate rainfall. It grows best in slightly acidic soil with high humidity during the growing season.",
        harvest: "140 – 180 days",
        water: "Medium",
        ph: "5.5 – 6.5",
        temperature: "21°C – 24°C",
    },
    orange: {
        displayName: "Orange",
        description:
            "Orange is a citrus fruit tree adapted to subtropical climates with moderate to high humidity. It tolerates a wide temperature range and prefers neutral to slightly alkaline, well-drained soil.",
        harvest: "7 – 12 months",
        water: "Medium",
        ph: "6.0 – 8.0",
        temperature: "10°C – 35°C",
    },
    papaya: {
        displayName: "Papaya",
        description:
            "Papaya is a fast-growing tropical fruit that thrives in hot, humid conditions with moderate to high rainfall. It needs balanced NPK nutrients and neutral soil pH for optimal fruit production.",
        harvest: "8 – 10 months",
        water: "Medium – High",
        ph: "6.5 – 7.0",
        temperature: "23°C – 44°C",
    },
    coconut: {
        displayName: "Coconut",
        description:
            "Coconut is a tropical palm requiring very high humidity, warm temperatures, and heavy rainfall. It grows in coastal and lowland areas with sandy, well-drained soil and moderate nutrients.",
        harvest: "5 – 6 years (first yield)",
        water: "High",
        ph: "5.5 – 6.5",
        temperature: "25°C – 30°C",
    },
    cotton: {
        displayName: "Cotton",
        description:
            "Cotton is a fiber crop that needs warm temperatures, high nitrogen, and moderate rainfall. It grows best in black cotton soil with good drainage and tolerates a wide pH range.",
        harvest: "150 – 180 days",
        water: "Medium",
        ph: "5.8 – 8.0",
        temperature: "22°C – 26°C",
    },
    jute: {
        displayName: "Jute",
        description:
            "Jute is a fiber crop grown in hot, humid climates with heavy monsoon rainfall. It requires high nitrogen and potassium, and thrives in alluvial soils along river basins.",
        harvest: "120 – 150 days",
        water: "High",
        ph: "6.0 – 7.5",
        temperature: "23°C – 27°C",
    },
    coffee: {
        displayName: "Coffee",
        description:
            "Coffee is a tropical plantation crop grown in highland areas with moderate rainfall and humidity. It needs nitrogen-rich soil, warm but not extreme temperatures, and slightly acidic conditions.",
        harvest: "3 – 4 years (first yield)",
        water: "Medium – High",
        ph: "6.0 – 7.5",
        temperature: "23°C – 28°C",
    },
};

export function getCrop(name) {
    if (!name) return null;
    return crops[name.toLowerCase().replace(/\s+/g, "")] ?? null;
}

export default crops;
