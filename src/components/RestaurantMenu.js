import { useParams } from "react-router-dom";
import useResData from "../utils/useResData";
import MenuCategoryType from "./MenuCategoryType";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useResData(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resData === null) return <h1>Loading......</h1>;

  // console.log("ye hai", resData);
  const { name, avgRating, costForTwoMessage, cuisines } =
    resData.data.cards[2].card.card.info;
  const getCategoryCards = (cards) =>
    cards?.filter(
      (c) =>
        // c.card?.card?.["@type"] ===
        //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const menuTabs =
    getCategoryCards(
      resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ) ||
    getCategoryCards(
      resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ) ||
    [];

  return (
    <div className="text-center">
      <div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <h3 className="font-semibold">{cuisines.join(", ")}</h3>
        <h3 className="text-slate-500">{costForTwoMessage}</h3>
        <h2>{avgRating} stars</h2>
      </div>
      <div>
        <h3>Menu Items</h3>
        <h3>
          {menuTabs.map((menuCategory, index) => {
            return (
              // controlled component
              <MenuCategoryType
                key={index}
                menuTabs={menuCategory}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            );
          })}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
