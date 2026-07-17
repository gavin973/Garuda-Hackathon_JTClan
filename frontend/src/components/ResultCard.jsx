export default function ResultCard({result}){

if(!result) return null;

return(

<div className="bg-white shadow-xl rounded-2xl p-8 mt-8">

<h2 className="text-2xl font-bold">

🌾 Recommendation

</h2>

<div className="mt-5">

<h1 className="text-5xl font-bold text-green-700">

{result.recommendation}

</h1>

<p className="mt-3 text-lg">

Confidence

</p>

<div className="w-full bg-gray-200 rounded-full h-4 mt-2">

<div

className="bg-green-600 h-4 rounded-full"

style={{
width:`${result.confidence}%`
}}

></div>

</div>

<p className="mt-2">

{result.confidence}%

</p>

</div>

<h3 className="mt-8 text-xl font-bold">

Top Recommendation

</h3>

<div className="mt-3 space-y-3">

{

result.top3.map((crop,index)=>(

<div
key={index}
className="border rounded-xl p-3 flex justify-between">

<span>

{crop.crop}

</span>

<span>

{crop.confidence}%

</span>

</div>

))

}

</div>

</div>

)

}