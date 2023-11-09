/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-3 col-10 mx-auto mt-5 mb-5">
        <div className="card shadow p-3 mb-3 bg-body rounded ">
          <img
            src={props.serviceimg}
            class="card-img-top rounded-start"
            alt={props.serviceimg}
            className={props.className}
          />

          <div className="card-body">
            <h5 className="card-title font-weight-bold desc">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a
              href="mailto: amoghkanade4@gmail.com"
              target="_blank"
              className="btn-get-started"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
