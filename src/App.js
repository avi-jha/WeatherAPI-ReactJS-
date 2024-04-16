import "./App.css";
import { useEffect, useState } from "react";
import NavigationBar from "./components/navbar";
import CardView from "./components/cardView";
import DetailsView from "./components/detailsView";
import { formatDate } from "./Functions/exportFunc";
import GoogleFontLoader from "react-google-font-loader";
import BottomView from "./components/bottomView";

function App() {
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <>
      <div className="App">
        <div className="App-body">
          <NavigationBar weatherData={setResponseData} />
          <div className="main-view">
            <CardView responseData={responseData} />
            <div className="data-view">
              <DetailsView responseData={responseData} />
              <BottomView />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
