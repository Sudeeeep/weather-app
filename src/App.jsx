import { useEffect, useState } from "react";
import { CurrentWeather } from "./components/CurrentWeather";
import { SearchLocation } from "./components/SearchLocation";
import axios from "axios";

function App() {
  const [searchScreen, setSearchScreen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location && !currentLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          setCurrentLocation(() => pos.coords);
        });
      }
    }
    if (currentLocation) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            currentLocation.latitude
          }&lon=${currentLocation.longitude}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric`
        )
        .then((res) => {
          console.log(res.data);
          setCurrentWeather(res.data);
        });
    }
  }, [location, currentLocation]);

  return (
    <div className="container max-w-full">
      {searchScreen && <SearchLocation setSearchScreen={setSearchScreen} />}
      {!searchScreen && (
        <CurrentWeather
          setSearchScreen={setSearchScreen}
          currentWeather={currentWeather}
        />
      )}
    </div>
  );
}

export default App;
