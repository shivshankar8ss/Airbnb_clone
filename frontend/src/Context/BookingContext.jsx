import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { authDataContext } from "./AuthContext";
import { userDataContext } from "./UserContext";
import { listingDataContext } from "./ListingContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const bookingDataContext = createContext();

function BookingContext({ children }) {
  let [checkIn, setCheckIn] = useState("");
  let [checkOut, setCheckOut] = useState("");
  let [total, setTotal] = useState(0);
  let [night, setNight] = useState(0);
  let [bookingData, setBookingData] = useState([]);
  let [booking, setBooking] = useState(false);

  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);
  let { getListing } = useContext(listingDataContext);
  let navigate = useNavigate();

  // ✅ Create Booking
  const handleBooking = async (id) => {
    setBooking(true);
    try {
      let result = await axios.post(
        `${serverUrl}/api/booking/create/${id}`,
        {
          checkIn,
          checkOut,
          totalRent: total,
        },
        { withCredentials: true }
      );

      // refresh data after booking
      await getCurrentUser();
      await getListing();

      setBookingData(result.data);
      toast.success("Booking Successful 🎉");

      navigate("/booked");
    } catch (error) {
      console.error(error);
      setBookingData(null);
      toast.error(error.response?.data?.message || "Booking failed");
    } finally {
      setBooking(false);
    }
  };

  // ✅ Cancel Booking
  const cancelBooking = async (id) => {
    try {
      let result = await axios.delete(`${serverUrl}/api/booking/cancel/${id}`, {
        withCredentials: true,
      });

      // refresh data after cancellation
      await getCurrentUser();
      await getListing();

      toast.success("Booking Cancelled ✅");
      console.log(result.data);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to cancel booking");
    }
  };

  let value = {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    bookingData,
    setBookingData,
    handleBooking,
    cancelBooking,
    booking,
    setBooking,
  };

  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  );
}

export default BookingContext;
