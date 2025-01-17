import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileContext } from "../context/fileContext";
import { TextContext } from "../context/textContext";

export function Navbar(){
    const navigate = useNavigate()
    const {file} = useContext(FileContext)
    const {setValue} = useContext(TextContext)
    function handleClick(){
        navigate('/')
        speechSynthesis.cancel()
    }
    useEffect(() =>{
        speechSynthesis.cancel()
        setValue({
            text:""
        })
        
    },[])
    return(
        <nav className="border-b-2 flex items-center font-outfit gap-3 border-[#E4EAF1] py-4 justify-between left-0 px-1 bg-white right-0 fixed z-50">
           <button onClick={handleClick} className="flex font-bold justify-center items-center gap-2 border-[#ECECF0] py-2 ml-3 font-outfit tracking-widest text-base  px-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><span className="480:inline hidden">Go back</span></button>
           <span className="font-medium mr-2">{file?.name}</span>
        </nav>
    )
}