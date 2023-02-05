import ApiKey from "../assets/private/ApiKey";

function GetCities(cities, stateFunc) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cities}&limit=5&appid=${ApiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      stateFunc(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default GetCities;
