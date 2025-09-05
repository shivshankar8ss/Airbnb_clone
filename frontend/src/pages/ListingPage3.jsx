import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";

function ListingPage3() {
  let navigate = useNavigate();
  let {
    title,
    description,
    frontEndImage1,
    frontEndImage2,
    frontEndImage3,
    rent,
    city,
    landmark,
    category,
    handleAddListing,
    adding,
  } = useContext(listingDataContext);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center overflow-auto relative px-4 py-6">
      {/* Back button */}
      <div
        className="absolute top-6 left-6 w-12 h-12 bg-gray-700/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-600 transition"
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeftLong className="w-6 h-6 text-white" />
      </div>

      {/* Heading */}
      <div className="max-w-4xl w-full mt-20 mb-6 text-center md:text-left">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-100">
          {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
        </h1>
      </div>

      {/* Image section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex-1 h-64 md:h-96 overflow-hidden rounded-xl border border-gray-600 bg-gray-800/40">
          <img
            src={frontEndImage1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 h-64 md:h-96">
          <div className="flex-1 overflow-hidden rounded-xl border border-gray-600 bg-gray-800/40">
            <img
              src={frontEndImage2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl border border-gray-600 bg-gray-800/40">
            <img
              src={frontEndImage3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-4xl w-full mt-8 space-y-3 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-100">
          {`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()}`}
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          {description.toUpperCase()}
        </p>
        <p className="text-lg md:text-xl font-medium text-red-400">
          {`Rs. ${rent} / day`}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <button
          className={`px-10 md:px-24 py-3 rounded-lg font-medium text-lg shadow-md transition-all duration-200 
            ${
              adding
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          onClick={handleAddListing}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add Listing"}
        </button>
      </div>
    </div>
  );
}

export default ListingPage3;
