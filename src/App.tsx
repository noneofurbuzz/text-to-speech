import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Text } from "./pages/Text"

function App() {

  return (
    <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path="/text" element={<Text />} />
    </Routes>
  )
}

export default App
