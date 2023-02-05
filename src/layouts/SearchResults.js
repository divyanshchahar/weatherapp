import { useEffect, useState } from "react";

import styles from "./SearchResults.module.css";

function SearchResults({ props }) {
  const [cities, setcities] = useState(props);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setcities(props);
    setIsVisible(true);
  }, [props]);

  if (cities && isVisible) {
    return (
      <>
        <div className={styles.container}>
          {cities.map((item) => {
            return (
              <div
                className={styles.item}
              >{`${item.name}, ${item.country}`}</div>
            );
          })}
        </div>

        <div
          className={styles.close_button}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Hide Results
        </div>
      </>
    );
  }
}

export default SearchResults;
