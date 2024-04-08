import "./App.css";
import { useState } from "react";
import { callWeatherAPI } from "./Functions/exportFunc";
import DataView from "./components/DataView";

function App() {
  const [cityName, setCityName] = useState("");
  const [responseData, setResponseData] = useState({});

  // * sets city name
  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  // * WeatherAPI call
  const handleClick = async () => {
    var data = await callWeatherAPI(cityName);
    console.log("reposneData -----> ", data);

    setResponseData(data);
  };

  return (
    <div className="App">
      <div className="App-body">
        <p className="city-label">Enter name of City</p>
        <input
          className="input-field"
          type="text"
          value={cityName}
          onChange={handleCityChange}
          placeholder="Enter City Name"
        />
        <br />
        <button onClick={handleClick}>Click me</button>
        <br />

        <DataView name={"Location"} data={responseData.location} />
      </div>
    </div>
  );
}

export default App;
