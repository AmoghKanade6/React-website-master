/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-10 mx-auto">
        <div className="card shadow p-3 mb-5 bg-body rounded ">
          <img
            src={props.imgsrc}
            class="card-img-top"
            alt={props.imgsrc}
            className={props.anim}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold desc">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <a
              href={props.download}
              target="_blank"
              className="btn btn-primary"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
