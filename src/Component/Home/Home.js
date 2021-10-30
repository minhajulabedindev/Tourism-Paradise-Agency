import React from "react";
import Banner from "./Banner/Banner";
import LastPart from "./LastPart/LastPart";
import MiddlePart from "./Middle/MiddlePart";
import Offer from "./Offer/Offer";

const Home = () => {
  return (
    <div className="container">
      <Banner></Banner>
      <Offer></Offer>
      <MiddlePart></MiddlePart>
      <LastPart></LastPart>
    </div>
  );
};

export default Home;
