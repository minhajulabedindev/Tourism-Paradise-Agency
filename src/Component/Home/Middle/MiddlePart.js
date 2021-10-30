import React from "react";
import { Button } from "react-bootstrap";
import "./MiddlePart.css";

const MiddlePart = () => {
  return (
    <div className="row my-lg-5 ">
      <div className="col-lg-4 col-sm-12  ">
        <div className=" rounded-3 text-dark bg-success p-4  bg-opacity-10">
          <i class="fas fa-shuttle-van p-4 border border-primary rounded-circle fs-1 mb-3 text-info"></i>

          <h3>+120 Premium tours</h3>
          <p className=" texts">
            Tour guides are a massive part of anyone’s trip. They can either
            make or break a tour. But don’t worry, Travel Talk’s tour guides are
            not only passionate about the destinations but are mostly born and
            raised there meaning they’re locals!
          </p>
          <Button variant="outline-primary" className="rounded-pill">
            Read More
          </Button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12  rounded-3 ">
        <div className=" rounded-3  bg-success p-4 text-dark bg-opacity-10">
          <i class="fas fa-hotel  p-4 border border-primary rounded-circle fs-1 mb-3 text-info"></i>
          <h3>+1000 Customers</h3>
          <p className=" texts">
            Travel Talk’s tour guides are not only passionate about the
            destinations but are mostly born and raised there meaning they’re
            locals! This is a massive bonus for you as you receive expert
            information and doors wiTour
          </p>
          <Button variant="outline-primary" className="rounded-pill">
            Read More
          </Button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12  rounded-3 ">
        <div className=" rounded-3  bg-success p-4 text-dark bg-opacity-10">
          <i class="fas fa-american-sign-language-interpreting p-4 border border-primary rounded-circle fs-1 mb-3  text-info"></i>
          <h3>H-24 Support</h3>
          <p className=" texts">
            Tour. But don’t worry, Travel Talk’s tour guides are not only
            passionate about the destinations but are mostly born and raised
            there meaning they’re locals! This is a massive bonus for you as you
            receive expert information andTour guides
          </p>
          <Button variant="outline-primary" className="rounded-pill">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
