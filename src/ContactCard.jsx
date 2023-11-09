import React from "react";

const ContactCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-3 col-10 mx-auto max ">
        <div className="card-body">
          <img src={props.contactimg} alt="g" className="mb-3" />
          <h6 className="card-text desc">{props.info}</h6>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
