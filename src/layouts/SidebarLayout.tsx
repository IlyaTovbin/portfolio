import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Social from "@/components/Sidebar/Social";
import Profile from "@/components/Sidebar/Profile";
function SidebarLayout() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="sidebar-container">
      <div className="flex">
        <div className="profile">
          <Profile />
        </div>
        <div onClick={() => setToggleSidebar(!toggleSidebar)} className="icon pointer">
          <FaBars />
        </div>
      </div>

      {toggleSidebar && (
        <div className="small-menu">
          <Navbar />
        </div>
      )}

      <div className="large-menu">
          <div className="large-menu-container">
            <Navbar />
            <Social />
          </div>
      </div>
    </div>
  )
}

export default SidebarLayout;