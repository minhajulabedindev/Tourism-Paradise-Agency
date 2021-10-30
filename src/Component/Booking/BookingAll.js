import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../Hooks/UseAuth";

const BookingAll = (props) => {
  const { user } = useAuth();
  const { name, img, discription, _id, price, discount } = props.offer;
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
          <Button className="btn-success">Pending</Button>{" "}
          <Button className="btn-danger">Deleted</Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BookingAll;
