import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {TbDashboard, FaKeycdn, CgProductHunt, FaPeopleGroup, GiMoneyStack, AiOutlineStock, MdOutlineLiveHelp, AiFillCaretDown} from '../../Constants/Icons'
import './SidebarComp.css';



const SidebarComp = () => {
console.log(window.innerHeight);
  return (
    <div className="sidebar-container" style={{ display: "flex", overflowY: 'auto',position:'fixed',height:'100vh',top:0,left:0,zIndex:2 }}>
      <Sidebar backgroundColor="#040440" width="250px"  height="100%">
        <div className="header-text" style={{ display: 'flex', alignItems: 'center', marginLeft: '5%' }}>
          <TbDashboard color="white" size={22} />
          <p style={{ color: 'white', marginLeft: '16px', fontSize: '25px' }}>Dashboard</p>
        </div>
        <Menu menuItemStyles={{
      button: ({ level}) => {
        if (level === 0 || level === 1)
          return {
            color:  '#fff',
            '&:hover': {
              backgroundColor: '#2D2D69'}
          };
      },
      subMenuContent: ({ level }) => ({
        backgroundColor:
          level === 0
            ? '#040430'
            : 'transparent',
         fontSize:'12px',  
         margin:10
      }),

    }}>
          <MenuItem icon={<FaKeycdn color="white" size={18}/>}>Dashboard</MenuItem>
          <SubMenu icon={<CgProductHunt color="white" size={20}/>} label="Product">
            <MenuItem > New Products </MenuItem>
            <MenuItem> Old Products </MenuItem>
          </SubMenu>
          <SubMenu label="Customers" icon={<FaPeopleGroup color='white' size={18}/>}>
            <MenuItem> Existing Customers </MenuItem>
            <MenuItem> Guest List </MenuItem>
          </SubMenu>
          <SubMenu label="Income" icon={<GiMoneyStack color='white' size={18}/>}>
            <MenuItem> Net Income </MenuItem>
            <MenuItem> Gross Income </MenuItem>
          </SubMenu>
          <SubMenu label="Promote" icon={<AiOutlineStock color='white' size={18}/>}>
            <MenuItem> Flash Sales </MenuItem>
            <MenuItem> Upto Sales </MenuItem>
          </SubMenu>
          <SubMenu label="Help" icon={<MdOutlineLiveHelp color='white' size={18}/>}>
            <MenuItem> FAQ </MenuItem>
            <MenuItem> Chat Support </MenuItem>
          </SubMenu>
        </Menu>
        <div className="sidebar-footer">
        <img src="https://media.licdn.com/dms/image/D4E03AQFDoN0KGRkPOw/profile-displayphoto-shrink_800_800/0/1697146699820?e=1702512000&v=beta&t=wlG9oQ6LlI1OMJ27kX6lKkrdkIZex_t5S6zupAkh278" alt="Profile" className="profile-image" />
        <div className="profile-details">
          <div style={{display: "flex"}}>
          <h3>Harshit Duggal</h3>
          <AiFillCaretDown style={{marginLeft:12,marginTop:3}}/>
          </div>

          <p>Frontend Developer</p>
        </div>
        </div>
      </Sidebar>
    </div>
  );
}

export default SidebarComp;
