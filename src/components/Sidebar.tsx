import { Link } from "react-router-dom";
import { BiUserPlus, BiHome, BiUser } from "react-icons/bi";
import { BiArrowToLeft } from "react-icons/bi";

import NavLink from "./NavLink";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1 className="sidebar-brand-text">My Dashboard</h1>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <button></button>
            {/* <NavLink className="sidebar-link" to="/">
              <BiHome />
              Home
            </NavLink> */}
          </li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/users/list">
              <BiUser />
              List Users
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/users/create">
              <BiUserPlus />
              Create User
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
