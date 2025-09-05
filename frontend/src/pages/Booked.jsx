import React, { useContext, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from "../Context/BookingContext";
import { useNavigate } from "react-router-dom";
import Star from "../Component/Star";
import { userDataContext } from "../Context/UserContext";
import { authDataContext } from "../Context/AuthContext";
import { listingDataContext } from "../Context/ListingContext";
import axios from "axios";

function Booked() {
  let { bookingData } = useContext(bookingDataContext);
  let [star, setStar] = useState(0);
  let { serverUrl } = useContext(authDataContext);

  let { getCurrentUser } = useContext(userDataContext);
  let { getListing, cardDetails } = useContext(listingDataContext);

  let navigate = useNavigate();

  const handleRating = async (id) => {
    try {
      let result = await axios.post(
        serverUrl + `/api/listing/ratings/${id}`,
        {
          ratings: star,
        },
        { withCredentials: true }
      );
      await getListing();
      await getCurrentUser();
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleStar = async (value) => {
    setStar(value);
    console.log("you rated", value);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4 relative">
      {/* Back to Home */}
      <button
        className="absolute top-4 right-6 px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-md hover:opacity-90 transition"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>

      {/* Booking Confirmation Card */}
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4 text-lg font-semibold">
          <GiConfirmed className="w-20 h-20 text-green-600" />
          <span className="text-2xl font-bold text-gray-800">
            Booking Confirmed
          </span>
        </div>

        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between text-base md:text-lg">
            <span className="font-medium">Booking Id :</span>
            <span>{bookingData._id}</span>
          </div>
          <div className="flex justify-between text-base md:text-lg">
            <span className="font-medium">Owner Details :</span>
            <span>{bookingData.host?.email}</span>
          </div>
          <div className="flex justify-between text-base md:text-lg">
            <span className="font-medium">Total Rent :</span>
            <span>₹ {bookingData.totalRent}</span>
          </div>
        </div>
      </div>

      {/* Rating Card */}
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center gap-5">
        <h1 className="text-lg font-medium text-gray-800">
          {star} out of 5 Rating
        </h1>
        <Star onRate={handleStar} />
        <button
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
          onClick={() => handleRating(cardDetails._id)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Booked;
