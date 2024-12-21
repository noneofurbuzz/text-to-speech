import { SyntheticEvent, useContext, useState } from "react"
import { Player } from "../components/MusicPlayer"
import { Navbar } from "../components/Navbar"
import { TextContext } from "../context/textContext"

export function Text(){
    const {value,setValue} = useContext(TextContext)
    function handleChange(event: SyntheticEvent){
        setValue({
            ...value,
            [(event.target as HTMLTextAreaElement).name]:(event.target as HTMLTextAreaElement).value
        })
    }
    return(
        <section className="bg-[#F1F4F9] flex justify-center ">
        <Navbar />
            <form className="mt-12 h-screen w-[55rem] font-sabon">
                <textarea onChange={handleChange} value={value.text} name="text" className="h-full pt-16 px-12 outline-none resize-none w-full text-xl"  placeholder="Type or Paste Text"></textarea>
            </form>
            <Player />
        </section>
        
    )
}