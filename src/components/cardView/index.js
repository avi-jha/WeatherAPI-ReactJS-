import React from "react";
import "./index.css"; // Import your CSS file for styling
import { calculateAQI, uvText } from "../../Functions/exportFunc";
import MapComponent from "../mapView";

const CardView = (props) => {
  const { responseData } = props;

  const latitude = 37.7833; // Replace with your desired latitude
  const longitude = -122.4167; // Replace with your desired longitude

  let aqiIndex = calculateAQI(responseData.current?.air_quality || {});
  let uv = responseData.current?.uv || "";
  let humidity = responseData.current?.humidity || "";

  let uvData = uvText(uv);

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
          <p className="poppins-regular margin-text">{aqiIndex}</p>
          <p className="poppins-light medium-text" style={{ opacity: 0.5 }}>
            UV
          </p>
          <p className="poppins-regular margin-text">
            <span>{uv}</span>
            <span
              style={{
                fontSize: 10,
                verticalAlign: "baseline",
                marginLeft: 5,
                opacity: 0.7,
              }}
            >
              {uvData}
            </span>
          </p>
          <p className="poppins-light medium-text" style={{ opacity: 0.5 }}>
            Humidity
          </p>

          <p className="poppins-regular margin-text">
            <span>{humidity}</span>
            <span style={{ fontSize: 12, verticalAlign: "baseline" }}>%</span>
          </p>
        </div>
        <div className="section">
          <p className="poppins-light medium-text" style={{ opacity: 0.5 }}>
            Location
          </p>
          {/* <MapComponent latitude={latitude} longitude={longitude} /> */}
        </div>
      </div>
    </div>
  );
};

export default CardView;
