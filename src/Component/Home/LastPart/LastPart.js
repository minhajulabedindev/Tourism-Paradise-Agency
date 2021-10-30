import React from "react";

const LastPart = () => {
  return (
    <div className="row my-5 ">
      <div class="col-lg-6 col-sm-12">
        <img
          src="http://www.soaptheme.net/wordpress/citytours/wp-content/uploads/2015/09/laptop.png"
          className="w-100"
          alt=""
          srcset="http://www.soaptheme.net/wordpress/citytours/wp-content/uploads/2015/09/laptop.png 501w, http://www.soaptheme.net/wordpress/citytours/wp-content/uploads/2015/09/laptop-300x183.png 300w"
          sizes="(max-width: 501px) 100vw, 501px"
        />
      </div>
      <div class="col-lg-6 col-sm-12 mt-lg-3">
        <div className="text-start ms-lg-5 ">
          <h3 className="p-3">Get started with World Tours</h3>
          <p>
            A 05 stat rated tour operator in Bangladesh for it's quality of
            service, exceptional itineraries and commitment. For authentic
            Bengali more than 40000 tours and over 1 million departures
            worldwide. Find the right tour and get the best price. Guaranteed
            itineraries and right
          </p>
          <p>
            {" "}
            <i class="fas fa-bell px-2 fs-5 text-primary"></i> Select your
            preferred tours
          </p>
          <p>
            {" "}
            <i class="fas fa-bell fs-5 text-primary px-3"></i>Purchase tickets
            and options
          </p>
          <p>
            {" "}
            <i class="fas fa-bell fs-5 text-primary px-4"></i> Pick them
            directly from your office
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastPart;
