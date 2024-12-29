import { SyntheticEvent, useContext, useState } from "react"
import { OpenFormContext } from "../context/openFormContext"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { FileContext } from "../context/fileContext"
import { useNavigate } from "react-router-dom"

export function Uploadpdf(){
    const {setOpenForm} = useContext(OpenFormContext)
    const {file,setFile} = useContext(FileContext)
    const [dragEnter,setDragEnter] = useState(false)
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn : (file: File|undefined) => api(file),
    })
    function handleChange(event: SyntheticEvent){
        if((event.target as HTMLInputElement).files){
        setFile((event.target as HTMLInputElement).files?.[0])
        mutation.mutate(file)
        setOpenForm(false)
        if ((event.target as HTMLInputElement).files?.[0].name.endsWith('.txt')){
            navigate('/text')
        }
        else{
            navigate('/pdf')
        }
        }
    }
    function handleDrop(event:React.DragEvent<HTMLLabelElement>){
        event.preventDefault()
        const droppedFiles = event.dataTransfer?.files
        if (droppedFiles)
        if (droppedFiles?.length === 1){
            setFile(droppedFiles[0])
            setOpenForm(false)
            if (droppedFiles[0].name.endsWith('.txt')){
                navigate('/text')
            }
            else{
                navigate('/pdf')
            }
            }
        }
        
    function handleDragOver(event:React.DragEvent<HTMLLabelElement>){
        event.preventDefault()
    }
    return(
        <section className="font-outfit ">
        <form className="mx-5 py-5" >
            <div className="flex items-center justify-between">
            <p className="font-medium text-lg">Upload file</p>
            <button onClick={() => setOpenForm(false)} className="w-4 h-4"><svg xmlns="http://www.w3.org/2000/svg" className="fill-[#828B9C]" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
        </div>
            <label onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={() => setDragEnter(true)} onDragLeave= {() => setDragEnter(false)}  htmlFor="upload" className={`${dragEnter ? 'bg-[#F2F7FF] border-[#7ACAF3]' : 'bg-white border-[#D7DEE8]'} cursor-pointer mt-8 border-dashed py-20 flex rounded-md flex-col justify-center items-center border-2 `}><svg className="fill-[#EFF4F6] mb-3 w-8 h-8 stroke-black stroke-[2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31L216 408z"/></svg><span className="mt-2 mx-2 text-center">Drag and Drop file here or <span className="underline-offset-2 underline">Choose file</span></span>
            </label>
            <div className="flex mt-2 text-[#AFB6C2] justify-between gap-3 pb-3"><span className="">Supported formats: PDF, TXT, DOC, DOCX</span></div>
            <input type="file" id="upload" name="upload"  className="" accept=".pdf,.txt,.doc,.docx" onChange={handleChange} hidden />
        </form>
        </section>
        
    )
}