import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { weatherForecastAPI } from "../../Functions/exportFunc";
import { searchImage } from "../../assets/images/index";

export default function NavigationBar(props) {
  const { weatherData, city } = props;

  const [cityName, setCityName] = useState("");

  // * handle input field
  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  // * handle api call
  const handleClick = async () => {
    var data = await weatherForecastAPI(cityName);
    weatherData(data);
  };

  return (
    <nav class="navbar">
      <div className="row-view fixed-top-right">
        <input
          type="email"
          className="capsule-input"
          id="exampleFormControlInput1"
          placeholder="Search..."
          value={cityName}
          onChange={handleCityChange}
        />

        <button type="button" onClick={handleClick} class="btn btn-style">
          <img src={searchImage} alt="Search" className="search-image" />
        </button>
      </div>
    </nav>
  );
}
