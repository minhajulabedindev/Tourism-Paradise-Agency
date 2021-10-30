import React, { useEffect, useState } from "react";
import Offers from "./Offers";

const Offer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-beyond-20498.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return (
    <div className="my-5">
      <h1>Choose Your Favorite Package</h1>

      <div className="row my-lg-5">
        {offers.map((offer) => (
          <Offers key={offer._id} offer={offer}></Offers>
        ))}
      </div>
    </div>
  );
};

export default Offer;
