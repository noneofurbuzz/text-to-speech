import { useContext, useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { FileContext } from "../context/fileContext";
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export function Pdf(){
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber,setPageNumber] = useState<number>(1)
    let numArray: number[] = []
    const {file} = useContext(FileContext)
    function onDocumentLoadSuccess({numPages}:{numPages:number}){
        setNumPages(numPages)
    }
        if (numPages){
            for(let i = 1;i < numPages + 1;i = i+1){
                numArray.push(i)
                console.log("hi")
            }
        }    
    return(
        <div className="flex justify-center bg-[#F1F4F9] flex-col items-center">
            <p>
                Page number {pageNumber} of {numPages}
            </p>
                    <Document file={file} className="" onLoadSuccess={onDocumentLoadSuccess}>
                    {numArray.map((pageNumber) => {
                        return(
                <Page pageNumber={pageNumber} className="mt-5"/> )
                    })}
            </Document>
        </div>
    )
}