import DropDownToggle from "../components/DropDownToggle";

import brandingWeatherChannel from "../assets/images/branding_the_weather_channel.png";
import brandingToI from "../assets/images/branding_times_of_india.png";

import styles from "./TopNavBar.module.css";

function TopNavBar() {
  return (
    <div className={styles.conatiner}>
      <div className={styles.branding_1}>
        <img src={brandingWeatherChannel} alt="" />
      </div>

      <div className={styles.branding_2}>
        <img src={brandingToI} alt="" />
      </div>

      <DropDownToggle />
    </div>
  );
}

export default TopNavBar;
