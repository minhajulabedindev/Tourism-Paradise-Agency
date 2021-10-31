import React from "react";
import MyBooking from "../MyBooking/MyBooking";
import { useEffect, useState } from "react";
import BookingAll from "./BookingAll";

const Booking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-beyond-20498.herokuapp.com/booking")
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
