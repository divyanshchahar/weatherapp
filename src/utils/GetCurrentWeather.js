import ApiKey from "../assets/private/ApiKey";

/**
 * Function to fetch current weather data
 * @param {string} lat - latitude of the cordinate
 * @param {string} lon - longitude of the cordinate
 * @param {Function} stateFunc - state function to change component state
 */

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
