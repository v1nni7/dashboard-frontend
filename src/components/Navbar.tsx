import { BiCaretDown } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-user-profile">
        <div className="user-profile-image"></div>
        <BiCaretDown />
      </div>
    </nav>
  );
}

export default Navbar;
