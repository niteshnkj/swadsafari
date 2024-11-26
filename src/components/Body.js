import { Link } from "react-router-dom";
import RestrauntCard, { promotedCard } from "./RestrauntCard";
import { useEffect, useState } from "react";
import useOnlineStaus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import LandingPage from "./LandingPage";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [location, setLocation] = useState({
    latitude: "26.3482938",
    longitude: "86.0711661",
  });

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  useEffect(() => {
    if (location) {
      fetchData();
    }
  }, [location, searchText]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location?.latitude}&lng=${location?.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();

      setRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredRes(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log("Error while fetching API", error);
    }
  };

  const handleClick = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.2;
    });
    setFilteredRes(filteredRestaurants);
  };

  const onlineStatus = useOnlineStaus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const PromotedCard = promotedCard(RestrauntCard);

  return restaurants.length === 0 ? (
    <div>
      <LandingPage />
      <Shimmer />
      <button onClick={handleLocationClick}>location</button>
    </div>
  ) : (
    <div className="body">
      <LandingPage />
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black p-4"
            placeholder="Enter a restaurant name here"
            onChange={(e) => setSearchtext(e.target.value)}
            value={searchText}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredtext = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredtext);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            onClick={handleLocationClick}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            set your location
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant?.info?.avgRating > 4.5 ? (
                <PromotedCard resData={restaurant} />
              ) : (
                <RestrauntCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
