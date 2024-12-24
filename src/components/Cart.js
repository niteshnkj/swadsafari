import { useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import MenuItems from "./MenuItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartitmes", cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // Dispatch removeItem action with the item's id
  };
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch clear cart
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 ? (
          <h1> Cart is empty. Add Items to the cart!</h1>
        ) : (
          cartItems.map((item) => {
            return (
              <MenuItems
                key={item.card.info.id} // Use item.id as key for better React rendering performance
                item={item}
                onRemove={handleRemoveItem(item.id)} // Pass the handleRemoveItem function to MenuItems
                isCart={true}
              />
            );
          })
        )}
        {/* <MenuItems items={cartItems} /> */}
      </div>
    </div>
  );
};

export default Cart;
