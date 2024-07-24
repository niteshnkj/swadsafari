const MenuItems = ({ foodMenuCard }) => {
  //   console.log(foodMenuCard);
  const { name, description, defaultPrice, imageId, price } =
    foodMenuCard.card.info;
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
            <button
              className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
            //   onClick={() => handleAddItem(item)}
            //   onClick={handleIndex}
            >
              Add +
            </button>
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
