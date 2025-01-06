import { Dispatch, SetStateAction, SyntheticEvent, useContext, useEffect} from "react"
import { Player } from "../components/AudioPlayer"
import { Navbar } from "../components/Navbar-text"
import { TextContext } from "../context/textContext"
import { FileContext } from "../context/fileContext"

export function Text({loadingSpeech,setLoadingSpeech}:{loadingSpeech:boolean,setLoadingSpeech:Dispatch<SetStateAction<boolean>>}){
    const {value,setValue} = useContext(TextContext)
    const {file} = useContext(FileContext)
     function handleChange(event: SyntheticEvent){
        localStorage.setItem('text',(event.target as HTMLTextAreaElement).value)
        setValue({
            ...value,
            [(event.target as HTMLTextAreaElement).name]:(event.target as HTMLTextAreaElement).value
        })
    }
    
    useEffect(() => {
        if (localStorage.getItem('text') !== null){
        setValue({
            text: localStorage.getItem('text')!
        })}
        else{
            setValue({
                text: ""
            })
        }
    },[])

    const reader = new FileReader()
    reader.addEventListener('load',() => {
        if(typeof reader.result === 'string' ){
            setValue({
                text:reader.result
            })
        }

    })
    if (file){
    reader.readAsText(file)
    }

    function preventTyping(event: SyntheticEvent){
        if (file){
            event.preventDefault()
        }
    }

    return(
        <section className={`bg-[#F1F4F9] flex justify-center `}>
        <Navbar />
            <form className={` h-screen w-[55rem] font-sabon ${file ? 'mt-24' : 'mt-12'}`}>
                <textarea onChange={handleChange} onKeyDown={preventTyping} value={value.text} name="text" className="h-full shadow-2xl pt-16 px-12 outline-none resize-none w-full text-xl"  placeholder="Type or Paste Text"></textarea>
            </form>
            <Player loadingSpeech ={loadingSpeech} setLoadingSpeech = {setLoadingSpeech}/>
        </section>
        
    )
}