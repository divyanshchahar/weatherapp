import DropDownToggle from "../components/DropDownToggle";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import brandingWeatherChannel from "../assets/images/branding_the_weather_channel.png";
import brandingToI from "../assets/images/branding_times_of_india.png";

import styles from "./TopNavBar.module.css";
import { useState } from "react";

function TopNavBar({ stateFunc }) {
  const [cities, setCities] = useState();

  return (
    <>
      <div className={styles.conatiner}>
        <div className={styles.branding_1}>
          <img src={brandingWeatherChannel} alt="" />
        </div>

        <div className={styles.branding_2}>
          <img src={brandingToI} alt="" />
        </div>

        <SearchBar stateFunc={setCities} />

        <DropDownToggle />
      </div>

      <SearchResults props={cities} func={stateFunc} />
    </>
  );
}

export default TopNavBar;
