import React from "react";
import MyBooking from "../MyBooking/MyBooking";
import { useEffect, useState } from "react";
import BookingAll from "./BookingAll";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div className="container">
      <div className="my-lg-5">
        {booking.map((book) => (
          <BookingAll key={book._id} offer={book}></BookingAll>
        ))}
      </div>
    </div>
  );
};

export default Booking;
