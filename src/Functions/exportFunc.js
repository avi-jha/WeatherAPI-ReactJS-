export const callWeatherAPI = (city) => {
  var resposneData = "error";

  var formData = new URLSearchParams();

  formData.append("key", "afa773c74540472f82e131602241303");
  formData.append("q", city);

  fetch("http://api.weatherapi.com/v1/current.json", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((response) => {
      resposneData = response;
    })
    .catch((error) => console.log(error));

  return resposneData;
};
