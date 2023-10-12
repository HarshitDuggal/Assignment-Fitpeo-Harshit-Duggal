import DashboardContent from "../Components/DashboardContent/DashboardContent"
import Sidebar from "../Components/Sidebar/SidebarComp"

const Dashboard = () => {
  return (
    <div style={{display:'flex',backgroundColor:'#F5F6F8'}}>
        <Sidebar/>
        <DashboardContent/>
    </div>
  )
}

export default Dashboard