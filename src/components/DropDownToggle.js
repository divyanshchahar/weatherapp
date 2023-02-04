import { useState } from "react";

import downCaret from "../assets/images/icon_caret_down.svg";
import upCaret from "../assets/images/icon_caret_up.svg";

function DropDownToggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <div
      onClick={() => {
        setToggled(!toggled);
      }}
    >
      {toggled ? <img src={downCaret} alt="" /> : <img src={upCaret} alt="" />}
    </div>
  );
}

export default DropDownToggle;
