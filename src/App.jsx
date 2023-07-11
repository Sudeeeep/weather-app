import { useState } from "react";
import { CurrentWeather } from "./components/CurrentWeather";
import { SearchLocation } from "./components/SearchLocation";

function App() {
  const [searchScreen, setSearchScreen] = useState(false);

  return (
    <div className="container max-w-full">
      {searchScreen && <SearchLocation setSearchScreen={setSearchScreen} />}
      {!searchScreen && <CurrentWeather setSearchScreen={setSearchScreen} />}
    </div>
  );
}

export default App;
