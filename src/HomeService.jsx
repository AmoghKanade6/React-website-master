import React from "react";
import { NavLink } from "react-router-dom";

const HomeService = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-3 col-10 mx-auto mt-5 mb-5 img-fluid animated">
        <div className="card shadow p-3  bg-body rounded ">
          <img
            src={props.serviceimg}
            class="card-img-top rounded-start"
            alt={props.serviceimg}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold desc">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <NavLink
              to="/services"
              className="btn btn-outline-dark rounded-pill mt-3"
            >
              More Info
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeService;
