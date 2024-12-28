import { deliveryBoy } from "../utils/constants";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { IoRestaurantOutline, IoFastFoodOutline } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillChatSquareHeartFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { useState, useEffect } from "react";
import { DiZend } from "react-icons/di";
import { useDispatch } from "react-redux";
import { addLocation } from "../utils/locationSlice";

const LandingPage = () => {
  const [searchlocation, setSearchlocation] = useState("");
  const [searchedval, setSearchedval] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchlocation(e.target.value);
  };

  useEffect(() => {
    if (searchlocation) {
      fetchLocationData(searchlocation);
    } else {
      setSearchedval([]);
    }
  }, [searchlocation]);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(addLocation({ latitude, longitude }));
        },
        () => console.log("Unable to retrieve your location")
      );
    } else {
      console.log("Geolocation not supported");
    }
  };

  const fetchLocationData = async (val) => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`
      );
      const data = await res.json();
      console.log(data);
      setSearchedval(data?.data || []);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center font-montserrat bg-gradient-red-orange">
      <div className="flex flex-col-reverse md:flex-row h-full w-full md:w-4/5 text-white items-center justify-between p-4 md:mt-4 lg:mt-24">
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start">
          <h1 className="text-xl md:text-5xl font-semibold animate-fadeIn">
            Craving Something Yummy?
          </h1>
          <div className="text-sm md:text-lg leading-tight font-medium text-center md:text-left">
            <p className="animate-fadeIn delay-200">
              From Our Kitchen to Your Couch
            </p>
            <p className="animate-fadeIn delay-300">
              Yummy Food Delivered in No Time.
            </p>
          </div>

          {/* Input and Statistics Section */}
          <div className="w-full max-w-md">
            {/* Input Section */}
            <div className="relative w-full">
              <input
                type="text"
                className="outline-none placeholder:text-slate-400 text-gray-800 p-3 md:p-4 h-12 md:h-14 rounded-xl bg-white w-full pr-12 shadow-lg"
                placeholder="Start typing your address..."
                aria-label="User address input"
                onChange={handleChange}
                value={searchlocation}
              />
              <button
                className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-[#f76c6c] transition-all"
                aria-label="Detect location"
                onClick={handleLocationClick}
              >
                <FaLocationCrosshairs />
              </button>
              {searchedval.length > 0 && (
                <div className="absolute bg-white text-black w-full mt-2 rounded-lg shadow-lg text-sm">
                  <ul>
                    {searchedval.map((val, index) => (
                      <li key={index} className="p-2 border-b last:border-none">
                        <p>{val.structured_formatting.main_text}</p>
                        <p className="text-black/60">
                          {val.structured_formatting.secondary_text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Statistics Section with Blur Effect */}
            <div className="flex gap-4 bg-white/30 rounded-xl px-4 mt-4 justify-between border-2 border-white/30">
              <div className="flex flex-col items-center justify-center text-center border-r-2 border-white/30 h-full w-full">
                <CiStar className="text-3xl mb-1 pt-1" />
                <p className="font-semibold">15k+</p>
                <p className="text-sm md:text-base pb-1"> Reviews (4.8)</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center border-r-2 border-white/30 h-full w-full ">
                <IoRestaurantOutline className="text-3xl mb-1 pt-1" />
                <p className="font-semibold">3000+</p>
                <p className="text-sm md:text-base pb-1"> Restaurants</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-full w-full ">
                <IoFastFoodOutline className="text-3xl mb-1 pt-1" />
                <p className="font-semibold">9000+</p>
                <p className="text-sm md:text-base pb-1"> Food Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-5/12  flex flex-col lg:flex-row items-center justify-center mt-6 md:mt-0">
          <img
            src={deliveryBoy}
            alt="Delivery Boy"
            className="object-cover object-center h-32 md:h-1/2 drop-shadow-2xl animate-bounce delay-100"
            loading="lazy"
          />
          <p
            className="absolute flex gap-1 items-center justify-center right-4 top-2 bg-white/30 p-2 rounded-sm animate-slideInFromRight delay-150 text-shadow-md shadow-lg "
            style={{
              animation: "slideInFromRight 1s ease-out, bounce 1s 1s infinite",
            }}
          >
            <GiFullPizza className=" text-xl text-yellow-300" />
            Your meal, our mission.
          </p>
          <p
            className="absolute flex gap-1 items-center justify-center top-24 -right-32  bg-white/30 p-2 rounded-sm animate-slideInFromRight delay-150 text-shadow-md shadow-lg "
            style={{
              animation: "slideInFromRight 1s ease-out, bounce 1s 1s infinite",
            }}
          >
            <TbTruckDelivery className=" text-xl text-yellow-300" />
            Hot food, delivered fresh.
          </p>
          <p
            className="absolute flex gap-1 items-center justify-center top-36 -left-44 bg-white/30 p-2 rounded-sm animate-slideInFromLeft delay-150 text-shadow-md shadow-lg "
            style={{
              animation: "slideInFromLeft 1s ease-out, bounce 1s 1s infinite",
            }}
          >
            <BsFillChatSquareHeartFill className=" text-xl text-yellow-300" />
            From door to table, with love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
