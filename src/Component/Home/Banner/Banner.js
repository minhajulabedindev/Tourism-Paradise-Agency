import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="row bgImg">
      <div className="bg">
        <div className="col-lg-7 col-md-6 col-sm-12 mt-lg-5 pt-lg-4">
          <div className="mt-lg-5 pt-lg-5 text-white">
            <h1 className="text">
              <span className="text-Success fw-bold">Tourism</span>{" "}
              <span>Paradise</span>{" "}
              <span className="text-Success fw-bold">Agency</span>
            </h1>
            <strong>
              Tourism is vital for the success of many economies around the
              world. There are benefits of tourism on host destinations. Tourism
              boosts the revenue of economy, creates thousands of jobs, develops
              the infrastructures of a country, and plants a sense of cultural
              exchange between foreigners and citizens
            </strong>
          </div>
        </div>
        <div className="col-lg-5 col-lg-6 col-sm-12"></div>{" "}
      </div>
    </div>
  );
};

export default Banner;
