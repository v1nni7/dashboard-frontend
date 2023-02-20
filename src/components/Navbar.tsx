import { useContext, useEffect, useRef, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div
        className="navbar-user-profile"
        onClick={() => setShowDropdown(true)}
      >
        <div className="user-profile-image"></div>
        <BiCaretDown />
        <div
          ref={dropdownRef}
          className={`dropdown ${showDropdown ? "show" : "hidden"}`}
        >
          <ul className="dropdown-list">
            <li className="dropdown-item">
              <Link to="/" className="dropdown-link">
                Settings
              </Link>
            </li>
            <div className="dropdown-item">
              <button onClick={() => logout()} className="dropdown-link">
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
