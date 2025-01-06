import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Text } from "./pages/Text"
import { Uploadpdf } from "./components/UploadPdf"
import { useContext, useState} from "react"
import { OpenFormContext } from "./context/openFormContext"
import { Pdf } from "./pages/Pdf"
import { ToastContainer, toast } from "react-toastify"


function App() {
  const {openForm} = useContext(OpenFormContext)
  const [loadingSpeech,setLoadingSpeech] = useState(false)

  function notify(message: string){
    toast.error(message,{
        className: 'bg-[#323232] text-[#9C9C9C] 480:w-[21rem] w-11/12'
    })
   toast.clearWaitingQueue()
}

  return (
    <main className="min-h-screen">
    {openForm ? <div className="min-h-screen fixed bg-filter w-full z-10"></div> : null}
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path="/text" element={<Text loadingSpeech ={loadingSpeech} setLoadingSpeech = {setLoadingSpeech}/>} />
    <Route path="/pdf" element={<Pdf loadingSpeech ={loadingSpeech} setLoadingSpeech = {setLoadingSpeech}/>} />
    </Routes>
    
    {openForm ? <section className="z-20 rounded-xl top-1/2 left-1/2 -translate-x-1/2 fixed bg-white -translate-y-1/2 360:w-11/12 w-[95%] 695:w-[40rem] max-w-full "><Uploadpdf notify = {notify}/></section>: null}
    <ToastContainer position="bottom-center" containerId={1}  autoClose = {2000} hideProgressBar = {true} limit={1} theme="dark"/>
    </main>
  )
}

export default App
