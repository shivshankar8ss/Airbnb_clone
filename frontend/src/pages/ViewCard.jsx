import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { listingDataContext } from "../Context/ListingContext";
import { userDataContext } from "../Context/UserContext";
import { authDataContext } from "../Context/AuthContext";
import { bookingDataContext } from "../Context/BookingContext";
import { toast } from "react-toastify";

function ViewCard() {
  let navigate = useNavigate();
  let { cardDetails, updating, setUpdating, deleting, setDeleting } =
    useContext(listingDataContext);
  let { userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    handleBooking,
    booking,
  } = useContext(bookingDataContext);

  let [updatePopUp, setUpdatePopUp] = useState(false);
  let [bookingPopUp, setBookingPopUp] = useState(false);

  let [title, setTitle] = useState(cardDetails.title);
  let [description, setDescription] = useState(cardDetails.description);
  let [backEndImage1, setBackEndImage1] = useState(null);
  let [backEndImage2, setBackEndImage2] = useState(null);
  let [backEndImage3, setBackEndImage3] = useState(null);
  let [rent, setRent] = useState(cardDetails.rent);
  let [city, setCity] = useState(cardDetails.city);
  let [landmark, setLandmark] = useState(cardDetails.landMark);
  let [minDate, setMinDate] = useState("");

  // Calculate nights & total
  useEffect(() => {
    if (checkIn && checkOut) {
      let inDate = new Date(checkIn);
      let OutDate = new Date(checkOut);
      let n = (OutDate - inDate) / (24 * 60 * 60 * 1000);
      setNight(n);

      let airBnbCharge = cardDetails.rent * 0.07;
      let tax = cardDetails.rent * 0.07;

      if (n > 0) {
        setTotal(cardDetails.rent * n + airBnbCharge + tax);
      } else {
        setTotal(0);
      }
    }
  }, [checkIn, checkOut, cardDetails.rent]);

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  // Handlers
  const handleImage1 = (e) => setBackEndImage1(e.target.files[0]);
  const handleImage2 = (e) => setBackEndImage2(e.target.files[0]);
  const handleImage3 = (e) => setBackEndImage3(e.target.files[0]);

  const handleUpdateListing = async () => {
    setUpdating(true);
    try {
      let formData = new FormData();
      formData.append("title", title);
      if (backEndImage1) formData.append("image1", backEndImage1);
      if (backEndImage2) formData.append("image2", backEndImage2);
      if (backEndImage3) formData.append("image3", backEndImage3);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landmark);

      await axios.post(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        { withCredentials: true }
      );

      setUpdating(false);
      toast.success("Listing Updated");
      navigate("/");
    } catch (error) {
      setUpdating(false);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleDeleteListing = async () => {
    setDeleting(true);
    try {
      await axios.delete(serverUrl + `/api/listing/delete/${cardDetails._id}`, {
        withCredentials: true,
      });
      toast.success("Listing Deleted");
      navigate("/");
      setDeleting(false);
    } catch (error) {
      setDeleting(false);
      toast.error(error.response?.data?.message || "Error deleting");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center overflow-auto relative p-6">
      {/* Back Button */}
      <div
        className="w-12 h-12 bg-white shadow-md hover:bg-gray-100 cursor-pointer absolute top-6 left-6 rounded-full flex items-center justify-center border border-gray-300 transition"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-5 h-5 text-gray-700" />
      </div>

      {/* Location Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4 text-center">
        In {cardDetails.landMark.toUpperCase()},{" "}
        {cardDetails.city.toUpperCase()}
      </h1>

      {/* Images */}
      <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-1 h-80 overflow-hidden rounded-xl shadow-md">
          <img
            src={cardDetails.image1}
            alt="main"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="h-40 rounded-xl shadow-md overflow-hidden">
            <img
              src={cardDetails.image2}
              alt="img2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-40 rounded-xl shadow-md overflow-hidden">
            <img
              src={cardDetails.image3}
              alt="img3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="w-full md:w-4/5 mt-6 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">
          {cardDetails.title} {cardDetails.category}
        </h2>
        <p className="text-gray-600">{cardDetails.description}</p>
        <p className="text-lg font-semibold text-gray-800">
          ₹{cardDetails.rent}/day
        </p>

        {/* Action Buttons */}
        {cardDetails.host === userData._id ? (
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md mt-4 w-fit"
            onClick={() => setUpdatePopUp(true)}
          >
            Edit Listing
          </button>
        ) : (
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md mt-4 w-fit"
            onClick={() => setBookingPopUp(true)}
          >
            Reserve
          </button>
        )}
      </div>

      {/* Update Popup */}
      {updatePopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="relative w-[95%] max-w-2xl bg-white rounded-xl shadow-xl p-6 overflow-auto">
            <RxCross2
              className="absolute top-4 right-4 w-6 h-6 text-gray-600 cursor-pointer hover:text-red-600"
              onClick={() => setUpdatePopUp(false)}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Update your listing
            </h2>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full border px-4 py-2 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Description"
                className="w-full border px-4 py-2 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input type="file" onChange={handleImage1} />
              <input type="file" onChange={handleImage2} />
              <input type="file" onChange={handleImage3} />
              <input
                type="number"
                placeholder="Rent"
                className="w-full border px-4 py-2 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border px-4 py-2 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Landmark"
                className="w-full border px-4 py-2 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />

              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                  onClick={handleUpdateListing}
                  disabled={updating}
                >
                  {updating ? "Updating..." : "Update Listing"}
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg"
                  onClick={handleDeleteListing}
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Booking Popup */}
      {bookingPopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
          <div className="relative flex flex-col md:flex-row gap-6 max-w-4xl w-full">
            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2">
              <RxCross2
                className="absolute top-4 left-4 w-6 h-6 text-gray-600 cursor-pointer hover:text-red-600"
                onClick={() => setBookingPopUp(false)}
              />
              <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                Confirm & Book
              </h2>
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium">Check In</label>
                <input
                  type="date"
                  min={minDate}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border px-3 py-2 rounded-lg"
                />
                <label className="text-sm font-medium">Check Out</label>
                <input
                  type="date"
                  min={minDate}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border px-3 py-2 rounded-lg"
                />
                <button
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg mt-4"
                  onClick={() => handleBooking(cardDetails._id)}
                  disabled={booking}
                >
                  {booking ? "Booking..." : "Book Now"}
                </button>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={cardDetails.image1}
                  alt="place"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {cardDetails.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cardDetails.landMark}, {cardDetails.city}
                  </p>
                  <p className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" /> {cardDetails.ratings}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t pt-4 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>
                    ₹{cardDetails.rent} × {night} nights
                  </span>
                  <span>{cardDetails.rent * night}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{cardDetails.rent * 0.07}</span>
                </div>
                <div className="flex justify-between">
                  <span>Airbnb Charge</span>
                  <span>{cardDetails.rent * 0.07}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total</span>
                  <span>{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCard;