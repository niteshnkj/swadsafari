
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=28.723343&lng=77.2213086"
      );
      const json = await data.json();

      setRestaurants(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.info.avgRating > 4;
    });
    setRestaurants(filteredRestaurants);
  };

  return restaurants.length === 0 ? (
    <p>Loading.....</p>
  ) : (
    <div className="body">
      <div>
        <button onClick={handleClick} className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard resData={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
