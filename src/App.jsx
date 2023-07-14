import { useEffect, useState } from "react";
import { CurrentWeather } from "./components/CurrentWeather";
import { SearchLocation } from "./components/SearchLocation";
import axios from "axios";

function App() {
  const [searchScreen, setSearchScreen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState("");

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
    if (location) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric`
        )
        .then((res) => setCurrentWeather(res.data));
    }
  }, [location, currentLocation]);

  return (
    <div className="container max-w-full">
      {searchScreen && (
        <SearchLocation
          setSearchScreen={setSearchScreen}
          location={location}
          setLocation={setLocation}
          setCurrentLocation={setCurrentLocation}
          setCurrentWeather={setCurrentWeather}
        />
      )}
      {!searchScreen && (
        <CurrentWeather
          setSearchScreen={setSearchScreen}
          currentWeather={currentWeather}
          setLocation={setLocation}
          setCurrentLocation={setCurrentLocation}
        />
      )}
    </div>
  );
}

export default App;
