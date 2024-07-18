import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchtext] = useState("");
  // console.log(searchText);
  // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.723343&lng=77.2213086&restaurantId=624078&submitAction=ENTER

  console.log(restaurants);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=28.723343&lng=77.2213086"
      );
      const json = await data?.json();

      setRestaurants(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRes(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Api not fetched");
    }
  };

  const handleClick = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4;
    });
    setRestaurants(filteredRestaurants);
  };

  return restaurants.length === 0 ? (
    <p>Loading.....</p>
  ) : (
    <div className="body">
      <div>
        <input
          type="text"
          placeholder="Enter a restraunt name here"
          onChange={(e) => setSearchtext(e.target.value)}
        />
      </div>
      <button
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
      <div>
        <button onClick={handleClick} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {filteredRes.map((restaurant) => {
          return (
            <RestrauntCard resData={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
