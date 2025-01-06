import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { OpenFormContext } from "../context/openFormContext";
import { AudioLinesIcon } from "../components/AudioLines";
import { FileContext } from "../context/fileContext";

export function Dashboard(){
    const {setOpenForm} = useContext(OpenFormContext)
    const {setFile} = useContext(FileContext)
    const navigate = useNavigate()
    function handleClick(){
        setOpenForm(true)
    }
    function handleTextClick(){
        setFile(undefined)
        navigate('/text')
    }
    return(
        <section className="font-outfit flex md:px-24 xl:px-0 bg-white fixed left-0 right-0  flex-col justify-center text-center items-center min-h-screen">
            <div className="w-20 h-20 relative bg-[#f7f6f0] after:w-[70px] after:h-20 after:720:h-[88px] after:720:w-[75px] after:absolute after:bottom-2 after:bg-[#d7d7d7] after:-z-10 after:rounded-3xl after:box-shadow-gray rounded-3xl 720:w-[88px] 720:h-[88px] flex justify-center mb-8 items-center">
            <AudioLinesIcon />
            </div>
            <h1 className="header-dashboard  leading-none tracking-tight font-bold max-w-[400px] md:max-w-[700px]">Text to Speech Converter</h1>
            <p className="mt-5 text-xl leading-normal text-[#747474] max-w-[300px] 375:max-w-[370px] md:max-w-[450px] xl:max-w-[640px] w-[28.5rem]">Transform any written text into natural speech with a single click.</p>
            <div className="flex mt-9 flex-wrap gap-3 font-medium">
            <button onClick={handleTextClick} className="bg-black  text-white flex justify-center items-center gap-1 py-3 rounded-3xl w-36 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-type"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg><span>Type Text</span></button>
            <button onClick={handleClick} className="flex justify-center  items-center gap-1 bg-white border-[1px] border-[#E8E8E8] py-3 rounded-3xl w-36"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg><span>Upload PDF</span></button>
            </div>
        </section>
    )
}