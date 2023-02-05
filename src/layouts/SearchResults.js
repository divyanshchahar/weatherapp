import { useEffect, useState } from "react";

import styles from "./SearchResults.module.css";

/**
 * Function to render search results
 * @param {*} props -
 * @param {*} stateFunc
 * @returns JSX
 */

function SearchResults({ citiesArray, stateFunc }) {
  const [cities, setcities] = useState(citiesArray);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setcities(citiesArray);
    setIsVisible(true);
  }, [citiesArray]);

  if (cities && isVisible) {
    return (
      <>
        <div className={styles.container}>
          {cities.map((item) => {
            return (
              <div
                className={styles.item}
                onClick={() => {
                  stateFunc(item);
                }}
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
