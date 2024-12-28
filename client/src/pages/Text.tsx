import { SyntheticEvent, useContext} from "react"
import { Player } from "../components/MusicPlayer"
import { Navbar } from "../components/Navbar-text"
import { TextContext } from "../context/textContext"
import { FileContext } from "../context/fileContext"

export function Text(){
    const {value,setValue} = useContext(TextContext)
    const {file,setFile} = useContext(FileContext)
     function handleChange(event: SyntheticEvent){
        setValue({
            ...value,
            [(event.target as HTMLTextAreaElement).name]:(event.target as HTMLTextAreaElement).value
        })
    }
    const reader = new FileReader()
    reader.addEventListener('load',() => {
        if(typeof reader.result === 'string'){
       document.querySelector('textarea')!.value = reader.result
       setValue({text:reader.result})

        }
    })
    if (file){
    reader.readAsText(file)
    }
    return(
        <section className="bg-[#F1F4F9] flex justify-center ">
        <Navbar />
            <form className="mt-12 h-screen w-[55rem] font-sabon">
                <textarea onChange={handleChange} value={value.text} name="text" className="h-full shadow-2xl pt-16 px-12 outline-none resize-none w-full text-xl"  placeholder="Type or Paste Text"></textarea>
            </form>
            <Player />
        </section>
        
    )
}