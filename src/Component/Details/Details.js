import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Button } from "react-bootstrap";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/offers/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handlebtn = () => {
    history.push("/success");
  };
  return (
    <>
      <div className=" container border border-light p-3">
        <h3>{details.name}</h3>
        <img className="w-50" src={details.img} alt="" />
        <p>{details.discription}</p>

        <Button onClick={handlebtn}>Package Booking</Button>
      </div>
    </>
  );
};

export default Details;
