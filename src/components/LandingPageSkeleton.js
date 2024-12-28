const LandingPageSkeleton = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center font-montserrat bg-gradient-red-orange animate-pulse">
      <div className="flex flex-col-reverse md:flex-row h-full w-full md:w-4/5 text-white items-center justify-between p-4 md:mt-4 lg:mt-24">
        {/* Skeleton Text Section */}
        <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start w-full">
          <div className="h-8 md:h-12 w-3/4 md:w-2/3 bg-gray-300 rounded-md"></div>
          <div className="flex flex-col gap-2 w-full max-w-md">
            <div className="h-4 md:h-6 bg-gray-300 rounded-md w-5/6"></div>
            <div className="h-4 md:h-6 bg-gray-300 rounded-md w-4/5"></div>
          </div>

          {/* Input and Statistics Skeleton */}
          <div className="w-full max-w-md">
            {/* Input Section */}
            <div className="h-12 md:h-14 rounded-xl bg-gray-300 w-full mb-4"></div>

            {/* Statistics Section */}
            <div className="flex gap-4 bg-gray-200 rounded-xl px-4 mt-4 justify-between border-2 border-gray-300">
              <div className="flex flex-col items-center justify-center text-center h-full w-full">
                <div className="h-8 w-8 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
                <div className="h-4 w-16 bg-gray-300 rounded-md mt-1"></div>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-full w-full">
                <div className="h-8 w-8 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
                <div className="h-4 w-16 bg-gray-300 rounded-md mt-1"></div>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-full w-full">
                <div className="h-8 w-8 bg-gray-300 rounded-full mb-2"></div>
                <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
                <div className="h-4 w-16 bg-gray-300 rounded-md mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Image Section */}
        <div className="relative w-full md:w-5/12 flex flex-col lg:flex-row items-center justify-center mt-6 md:mt-0">
          <div className="h-32 md:h-1/2 bg-gray-300 rounded-lg drop-shadow-2xl w-1/2"></div>
          <div className="absolute bg-gray-300 p-2 rounded-sm top-2 right-4 h-6 w-32"></div>
          <div className="absolute bg-gray-300 p-2 rounded-sm top-24 -right-32 h-6 w-32"></div>
          <div className="absolute bg-gray-300 p-2 rounded-sm top-36 -left-44 h-6 w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSkeleton;
