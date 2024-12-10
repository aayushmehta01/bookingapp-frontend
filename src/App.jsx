import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home/Home.jsx"
import List from "./pages/list/List.jsx"
import Hotel from "./pages/hotel/Hotel.jsx"
import Login from "./pages/login/Login.jsx"
import Register from "./pages/register/Register.jsx"
import ForgotPassword from "./pages/forgot-password/ForgotPassword.jsx"
import ResetPassword from "./pages/reset-password/ResetPassword.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
