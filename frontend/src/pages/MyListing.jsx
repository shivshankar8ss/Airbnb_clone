import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from "../Context/UserContext";
import Card from "../Component/Card";

function MyListing() {
  let navigate = useNavigate();
  let { userData } = useContext(userDataContext);

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 relative px-5 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      {/* Back Button */}
      <div
        className="w-12 h-12 bg-white shadow-md hover:shadow-lg cursor-pointer absolute top-10 left-5 rounded-full flex items-center justify-center border border-gray-300 transition"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-6 h-6 text-gray-700" />
      </div>

      {/* Title */}
      <div className="mt-20 text-center text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide">
        My Listings
      </div>

      {/* Listing Grid */}
      <div className="w-full max-w-6xl flex flex-wrap gap-6 justify-center pb-20">
        {userData.listing.map((list, idx) => (
          <Card
            key={idx}
            title={list.title}
            landMark={list.landMark}
            city={list.city}
            image1={list.image1}
            image2={list.image2}
            image3={list.image3}
            rent={list.rent}
            id={list._id}
            isBooked={list.isBooked}
            ratings={list.ratings}
            host={list.host}
          />
        ))}
      </div>
    </div>
  );
}

export default MyListing;
