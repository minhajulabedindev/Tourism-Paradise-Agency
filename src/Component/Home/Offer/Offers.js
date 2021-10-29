import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const Offers = (props) => {
  const { name, img, discription, _id } = props.offer;

  const history = useHistory();
  const handlebtn = () => {
    history.push("/success");
  };

  const handleDetailsBtn = () => {
    history.push(`/details/${_id}`);
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-2 ">
      <div className="border border-light p-3">
        <h3>{name}</h3>
        <img className="w-100" src={img} alt="" />
        <p>{discription.slice(0, 150)}</p>
        <Button onClick={handleDetailsBtn} className="me-2">
          Details
        </Button>
        <Button onClick={handlebtn}>Package Booking</Button>
      </div>
    </div>
  );
};

export default Offers;
