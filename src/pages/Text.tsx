import { Navbar } from "../components/Navbar"

export function Text(){
    return(
        <section className="bg-[#F1F4F9] flex justify-center ">
        <Navbar />
            <form className="mt-12 h-screen w-[55rem] font-sabon">
                <textarea className="h-full pt-16 px-12 outline-none w-full"  placeholder="Type or Paste Text"></textarea>
            </form>
        </section>
        
    )
}