import { useState } from "react";
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";

function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="sidebar-container">
      <div className="flex">
        <div className="profile">
          <Link to="/">Profile</Link>
        </div>
        <div onClick={() => setToggleSidebar(!toggleSidebar)} className="icon pointer">
          Icon
        </div>
      </div>

      {toggleSidebar && (
        <div className="small-menu">
          <Navbar />
        </div>
      )}

      <div className="large-menu">
          <Navbar />
      </div>
    </div>
  )
}

export default Sidebar;