import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FileContext } from "../context/fileContext";

export function Navbar({pageNumber,numPages}:{pageNumber:number,numPages:number}){
    const navigate = useNavigate()
    const {file} = useContext(FileContext)
    function handleClick(){
        navigate('/')
        speechSynthesis.cancel()
    }
    return(
        <nav className="border-b-2 flex items-center font-outfit gap-3 border-[#E4EAF1] py-4 justify-between left-0 px-5 bg-white right-0 fixed z-50">
           <button onClick={handleClick} className="flex font-bold justify-center items-center gap-0.5 border-[#ECECF0] py-2 tracking-widest "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg><span className="hidden 580:inline">Go back</span></button> 
           <span className="font-medium">{file?.name}</span>
           <div className="480:block hidden"><span className="border-[1px] border-[#E4EAF1] px-3 rounded-lg py-1 mr-2">{pageNumber}</span><span className="text-[#5C7696]"><span className="mr-2">/</span>{numPages}</span></div>
        </nav>
    )
}