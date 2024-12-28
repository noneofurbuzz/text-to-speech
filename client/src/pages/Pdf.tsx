import { useContext, useEffect, useState } from "react";
import { Document, Page, PageProps } from "react-pdf";
import { FileContext } from "../context/fileContext";
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Navbar } from "../components/Navbar-pdf";
import { PageCallback } from "react-pdf/src/shared/types.js";
import { OnPageLoadSuccess } from "react-pdf/dist/cjs/shared/types.js";
import { OpenFormContext } from "../context/openFormContext";
import { Loader } from "../components/Loader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export function Pdf(){
    const [numPages, setNumPages] = useState<number>(0)
    const {setOpenForm} = useContext(OpenFormContext)
    const [pageNumber,setPageNumber] = useState<number>(1)
    const [loading,setLoading] = useState(false)
    const [pageHeight,setPageHeight] = useState(0)
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
    function onPageLoadSuccess(page:PageCallback){
        setPageHeight(page.height)
        console.log(pageHeight)
    }
        if (numPages){
            for(let i = 1;i < numPages + 1;i = i+1){
                numArray.push(i)
            }
        }    
        console.log(windowWidth)
    return(
        <section>
            <Navbar numPages = {numPages} pageNumber={pageNumber}/>
        {file ? <div className="flex justify-center bg-[#F1F4F9] flex-col items-center">
            {!loading && <p className="mt-20">
            </p>}
                    <Document file={file} className="940:w-[55rem] w-11/12 mb-5 " loading="" onLoadSuccess={onDocumentLoadSuccess} onLoadProgress={() => setLoading(true)}>
                    {numArray.map((pageNumber,index) => {
                        return(
                            <>
                <Page pageNumber={pageNumber} onRenderSuccess={onPageLoadSuccess} key={index} className="mt-5 page shadow-2xl" loading="" width={windowWidth >= 940 ? 880 : (11/12)*windowWidth} /> 
                </>)
                    })}
                    
            </Document> 
        </div> : <div className="mx-5  pt-20 font-outfit flex justify-center xl:justify-center xl:gap-44 971:gap-14 890:justify-evenly gap-14 890:gap-28 890:flex-row flex-col items-center min-h-screen"><img className="w-96 890:w-80 max-w-full" src="/assets/images/test (1).svg"/><div><p className="font-semibold text-3xl 890:text-6xl 890:mt-14 890:mb-8 text-center 890:text-left">No PDF file specified</p>
        <p className="text-center 890:text-left text-[#c6c6c6] 360:px-0 px-2 mt-3 mb-6 w-80 890:w-[27rem] 890:mb-8 max-w-full 890:text-xl text-lg">Documents do not persist on browser refresh! Please upload a new document</p>
        <button onClick={()=> setOpenForm(true)} className="flex mx-auto 890:mx-0 gap-3 bg-[#615DF6] 890:text-lg py-3 px-5 mb-7 890:mb-0 text-white rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg><span>Upload Document</span></button></div></div>}
        {loading && <div className=" min-h-screen flex justify-center items-center">
            <Loader />
            </div>}
        </section>
    )
}