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

const resList = [
  {
    info: {
      id: "600969",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "wy3w5jje0eu4br72riho",
      locality: "Kingsway Camp",
      areaName: "Hudson Lane",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.8,
      parentId: "4961",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=15432616~p=0~adgrpid=15432616#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=600969~eid=0dfd2c7a-0108-4fda-8cd3-374d611cf7ac~srvts=1721152218321~collid=45995",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-17 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
];
const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
  costForTwo,
  sla,
}) => {
  console.log(
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla
  );
  return (
    <div className="res-card " style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines && cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard
          cloudinaryImageId={resList[0].info.cloudinaryImageId}
          name={resList[0].info.name}
          cuisines={resList[0].info.cuisines}
          avgRatingString={resList[0].info.avgRatingString}
          costForTwo={resList[0].info.costForTwo}
          sla={resList[0].info.sla}
        />
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
