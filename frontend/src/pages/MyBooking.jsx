import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { userDataContext } from "../Context/UserContext";
import { bookingDataContext } from "../Context/BookingContext"; // ✅ import booking context
import Card from "../Component/Card";
import { defaultListings } from "../data/defaultListings"; // suggested places

function MyBooking() {
  let navigate = useNavigate();
  let { userData } = useContext(userDataContext);
  let { cancelBooking } = useContext(bookingDataContext); // ✅ access cancelBooking
  let [popUp, setPopUp] = useState(null); // store id of booking to cancel

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-6 py-10 relative">
      {/* Back button */}
      <div
        className="absolute top-6 left-6 w-12 h-12 bg-gray-700/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-600 hover:scale-110 transition duration-300"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <div className="w-full max-w-lg border border-gray-600 bg-gray-800/40 backdrop-blur-md rounded-lg px-6 py-4 text-center shadow-md mt-16">
        <h1 className="text-2xl md:text-3xl font-semibold text-red-400 tracking-wide">
          My Booking
        </h1>
      </div>

      {/* Booking cards */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6 mt-10">
        {userData?.booking?.length > 0 ? (
          userData.booking.map((list) => (
            <div key={list._id} className="relative">
              {/* Booking card */}
              <Card
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

              {/* Cancel booking button */}
              <button
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition"
                onClick={() => setPopUp(list._id)}
              >
                Cancel
              </button>

              {/* Confirmation popup */}
              {popUp === list._id && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-[300px]">
                    <p className="text-lg font-medium text-gray-200">
                      Are you sure you want to cancel this booking?
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                      <button
                        className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-700"
                        onClick={() => {
                          cancelBooking(list._id);
                          setPopUp(null);
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-600 rounded-md text-white hover:bg-gray-700"
                        onClick={() => setPopUp(null)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center mt-20 gap-6">
            <p className="text-gray-400 text-lg">No bookings yet.</p>
            <h2 className="text-xl text-red-400 font-semibold">
              Suggested Places
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {defaultListings.slice(0, 3).map((list) => (
                <Card
                  key={list._id}
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
        )}
      </div>
    </div>
  );
}

export default MyBooking;
