import { Link } from "react-router-dom";

export function Dashboard(){
    return(
        <section className="text-center  font-historical flex items-center flex-col justify-center mx-4 min-h-screen">
            <h1 className="header-dashboard leading-none tracking-tight uppercase font-bold w-[60rem] max-w-full ">Text to Speech Converter</h1>
            <p className="font-poppins font-medium px-4 mt-5  leading-normal max-w-full paragraph-dashboard w-[40rem]">Transform any written text into natural speech with a single click. Just type or paste your text and listen instantly.</p>
            <div className="flex mt-9 flex-wrap gap-3 justify-center text-sm font-medium">
            <Link to='/text' className="bg-[#000000f1] text-white py-3 uppercase rounded-3xl w-32 box-shadow-black">Type Text</Link>
            <button className="bg-[#D7D7D7] py-3 rounded-3xl box-shadow-gray uppercase w-32">Upload PDF</button>
            </div>
        </section>
    )
}