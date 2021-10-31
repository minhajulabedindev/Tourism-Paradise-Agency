import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import Booking from "./Booking";

const BookingAll = (props) => {
  const { user } = useAuth();
  const [detail, setDetail] = useState([]);
  const { name, img, discription, _id, price } = props.offer;

  // console.log(detail.length._id);
  console.log(detail._id);

  useEffect(() => {
    fetch(`http://localhost:5000/booking`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  const handleDelete = (id) => {
    const deleted = window.confirm("are you sure delete");
    if (deleted) {
      const url = `http://localhost:5000/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = detail.filter((Booking) => Booking._id !== id);
            setDetail("");
            // setDetail({});
          }
        });
    }
  };

  return (
    <div className=" ">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h5> {user.displayName}</h5>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {" "}
          <h5>{name}</h5>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h4>{price}</h4>{" "}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {" "}
          <Button as={Link} to="/success" className="btn-success">
            Pending
          </Button>{" "}
          <Button onClick={() => handleDelete(_id)} className="btn-danger">
            Deleted
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BookingAll;
