import { Dispatch, SetStateAction,useContext, useEffect, useState } from "react"
import { TextContext } from "../context/textContext"
import { ToastContainer, toast } from "react-toastify"


export function Player({loadingSpeech,setLoadingSpeech}:{loadingSpeech:boolean,setLoadingSpeech:Dispatch<SetStateAction<boolean>>}){
    const {value} = useContext(TextContext)
    const [pause,setPause] = useState(false)
    const [clicked,setClicked] = useState(false)
    let text = new SpeechSynthesisUtterance(value.text)
    useEffect(()=> {
        if (clicked){
            playVoice()
        }
    },[value.text])
     function playVoice(){
        setClicked(true)
        if (value.text.length === 0){
            setLoadingSpeech(true)
            return
        } 
        else{
            setLoadingSpeech(false)
        if (value.text.trim().length === 0){
            toast.error("No text to read ...",{
                className: 'bg-[#323232] text-[#9C9C9C] 480:w-80 w-11/12'
            })
           toast.clearWaitingQueue()
        }
        if (!speechSynthesis.speaking){
            console.log(speechSynthesis.getVoices())
            text.lang = 'en-US'
            text.voice = speechSynthesis.getVoices()[0]
        speechSynthesis.speak(text)
        }
        setPause(prev => !prev)
        if (pause === true){
            speechSynthesis.pause()
        }
        else{
            speechSynthesis.resume()
        }
        text.addEventListener("end",() => {
          setPause(false)
        })}}
    
    return(
        <>
        <button onClick={playVoice} className="bg-[#615DF6] z-50  fixed bottom-8 items-center w-48 max-w-full flex justify-center py-4 rounded-full">
            {loadingSpeech ? <svg aria-hidden="true" className="w-8 h-8 text-gray-500 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> : !pause ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>}
            <span className="text-white ml-3 font-outfit">{pause ? 'Pause' : 'Play'}</span>
        </button>
        <ToastContainer containerId={2} position="bottom-center" autoClose = {2000} hideProgressBar = {true} limit={1} theme="dark"/>
        </>
    )
}