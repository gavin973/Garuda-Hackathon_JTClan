export default function Navbar(){

    return(

<nav className="bg-white shadow-sm sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-5">

<h1 className="text-2xl font-bold text-green-700">

🌱 AgroMind AI

</h1>

<div className="space-x-8">

<a
href="#"
className="hover:text-green-700">

Home

</a>

<a
href="#predict"
className="hover:text-green-700">

Predict

</a>

<a
href="https://github.com/"
target="_blank">

Github

</a>

</div>

</div>

</nav>

    )

}