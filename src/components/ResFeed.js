import { Link } from "react-router-dom";
import RestrauntCard, { promotedCard } from "./RestrauntCard";
import { useEffect, useState } from "react";
import useOnlineStaus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";

import OfflinePage from "./OfflinePage";
import LandingPageSkeleton from "./LandingPageSkeleton";

const ResFeed = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchtext] = useState("");
  
    const location = useSelector((store) => store.location);
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
  
    if (onlineStatus === false) return <OfflinePage />;
  
    const PromotedCard = promotedCard(RestrauntCard);
  
    return restaurants.length === 0 ? (
      <div>
        <Shimmer />
      </div>
    ) : (
      <div className="body">
        <div className="flex flex-wrap justify-center gap-4 bg-gray-50 py-4 shadow-md">
          <div className="m-4 p-4">
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter a restaurant name here"
              onChange={(e) => setSearchtext(e.target.value)}
              value={searchText}
            />
          </div>
          <div className="m-4 p-4 flex items-center">
            <button
              onClick={() => {
                const filteredtext = restaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredtext);
              }}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <button onClick={handleClick} className="btn btn-secondary">
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center bg-gray-100 py-6">
          {filteredRes.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
                className="hover:scale-105 transform transition-transform duration-200"
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


export default ResFeed