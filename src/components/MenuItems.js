import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const MenuItems = ({ item, isCart }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ id: item.card.info.id }));
  };

  const { name, description, defaultPrice, imageId, price } = item?.card?.info;

  return (
    <div>
      <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
        <div className="w-9/12">
          <div className="py-2">
            <span>{name}</span>
            <span>- ₹{defaultPrice ? defaultPrice / 100 : price / 100}</span>
          </div>
          <p className="text-xs">{description}</p>
        </div>
        <div className="w-3/12 p-4">
          <div className="absolute">
            {!isCart ? (
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
                // onClick={handleIndex}
              >
                Add +
              </button>
            ) : (
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleRemoveItem(item)}
                // onClick={handleIndex}
              >
                remove
              </button>
            )}
          </div>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" + imageId
            }
            className="w-2/3 h-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
