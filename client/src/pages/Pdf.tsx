import { useContext, useState } from "react";
import { Document, Page } from "react-pdf";
import { FileContext } from "../context/fileContext";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

export function Pdf(){
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber,setPageNumber] = useState<number>(1)
    const {file} = useContext(FileContext)
    function onDocumentLoadSuccess({numPages}:{numPages:number}){
        setNumPages(numPages)
    }
    return(
        <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/> 
            </Document>
            <p>
                Page number {pageNumber} of {numPages}
            </p>
        </div>
    )
}