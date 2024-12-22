import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Text } from "./pages/Text"
import { Pdf } from "./pages/Pdf"

function App() {

  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path="/text" element={<Text />} />
    <Route path="/pdf" element={<Pdf />} />
    </Routes>
  )
}

export default App
