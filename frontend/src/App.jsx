import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignupPage from "./Pages/SignupPage"
import SigninPage from "./Pages/SigninPage"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/signin" element={<SigninPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
