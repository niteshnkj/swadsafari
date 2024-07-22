import { useParams } from "react-router-dom";
import useResData from "../utils/useResData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useResData(resId);

  if (resData === null) return <h1>Loading......</h1>;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h4>{totalRatingsString}</h4>
      <h3>{costForTwoMessage}</h3>
      <h2>{cuisines.join(", ")}</h2>
      <p>Menu</p>
      <ul>
        {console.log(itemCards)}
        {itemCards.map((menuItems) => {
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
