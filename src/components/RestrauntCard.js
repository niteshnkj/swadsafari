const RestrauntCard = ({ resData }) => {
  // const { resData } = props;
  // console.log(resData);
  if (!resData) return null;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla: { deliveryTime },
  } = resData.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
//Higher Order Components
export const promotedCard = (RestrauntCard) => {
  return (props) => {
    return (
      <>
        <p className="absolute m-2 p-2 bg-black text-white rounded-md">
          Recommended
        </p>
        <RestrauntCard {...props} />
      </>
    );
  };
};
