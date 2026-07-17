import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PredictionForm from "./components/PredictionForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import { useState } from "react";

function App() {
    const [result, setResult] = useState(null);

    return (
        <div className="min-h-screen bg-surface">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />

            <section id="predict" className="py-24 lg:py-32 relative">
                <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
                    <PredictionForm setResult={setResult} />
                    <ResultCard result={result} />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
