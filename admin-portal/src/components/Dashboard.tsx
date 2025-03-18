
import { useAppContext } from "../context/AppContext"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import OutletContainer from "../router/OutletContainer"

const Dashboard = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();
  return (
    <div className="screens-container">
      <Sidebar sidebarOpen={sidebarOpen}/>
      <div className={`${!sidebarOpen ? " " : " ml-64 "} screens-section-container`}>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <OutletContainer/>
      </div>
    </div>
  )
}
export default Dashboard;