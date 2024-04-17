import React from "react";
import "./index.css";

function CapsuleView(props) {
  const { responseData } = props;

  var highTemp = responseData.forecast?.forecastday[0].day.maxtemp_c || "";
  var lowTemp = responseData.forecast?.forecastday[0].day.mintemp_c || "";

  return (
    <div>
      <div className="capsule-container">
        <div className="blur-text">H</div>
        <div className="">{highTemp}°</div>
      </div>
      <div className="capsule-container">
        <div className="blur-text">L</div>
        <div className="">{lowTemp}°</div>
      </div>
    </div>
  );
}

export default CapsuleView;
