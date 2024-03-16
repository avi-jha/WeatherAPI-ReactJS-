import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { callWeatherAPI } from "./Functions/exportFunc";

function App() {
  const [cityName, setCityName] = useState("");
  const [responseData, setResponseData] = useState();

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const onSubmit = () => {
    var data = callWeatherAPI(cityName);
    console.log("reposneData -----> ", data);
    if (data != "error") {
      console.log("No Data Found!!");
    } else {
      setResponseData(data);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2
        </a> */}
        <p className="city-label">Enter name of City</p>
        <input
          className="input-field"
          type="text"
          value={cityName}
          onChange={handleCityChange}
        />
        <button onSubmit={onSubmit}> Submit </button>

        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
