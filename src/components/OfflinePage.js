import React from "react";

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700 font-montserrat">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-gray-500 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75L4.5 4.5m15 15l-5.25-5.25M3 8.25A9 9 0 0120.25 18M20.25 5.25A9 9 0 013.75 18.75"
        />
      </svg>

      {/* Message */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Oops! You're Offline
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        It seems like your internet connection is down. Please check your
        network and try again.
      </p>

      {/* Retry Button */}
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700 rounded-md shadow-lg"
      >
        Retry Connection
      </button>
    </div>
  );
};

export default OfflinePage;
