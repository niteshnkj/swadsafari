import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { IoBagHandleOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("LogIn");
  const onlineStatus = useOnlineStaus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div
        id="header"
        className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors h-auto duration-300 bg-black`}
      >
        <div
          className={`flex justify-between px-20 relative text-xl font-montserrat h-auto tracking-wider leading-[1.5em] font-medium text-white`}
        >
          <div className="flex items-center h-12 overflow-hidden">
            <img
              className="w-full h-full"
              src={
                "https://res.cloudinary.com/do9s5cxxl/image/upload/v1725110327/SwadSafari/swadsafariWhite_logo_bzgjgh.png"
              }
              alt="Logo"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-16">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
            </ul>
          </div>
          <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
            <ul className="flex gap-6 items-center">
              <Link to={"/cart"}>
                <li className="relative">
                  <div>
                    <IoBagHandleOutline />
                  </div>
                  {cartItems.length > 0 && (
                    <>
                      <div className="h-3 w-3 bg-green-700 rounded-full absolute -top-1 -right-2"></div>
                      <div className="h-3 w-3 bg-green-700 rounded-full animate-ping absolute -top-1 -right-2"></div>
                    </>
                  )}
                </li>
              </Link>
              <div>SignIn</div>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-[80px]">
        {/* Add content here */}
        <p>Content starts below the header...</p>
      </div>
    </>
  );
};

export default Header;
