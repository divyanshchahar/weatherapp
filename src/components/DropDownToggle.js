import { useState } from "react";

import downCaret from "../assets/images/icon_caret_down.svg";
import upCaret from "../assets/images/icon_caret_up.svg";

import styles from "./DropDownToggle.module.css";

/**
 * Function to render toggle for dropdown menu
 * @returns JSX
 */

function DropDownToggle() {
  const [toggled, setToggled] = useState(true);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setToggled(!toggled);
      }}
    >
      {toggled ? (
        <img src={downCaret} alt="downward facing arrow" />
      ) : (
        <img src={upCaret} alt="up facing arrow" />
      )}
    </div>
  );
}

export default DropDownToggle;
