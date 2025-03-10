import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Route, Routes } from "react-router-dom"
import Blogs from "../pages/Blogs/Blogs"
import Home from "../pages/Home/Home"
import Inbox from "../pages/Inbox/Inbox"
import Reports from "../pages/Reports/Reports"
import Settings from "../pages/Settings/Settings"
import { Login } from "../pages/Login/Login"

export const Dashboard = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(AppContext)

  return (
    <div className="screens-container">
      <Sidebar />
      <div className={`${!sidebarOpen ? " " : " ml-64 "} w-full screens-section-container`}>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}
