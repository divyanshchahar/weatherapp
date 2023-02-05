import { useEffect, useState } from "react";

import GetCurrentWeather from "../utils/GetCurrentWeather";

import styles from "./CurrentWeather.module.css";

/**
 * Function to render current weather
 * @param {object} selectedCity
 * @returns
 */

function CurrentWeather({ selectedCity }) {
  const [currentWeather, setCurrentWeather] = useState();

  const date = new Date();

  useEffect(() => {
    if (selectedCity) {
      GetCurrentWeather(selectedCity.lat, selectedCity.lon, setCurrentWeather);
    }
  }, [selectedCity]);

  if (currentWeather) {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>{`${
          currentWeather.name
        } as of ${date.getHours()} : ${date.getMinutes()}`}</div>

        <div className={styles.felx_cintainer}>
          <div>
            <span
              className={styles.temprature}
            >{`${currentWeather.main.temp}°C`}</span>
            <br />
            <span className={styles.condition}>
              {currentWeather.weather[0].description}
            </span>
            <br />
            <span
              className={styles.temp_range}
            >{`Min : ${currentWeather.main.temp_min} | Max: ${currentWeather.main.temp_max}`}</span>
          </div>

          <div className={styles.img_container}>
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
