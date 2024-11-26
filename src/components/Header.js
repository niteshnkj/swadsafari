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
  const location = useLocation();
  const [bgColor, setBgColor] = useState(
    location.pathname === "/" ? "bg-transparent" : "bg-gradient-red-orange"
  );

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 650) {
        setBgColor("bg-gradient-red-orange fixed top-0 left-0 w-full z-50 ");
      } else {
        setBgColor("bg-transparent fixed top-0 left-0 w-full z-50 ");
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setBgColor("bg-gradient-red-orange fixed top-0 left-0 w-full z-50 ");
    }
  }, [location]);

  useEffect(() => {
    // Set the height of the header for other routes
    if (location.pathname !== "/") {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    }
  }, [location]);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems.length);

  return (
    <>
      <div
        id="header"
        className={`p-4 transition-colors h-auto duration-300 ${bgColor}`}
      >
        <div
          className={` flex justify-between px-20 py-3 relative  text-xl font-montserrat h-auto tracking-wider leading-[1.5em] font-medium text-white`}
        >
          <div className=" flex items-center h-12 overflow-hidden">
            <img
              className="w-full h-full"
              src={
                "https://res.cloudinary.com/do9s5cxxl/image/upload/v1725110327/SwadSafari/swadsafariWhite_logo_bzgjgh.png"
              }
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex gap-16 ">
              {/* <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/about">About Us</Link>
              </li>
              <li className="">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="">
                <Link to="/grocery">Grocery</Link>
              </li>

              {/* <li className="px-4 ">{loggedInUser}</li> */}
            </ul>
          </div>
          <div className="absolute top-1/2 right-12 transform -translate-x-0 -translate-y-1/2">
            <ul className="flex gap-6 items-center">
              <Link to={"/cart"}>
                <li className="relative">
                  <div>
                    <IoBagHandleOutline />
                  </div>
                  {/* Static Green Dot */}
                  {cartItems.length > 0 && (
                    <div className="h-3 w-3 bg-green-700 rounded-full absolute -top-1 -right-2"></div>
                  )}

                  {/* Animated Ping */}
                  {cartItems.length > 0 && (
                    <div className="h-3 w-3 bg-green-700 rounded-full animate-ping absolute -top-1 -right-2"></div>
                  )}
                </li>
              </Link>
              {/* <button
            className=""
            onClick={() => {
              user === "Login" ? setUser("Logout") : setUser("Login");
            }}
          >
            {user}
          </button> */}
              <div>SignIn</div>
            </ul>
          </div>
        </div>
      </div>
      {location.pathname !== "/" && (
        <div style={{ marginTop: `${headerHeight}px` }}></div>
      )}
    </>
  );
};

export default Header;
