export const callWeatherAPI = async (city) => {
  console.log("This is city name ---->", city);

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
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const upperCaseString = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
