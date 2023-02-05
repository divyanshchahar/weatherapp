import GetCities from "../utils/GetCities";

import searchIComn from "../assets/images/icon_magnifying_glass.svg";

import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ stateFunc }) {
  const [city, setCity] = useState();

  function FireCitiesAPi(e, stateFunc) {
    if (e.key === "Enter" && e.target.value.length > 0) {
      GetCities(e.target.value, stateFunc);
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onKeyDown={(e) => {
          FireCitiesAPi(e, stateFunc);
        }}
      />

      <div
        onClick={() => {
          if (city) {
            GetCities(city, stateFunc);
          }
        }}
      >
        <img src={searchIComn} alt="magnifying glass" />
      </div>
    </div>
  );
}

export default SearchBar;
