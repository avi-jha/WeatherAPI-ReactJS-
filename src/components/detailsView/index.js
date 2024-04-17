import React from "react";
import "./index.css";
import { locationIcon } from "../../assets/images";
import { formatDate } from "../../Functions/exportFunc";
import CapsuleView from "../capsuleView";

function DetailsView(props) {
  const { responseData } = props;

  var timeData = responseData.location?.localtime || "";

  var cityName =
    responseData.location?.name +
      ", " +
      responseData.location?.region +
      ", " +
      responseData.location?.country || "";

  var currentTemp = responseData.current?.temp_c || "";

  var weathertext = responseData.current?.condition.text || "";

  // var weatherIcon = responseData.current?.condition.icon || "";

  return (
    <div className="details-view">
      <div className="sections">
        <div className="data-tabs">
          <p>
            <p className="location-text poppins-light">
              <img src={locationIcon} alt="!!" className="image-view" />
              {cityName} ({formatDate(timeData)})
            </p>
            <span className="temp-view">
              <p className="temp-text">{currentTemp}°</p>
              <CapsuleView responseData={responseData} />
            </span>
          </p>
        </div>
        <div className="data-tabs margin-tabs">
          <p className="para1-text poppins-light">
            With real time data and advanced technology, we provide reliable
            forecasts for any locations around the world.
          </p>
        </div>
      </div>
      <div className="sections">
        <div className="data-tabs" style={{ flexDirection: "row" }}>
          <p className="poppins-semibold blur-text temp-text">{weathertext}</p>
          {/* <img
            src={weatherIcon}
            alt=""
            className="weather-image"
            // style={{ height: 50, aspectRatio: "1:1", opacity: 0.5 }}
          /> */}
        </div>
        {/* TODO: add the cards to display previous searches */}
        {/* <div className="data-tabs">
          <p>abc</p>
        </div> */}
      </div>
    </div>
  );
}

export default DetailsView;
