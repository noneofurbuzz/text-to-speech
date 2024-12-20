import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate = useNavigate()
    return(
        <nav className="border-b-2 border-[#E4EAF1] py-4 left-0 bg-white right-0 fixed ">
           <button onClick={() => navigate('/')} className="flex font-bold justify-center items-center gap-0.5 border-[#ECECF0] border-[1px] py-2 ml-3 font-outfit tracking-widest text-sm px-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><span>Go back</span></button>
        </nav>
    )
}