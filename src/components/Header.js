import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
  const [user, setUser] = useState("LogIn");
  const onlineStatus = useOnlineStaus();

  return (
    <div className="header">
      <div className="Logo-container">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>

          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contactus"}> Contact Us </Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              user === "LogIn" ? setUser("LogOut") : setUser("LogIn");
            }}
          >
            {user}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
