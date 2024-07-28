import React from "react";

const Shimmer = () => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 animate-pulse">
      <div className="bg-gray-300 rounded-full w-4 h-4 mb-4"></div>
      <div className="flex flex-col gap-y-4">
        <div className="font-bold py-4 text-lg bg-gray-300"></div>
        <div className="bg-gray-300"></div>
        <div className="bg-gray-300"></div>
        <div className="bg-gray-300"></div>
        <div className="bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Shimmer;
