import React from "react";

const Shimmer = () => {
  return (
    <div className="m-4 p-4 w-52 h-72 rounded-lg bg-gray-100 shadow-lg animate-pulse">
      {/* Image Placeholder */}
      <div className="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>

      {/* Text Placeholders */}
      <div className="flex flex-col gap-2 px-2">
        <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded-md w-1/2"></div>

        {/* Additional Info Placeholders */}
        <div className="mt-2 space-y-2">
          <div className="h-3 bg-gray-300 rounded-md w-full"></div>
          <div className="h-3 bg-gray-300 rounded-md w-2/3"></div>
          <div className="h-3 bg-gray-300 rounded-md w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
