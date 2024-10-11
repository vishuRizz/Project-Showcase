import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignupPage from "./Pages/SignupPage"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
