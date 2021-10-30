// import React, { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router";

import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const MyBooking = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://sheltered-beyond-20498.herokuapp.com/offers/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  const handlebtn = () => {
    history.push("/success");
  };
  return (
    <div>
      <h1>This is the Booking</h1>
      <div className=" container border border-light p-3">
        <h3>{detail.name}</h3>
        <img className="w-50" src={detail.img} alt="" />
        <p>{detail.discription}</p>

        <Button onClick={handlebtn}>Package Booking</Button>
      </div>
    </div>
  );
};

export default MyBooking;
