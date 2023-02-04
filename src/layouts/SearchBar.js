import searchIComn from "../assets/images/icon_magnifying_glass.svg";

import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" />
      <div>
        <img src={searchIComn} alt="magnifying glass" />
      </div>
    </div>
  );
}

export default SearchBar;
