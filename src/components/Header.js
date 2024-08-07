import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [user, setUser] = useState("LogIn");
  const onlineStatus = useOnlineStaus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="flex justify-center items-center">
        <img
          className="w-56"
          src={
            "https://res.cloudinary.com/do9s5cxxl/image/upload/v1721808110/SwadSafari/logo-no-background_scvtm9.svg"
          }
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <Link to={"/cart"}>
            <li className="px-4 font-bold text-xl ">
              Cart - ({cartItems.length} items)
            </li>
          </Link>
          <button
            className="login"
            onClick={() => {
              user === "Login" ? setUser("Logout") : setUser("Login");
            }}
          >
            {user}
          </button>
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
