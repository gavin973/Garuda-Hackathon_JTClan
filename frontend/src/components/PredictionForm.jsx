import { useState } from "react";
import api from "../services/api";

export default function PredictionForm({ setResult }) {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        N:"",
        P:"",
        K:"",
        temperature:"",
        humidity:"",
        ph:"",
        rainfall:""
    });

    const handleChange = (e)=>{

        setForm({
            ...form,
            [e.target.name]: Number(e.target.value)
        })

    }

    const handleSubmit = async(e)=>{

        e.preventDefault();

        setLoading(true);

        try{

            const response = await api.post("/predict",form);

            setResult(response.data);

        }

        catch(err){

            alert("Prediction Failed");

            console.log(err);

        }

        setLoading(false);

    }

    return(

<div className="bg-white rounded-2xl shadow-xl p-8">

<h2 className="text-3xl font-bold mb-6">

🌱 Crop Recommendation

</h2>

<div className="grid grid-cols-2 gap-4">

<input
className="border p-3 rounded-lg"
placeholder="Nitrogen"
name="N"
onChange={handleChange}
/>

<input
className="border p-3 rounded-lg"
placeholder="Phosphorus"
name="P"
onChange={handleChange}
/>

<input
className="border p-3 rounded-lg"
placeholder="Potassium"
name="K"
onChange={handleChange}
/>

<input
className="border p-3 rounded-lg"
placeholder="Temperature"
name="temperature"
onChange={handleChange}
/>

<input
className="border p-3 rounded-lg"
placeholder="Humidity"
name="humidity"
onChange={handleChange}
/>

<input
className="border p-3 rounded-lg"
placeholder="Soil pH"
name="ph"
onChange={handleChange}
/>

<input
className="border p-3 rounded-lg"
placeholder="Rainfall"
name="rainfall"
onChange={handleChange}
/>

</div>

<button
onClick={handleSubmit}
className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl">

{loading ? "Predicting..." : "Predict Crop"}

</button>

</div>

    )

}