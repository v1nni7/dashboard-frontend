import { Link } from "react-router-dom";
import { BiUserPlus, BiHome } from "react-icons/bi";
import NavLink from "./NavLink";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-brand"></div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <NavLink to="/" className="sidebar-link">
              <BiHome /> Home
            </NavLink>
          </li>
          <li className="sidebar-item">
            <Link to="/users/create" className="sidebar-link">
              <BiUserPlus /> Create User
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
