import { useContext } from "react"
import { TextContext } from "../context/textContext"

export function Player(){
    const {value} = useContext(TextContext)
    let text = new SpeechSynthesisUtterance(value.text)
    function playVoice(){
        console.log("hi")
        console.log(speechSynthesis.getVoices())
        speechSynthesis.speak(text)
    }
    return(
        <button onClick={playVoice} className="bg-black fixed bottom-8 items-center w-48 max-w-full flex justify-center py-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><polygon points="6 3 20 12 6 21 6 3"/></svg>
            <span className="text-white ml-3 font-outfit">Play</span>
        </button>
    )
}