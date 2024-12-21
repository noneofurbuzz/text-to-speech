import { useContext, useEffect, useState } from "react"
import { TextContext } from "../context/textContext"

export function Player(){
    const {value} = useContext(TextContext)
    const [pause,setPause] = useState(false)
    let text = new SpeechSynthesisUtterance(value.text)
    function playVoice(){
        if (!speechSynthesis.speaking){
            console.log(speechSynthesis.getVoices())
        speechSynthesis.speak(text)
        }
        setPause(prev => !prev)
        if (pause === true){
            speechSynthesis.pause()
        }
        else{
            speechSynthesis.resume()
        }
        text.addEventListener("end",(event) => {
            setPause(false)
        })
    }
    return(
        <button onClick={playVoice} className="bg-black fixed bottom-8 items-center w-48 max-w-full flex justify-center py-4 rounded-full">
            {!pause ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>}
            <span className="text-white ml-3 font-outfit">{pause ? 'Pause' : 'Play'}</span>
        </button>
    )
}