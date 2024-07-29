import React from "react";
import MenuItems from "./MenuItems";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const MenuCategoryType = ({ menuTabs, showItems,handleIndex }) => {
  //   console.log(menuTabs);
  //   const [showItems, setShowItems] = useState(false);
  const { itemCards } = menuTabs?.card?.card;
  //   console.log("ye wala bhi", itemCards);
//   const handleClick = () => {
//     setShowIndex();
//   };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleIndex}
        >
          <span className="font-bold text-lg">
            {menuTabs.card.card.title} ({itemCards.length})
          </span>
          <span>{showItems ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          
        </div>

        {showItems &&
          itemCards.map((items) => {
            return <MenuItems item={items} key={items.card.info.id} />;
          })}

        {/* {menuTabs.card.card.itemCards.length()} */}
      </div>
    </div>
  );
};

export default MenuCategoryType;
