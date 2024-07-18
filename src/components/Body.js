import { resList } from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  console.log(restaurants);

  const handleClick = () => {
    const filteredRestaurants = resList.filter((restaurant) => {
      return restaurant.info.avgRating > 4;
    });
    setRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <div>
        <button onClick={handleClick}>Top Rated Restaurants</button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard resData={restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
