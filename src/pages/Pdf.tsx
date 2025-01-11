import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { FileContext } from "../context/fileContext";
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Navbar } from "../components/Navbar-pdf";
//import { PageCallback } from "react-pdf/src/shared/types.js";
import { OpenFormContext } from "../context/openFormContext";
import { Loader } from "../components/Loader";
import { TextContent } from "pdfjs-dist/types/src/display/api";
import { TextContext } from "../context/textContext";
import { Player } from "../components/AudioPlayer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export function Pdf({loadingSpeech,setLoadingSpeech}:{loadingSpeech:boolean,setLoadingSpeech:Dispatch<SetStateAction<boolean>>}){
    const [numPages, setNumPages] = useState<number>(0)
    const {setOpenForm} = useContext(OpenFormContext)
    const [pageLoadSuccess,setPageLoadSucess] = useState(false)
    const [pageNumber,setPageNumber] = useState<string>("1")
    const [loading,setLoading] = useState(true)
    let pdfString = ""
    const {setValue} = useContext(TextContext)
    let pdfStringArray: (number|(string|undefined)[])[][] = []
     const [windowWidth,setWindowWidth] = useState<number>(window.innerWidth)
    let numArray: number[] = []
    function handleResize() {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize",handleResize)
    },[])
    const {file} = useContext(FileContext)
    function onDocumentLoadSuccess({numPages}:{numPages:number}){
        setNumPages(numPages) 
        setLoading(false)
    }
    function changePageNumberonScroll(entries:IntersectionObserverEntry[]){
        for (let i = 0;i < entries.length;i = i + 1){
            if (entries[i].isIntersecting){
                let number = entries[i].target.getAttribute('data-page-number')
                if (number)
                setPageNumber(number)
            }
        }
    }
    function onPageLoadSuccess(){
        setPageLoadSucess(true)
    }
    useEffect(() => {
        if (!pageLoadSuccess) {
            return;
        }
        const pages = document.querySelectorAll('.page')
        const options = {
            root: null,
            rootMargin:'-50% 0px -50% 0px',
            threshold:0
        }
        const observer = new IntersectionObserver(changePageNumberonScroll,options)
        for (let i =0;i< pages.length;i=i+ 1){
            observer.observe(pages[i])
        }
        return ()=> observer.disconnect()
    },[pageLoadSuccess])
        if (numPages){
            for(let i = 1;i < numPages + 1;i = i+1){
                numArray.push(i)
            }
        }   
  function getText(text:TextContent,pageNumber:number){
        let filteredItems = text.items.map((string) => {
            if ('str' in string){
                return string.str
            }
        })
         pdfStringArray.push([pageNumber,filteredItems])
   if (pdfStringArray.length === numPages){
    pdfStringArray.sort(function(a,b){
        if (typeof a[0] === 'number' && typeof b[0] === 'number'){
        return a[0]-b[0]
        }
        return 0
    })
    pdfStringArray.map((arrays) => {
        arrays.splice(0,1)
    })
    pdfStringArray.map((stringArray) =>{
        pdfString = pdfString + stringArray.join("")
    })
    pdfString = pdfString.replaceAll(",,"," ")
    console.log(pdfString)
    setValue({
        text: pdfString
    })
}
}
    return(
        <section>
            <Navbar numPages = {numPages} pageNumber={pageNumber}/>
        {file ? <div className="flex justify-center bg-[#F1F4F9] flex-col items-center">
            {!loading && <p className="mt-20">
            </p>}
                    <Document file={file} className="940:w-[55rem] w-11/12 mb-5 " loading="" onLoadSuccess={onDocumentLoadSuccess} onLoadProgress={() => setLoading(true)}>
                    {numArray.map((pageNum,index) => {
                        return(
                            <>
                <Page pageNumber={pageNum}  data-page-number={pageNum} onRenderSuccess={onPageLoadSuccess}  renderTextLayer={true} onGetTextSuccess={(text) => getText(text,pageNum)} onGetTextError={(error) => alert('Error while loading text layer items! ' + error.message)} key={index} className="mt-5 page shadow-2xl" loading="" width={windowWidth >= 940 ? 880 : (11/12)*windowWidth} /> 
                </>)
                    })}
                    
            </Document> 
            {!loading && <Player loadingSpeech ={loadingSpeech} setLoadingSpeech = {setLoadingSpeech}/>}
        </div> : <div className="mx-5  pt-20 font-outfit flex justify-center xl:justify-center xl:gap-44 890:justify-evenly gap-14 890:flex-row flex-col items-center min-h-screen"><img className="w-96 890:w-80 max-w-full" src="/assets/images/no-data.svg"/><div><p className="font-semibold text-3xl 890:text-6xl 890:mt-14 890:mb-6 text-center 890:text-left">No file specified</p>
        <p className="text-center 890:text-left text-[#898888] 360:px-0 px-2 mt-3 mb-6 w-80 890:w-[27rem] 890:mb-6 max-w-full 890:text-xl text-lg">Documents do not persist on browser refresh! Please upload a new document</p>
        <button onClick={()=> setOpenForm(true)} className="flex mx-auto 890:mx-0 gap-3 bg-[#615DF6] 890:text-lg py-3 px-5 mb-7 890:mb-0 text-white rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg><span>Upload Document</span></button></div></div>}
        {(loading &&file ) && <div className=" min-h-screen flex justify-center items-center">
            <Loader />
            </div>}
        </section>
    )
}