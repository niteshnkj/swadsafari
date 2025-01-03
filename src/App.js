import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import LandingPageSkeleton from "./components/LandingPageSkeleton";
import LandingPage from "./components/LandingPage";
import ResFeed from "./components/ResFeed";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamic imoprt
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
// const Body = lazy(() => import("./components/Body"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Nitesh Jha",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <LandingPage fallback={<LandingPageSkeleton />} />
          </Suspense>
        ),
      },
      {
        path: "/resfeed",
        element: (
          <Suspense>
            <ResFeed/>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About fallback={<Shimmer />} />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery fallback={<h1>Loading....</h1>} />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
