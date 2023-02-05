import ApiKey from "../assets/private/ApiKey";

function GetCities(city, stateFunc) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${ApiKey}`
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
