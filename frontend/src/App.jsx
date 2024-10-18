import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignupPage from "./Pages/SignupPage"
import SigninPage from "./Pages/SigninPage"
import DashboardMain from "./Pages/DashboardMain"
import ParentDashboard from "./Pages/ParentDashboard"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/signin" element={<SigninPage/>} />
      <Route path="/dashboard" element={<DashboardMain/>}/>
      <Route path="/dashboard-parent" element={<ParentDashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
