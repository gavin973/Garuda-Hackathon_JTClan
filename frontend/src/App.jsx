import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PredictionForm from "./components/PredictionForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

function App(){

    const [result,setResult]=useState(null);

    return(

<div className="min-h-screen">

<Navbar/>

<Hero/>

<div
id="predict"
className="max-w-6xl mx-auto px-6 py-20">

<PredictionForm
setResult={setResult}
/>

<ResultCard
result={result}
/>

</div>

<Footer/>

</div>

    )

}

export default App;