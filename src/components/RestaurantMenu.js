import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { resMenuAPI } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    resMenuData();
  }, []);

  const resMenuData = async () => {
    const response = await fetch(resMenuAPI + resId);
    const json = await response.json();
    setResData(json?.data?.cards[2]?.card?.card);
    setResMenu(
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  if (resData === null) return <h1>Loading......</h1>;
  if (resMenu.length === 0) return <h1>Loading Menu Items</h1>;
  // console.log(resData);
  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resData?.info;
  console.log();
  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h4>{totalRatingsString}</h4>
      <h3>{costForTwoMessage}</h3>
      <h2>{cuisines.join(", ")}</h2>
      <p>Menu</p>
      <ul>
        {resMenu.map((menuItems) => {
          return (
            <li key={menuItems?.card?.info?.id}>
              {menuItems?.card?.info?.name} Rs:-
              {menuItems?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
