import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AdminSignIn from "./pages/AdminSignIn"
import AdminSignUp from "./pages/AdminSignUp"
import Properties from "./pages/Properties"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Header from "./components/Header"


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-sign-in" element={<AdminSignIn />} />
      <Route path="/admin-sign-up" element={<AdminSignUp />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} /> 
    </Routes>
    </BrowserRouter>
  )
}
