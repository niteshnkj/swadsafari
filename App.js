import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * - search
 * - restaurantContainer
 * - restaurantCard
 * - name of res, Start Rating,cuisins,deliverytime
 * - Footer
 *   - Copyright
 *   - Links
 *   - Address
 *    - contact
 */
const Header = () => {
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
          <li>User</li>
        </ul>
      </div>
    </div>
  );
};
const RestrauntCard = () => {
  return (
    <div className="res-card " style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Chicken_briyani.jpg"
        alt="res-logo"
        className="res-logo"
      />
      <h3>Meghna Foods</h3>
      <h4>Briyani,North Indian,Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
