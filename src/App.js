import "./App.css";
import { useEffect, useState } from "react";
import DataView from "./components/DataView";
import NavigationBar from "./components/navbar";
import CardView from "./components/cardView";

function App() {
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <div className="App">
      <div className="App-body">
        <NavigationBar weatherData={setResponseData} />
        <div className="main-view">
          <div className="card-outer">
            <CardView />
          </div>
        </div>

        {/* //* deisplay weather data */}
        {/* <DataView name={"Location"} data={responseData.location} />
        <DataView name={"Current"} data={responseData.current} /> */}
      </div>
    </div>
  );
}

export default App;
