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
    <div className="card bg-gray-100 w-52 shadow-xl text-left h-72 font-inter">
      <figure>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={`${name} logo`}
          className="rounded-xl h-32 w-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between items-start text-left p-4">
        <h2 className="card-title text-lg font-semibold truncate w-full text-gray-900">
          {name}
        </h2>
        <p className="text-sm text-gray-700 truncate w-full">
          {cuisines.slice(0, 3).join(", ")}
        </p>
        <div className="text-sm text-gray-600">
          <h4 className="font-semibold text-green-700">
            Rating: {avgRatingString}
          </h4>
          <h4 className="text-gray-800">Cost: {costForTwo}</h4>
          <h4 className="text-gray-800">Delivery: {deliveryTime} minutes</h4>
        </div>
      </div>
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
