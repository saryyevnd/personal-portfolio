import "./style.css";
import React from "react";

const Default = ({ image }) => {
  return (
    <div className="certificate-image" onClick={(e) => e.stopPropagation()}>
      <img className="certificate-image__photo" src={image} alt="certificate" />
    </div>
  );
};

export default Default;
