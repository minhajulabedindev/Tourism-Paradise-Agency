import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container">
      <div className="col-12">
        <img
          className="100"
          src="https://image.freepik.com/free-vector/man-woman-touching-each-other-when-work-is-done_1150-35029.jpg"
          alt=""
        />
        <Link to="/home">Go Back</Link>
      </div>
    </div>
  );
};

export default Success;
