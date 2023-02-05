import ApiKey from "../assets/private/ApiKey";

function GetCurrentWeather(lat, lon, stateFunc) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      stateFunc(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export default GetCurrentWeather;
