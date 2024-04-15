import React from "react";
import "./index.css"; // Import your CSS file for styling

const CardView = () => {
  return (
    <div className="card-view">
      <div className="header">
        <p className="poppins-light">WeatherAPI</p>
      </div>
      <div className="content">
        <div className="section">
          <p className="poppins-thin">Title A</p>
          <p className="poppins-regular">Content A</p>
        </div>
        <div className="section">
          <p className="poppins-thin">Title B</p>
          <p className="poppins-regular">Content B</p>
        </div>
      </div>
    </div>
  );
};

export default CardView;
