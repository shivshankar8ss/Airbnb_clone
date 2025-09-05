import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { userDataContext } from "../Context/UserContext";
import { listingDataContext } from "../Context/ListingContext";
import { bookingDataContext } from "../Context/BookingContext";
function Card({
  title,
  landMark,
  image1,
  image2,
  image3,
  rent,
  city,
  id,
  ratings,
  isBooked,
  host,
}) {
  let navigate = useNavigate();
  let { userData } = useContext(userDataContext);
  let { handleViewCard } = useContext(listingDataContext);
  let { cancelBooking } = useContext(bookingDataContext);
  let [popUp, setPopUp] = useState(false);
  const handleClick = () => {
    if (userData) {
      handleViewCard(id);
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      className="w-[330px] max-w-[85%] h-[460px] flex flex-col rounded-2xl shadow-md hover:shadow-lg bg-white cursor-pointer relative overflow-hidden transition"
      onClick={() => (!isBooked ? handleClick() : null)}
    >
      {" "}
      {/* Booked Badge */}{" "}
      {isBooked && (
        <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full shadow-sm">
          {" "}
          <GiConfirmed className="w-4 h-4" /> Booked{" "}
        </div>
      )}{" "}
      {/* Cancel Booking (Host Only) */}{" "}
      {isBooked && host === userData?._id && (
        <div
          className="absolute top-14 right-3 flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full shadow-sm hover:bg-red-200 transition"
          onClick={(e) => {
            e.stopPropagation();
            setPopUp(true);
          }}
        >
          {" "}
          <FcCancel className="w-4 h-4" /> Cancel{" "}
        </div>
      )}{" "}
      {/* Cancel Confirmation Popup */}{" "}
      {popUp && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
          {" "}
          <div className="w-[300px] bg-white rounded-xl shadow-lg p-5 space-y-4">
            {" "}
            <h3 className="text-lg font-semibold text-gray-800">
              {" "}
              Cancel Booking?{" "}
            </h3>{" "}
            <p className="text-sm text-gray-600">
              {" "}
              Are you sure you want to cancel this booking?{" "}
            </p>{" "}
            <div className="flex justify-end gap-3">
              {" "}
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setPopUp(false);
                }}
              >
                {" "}
                No{" "}
              </button>{" "}
              <button
                className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  cancelBooking(id);
                  setPopUp(false);
                }}
              >
                {" "}
                Yes{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {/* Images */}{" "}
      <div className="w-full h-[60%] flex overflow-x-auto rounded-t-2xl">
        {" "}
        {[image1, image2, image3].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="w-full flex-shrink-0 object-cover"
          />
        ))}{" "}
      </div>{" "}
      {/* Info Section */}{" "}
      <div className="flex flex-col justify-between p-4 h-[40%]">
        {" "}
        <div className="flex items-center justify-between text-lg font-medium text-gray-800">
          {" "}
          <span className="truncate">
            {" "}
            In {landMark?.toUpperCase()}, {city?.toUpperCase()}{" "}
          </span>{" "}
          <span className="flex items-center gap-1 text-yellow-500">
            {" "}
            <FaStar /> {ratings}{" "}
          </span>{" "}
        </div>{" "}
        <span className="text-sm text-gray-600 truncate">
          {" "}
          {title?.toUpperCase()}{" "}
        </span>{" "}
        <span className="text-base font-semibold text-gray-900">
          {" "}
          ₹{rent}/day{" "}
        </span>{" "}
      </div>{" "}
    </div>
  );
}
export default Card;
