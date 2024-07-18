import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("LogIn");
  return (
    <div className="header">
      <div className="Logo-container">
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
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
