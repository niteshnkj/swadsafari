import { useState } from "react";

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
          <li>About Us</li>
          <li>Contact Us</li>
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
