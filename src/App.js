import { useEffect, useState } from "react";
import CurrentWeather from "./layouts/CurrentWeather";

import TopNavBAr from "./layouts/TopNavBar";

function App() {
  const [selectedCity, setSelectedCity] = useState();

  return (
    <>
      <TopNavBAr stateFunc={setSelectedCity} />
      <CurrentWeather selectedCity={selectedCity} />
    </>
  );
}

export default App;
