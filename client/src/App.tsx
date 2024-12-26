import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Text } from "./pages/Text"
import { Uploadpdf } from "./components/UploadPdf"
import { useContext } from "react"
import { OpenFormContext } from "./context/openFormContext"
import { Pdf } from "./context/Pdf"

function App() {
  const {openForm} = useContext(OpenFormContext)

  return (
    <main className="min-h-screen">
    {openForm ? <div className="min-h-screen fixed bg-filter w-full z-10"></div> : null}
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path="/text" element={<Text />} />
    <Route path="/pdf" element={<Pdf />} />
    </Routes>
    
    {openForm ? <section className="z-20 rounded-xl top-1/2 left-1/2 -translate-x-1/2 fixed bg-white -translate-y-1/2 360:w-11/12 w-[95%] 695:w-[40rem] max-w-full "><Uploadpdf /></section>: null}
    </main>
  )
}

export default App
