export const weatherAPI = async (city) => {
  var formData = new URLSearchParams();

  formData.append("key", "e1ddbbd83c6a4e90a62101457240404");
  formData.append("q", city);

  try {
    const response = await fetch("http://api.weatherapi.com/v1/current.json", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok"); //* show error
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const weatherForecastAPI = async (city) => {
  var foreCastParams = new URLSearchParams();

  foreCastParams.append("key", "e1ddbbd83c6a4e90a62101457240404");
  foreCastParams.append("q", city);
  foreCastParams.append("days", "5");
  foreCastParams.append("aqi", "yes");

  try {
    const response = await fetch(
      " http://api.weatherapi.com/v1/forecast.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: foreCastParams,
      }
    );
    console.log(response);

    if (!response.ok) {
      throw new Error("Something Went wrong");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// common functions
export const upperCaseString = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatDate = (dateString) => {
  if (!dateString) {
    return "";
  }

  // Parse the input date string
  const date = new Date(dateString);

  // Check if the parsed date is valid
  if (isNaN(date.getTime())) {
    return "";
  }

  // Define arrays for day names and month names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day of the week and month index from the parsed date
  const dayIndex = date.getDay();
  const monthIndex = date.getMonth();

  // Get the day and month names
  const dayName = days[dayIndex];
  const monthName = months[monthIndex];

  // Get the day of the month
  const dayOfMonth = date.getDate();

  // Construct the formatted date string
  const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;

  return formattedDate;
};

export const calculateAQI = (aqiData) => {
  // Check if the provided AQI data is valid
  if (!aqiData) {
    console.error("Invalid AQI data");
    return null;
  }

  // Extract pollutant concentrations from AQI data
  const { co, no2, o3, so2, pm2_5, pm10 } = aqiData;

  // Check if required pollutants are available
  if (co === undefined || no2 === undefined || so2 === undefined) {
    console.error("Missing required pollutant data");
    return null;
  }

  // Calculate AQI based on the formula provided by EPA or DEFRA
  const aqiIndex =
    co / 100 +
    no2 / 10 +
    (o3 || 1 / 100) +
    so2 / 100 +
    (pm2_5 || 0) +
    (pm10 || 0);

  console.log("AQI Index:", aqiIndex);
  return aqiIndex.toFixed(1);
};

export const uvText = (value) => {
  let uvText = "";

  if (!value) {
    console.error("Invalid uv data");
    return null;
  }

  if (value < 2) {
    uvText = "Very Low";
  } else if (value < 5) {
    uvText = "Moderate";
  } else if (value < 7) {
    uvText = "High";
  } else if (value < 10) {
    uvText = "Very High";
  } else if (value > 10) {
    uvText = "Extremely High";
  }

  return uvText;
};
