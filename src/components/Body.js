import { resList } from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  // console.log("yelo");
  // resData={resList[0].info
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return (
            <RestrauntCard resData={restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
