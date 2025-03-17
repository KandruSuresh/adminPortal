
import { useAppContext } from "../context/AppContext"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import OutletContainer from "../router/OutletContainer"

const Dashboard = () => {
  const { sidebarOpen, setSidebarOpen, loginData } = useAppContext();
  console.log('dashboard----------------', loginData);
  return (
    <div className="screens-container">
      <Sidebar loginData={loginData} sidebarOpen={sidebarOpen}/>
      <div className={`${!sidebarOpen ? " " : " ml-64 "} w-full screens-section-container`}>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <OutletContainer/>
      </div>
    </div>
  )
}
export default Dashboard;