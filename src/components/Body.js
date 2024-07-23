import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import useOnlineStaus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.723343&lng=77.2213086&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data?.json();

      setRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilteredRes(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log("error while fetching api");
    }
  };

  const handleClick = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4;
    });
    setRestaurants(filteredRestaurants);
  };

  const onlineStatus = useOnlineStaus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return restaurants.length === 0 ? (
    <p>Loading.....</p>
  ) : (
    <div className="body">
      <div className=" flex">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black p-4"
            placeholder="Enter a restraunt name here"
            onChange={(e) => setSearchtext(e.target.value)}
            value={searchText}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter restraunt based on search text .
              // update restraunt acc. to search text .
              const filteredtext = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredtext);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Top Rated Restaurants
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
              <RestrauntCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
