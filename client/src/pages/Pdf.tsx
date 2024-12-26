import { useContext, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { FileContext } from "../context/fileContext";
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Navbar } from "../components/Navbar-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export function Pdf(){
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber,setPageNumber] = useState<number>(1)
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
        <div className="flex justify-center bg-[#F1F4F9] flex-col items-center">
            <p className="mt-20">
            </p>
                    <Document file={file} className="940:w-[55rem] w-11/12 mb-5" onLoadSuccess={onDocumentLoadSuccess}>
                    {numArray.map((pageNumber,index) => {
                        return(
                            <>
                <Page pageNumber={pageNumber} key={index} className="mt-5 page shadow-2xl" width={windowWidth >= 940 ? 880 : (11/12)*windowWidth} /> 
                </>)
                    })}
                    
            </Document>
        </div>
        </section>
    )
}