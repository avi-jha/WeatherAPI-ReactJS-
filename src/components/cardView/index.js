import React, { useEffect, useState } from "react";
import "./index.css"; // Import your CSS file for styling
import { calculateAQI } from "../../Functions/exportFunc";

const CardView = (props) => {
  const { responseData } = props;

  const [aqiIndex, setAqiIndex] = useState(0);

  useEffect(() => {
    let aqi = calculateAQI(responseData.current?.air_quality || {});
    setAqiIndex(aqi);
  }, [responseData]);

  return (
    <div className="card-view">
      <div className="header">
        <p className="poppins-light">WeatherAPI</p>
      </div>
      <div className="content">
        <div className="section">
          <p className="poppins-light medium-text" style={{ opacity: 0.5 }}>
            AQI Index
          </p>
          <p className="poppins-regular">{aqiIndex}</p>
        </div>
        <div className="section">
          <p className="poppins-light medium-text" style={{ opacity: 0.5 }}>
            Location
          </p>
          <p className="poppins-regular">Content B</p>
        </div>
      </div>
    </div>
  );
};

export default CardView;
