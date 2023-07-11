import { useEffect, useState } from "react";
import staticLogo from "../assets/Shower.png";
import currentLocationLogo from "../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg";
import { SearchBar } from "./SearchBar";
import axios from "axios";
import propTypes from "prop-types";

export const CurrentWeather = ({ setSearchScreen }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (!currentLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          setCurrentLocation(pos.coords);
        });
      }
    } else {
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
  }, [currentLocation]);

  return (
    <div className="bg-[#1E213A] text-white min-h-screen px-6 py-4">
      <SearchBar setSearchScreen={setSearchScreen} />
      <div className="flex flex-col gap-2 items-center mt-10">
        {!currentWeather && (
          <img src={staticLogo} alt="" className="w-32 mb-6" />
        )}
        {currentWeather && (
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            alt=""
            className="w-38"
          />
        )}
        <div>
          {!currentWeather && (
            <span className="font-bold text-7xl mr-2">15</span>
          )}
          {currentWeather && (
            <span className="font-bold text-7xl mr-2">
              {Math.round(currentWeather.main.temp)}
            </span>
          )}
          <span className="text-[#A09FB1] text-xl">℃</span>
        </div>
        {!currentWeather && <p className="text-[#A09FB1] text-3xl">Shower</p>}
        {currentWeather && (
          <p className="text-[#A09FB1] text-3xl">
            {currentWeather.weather[0].main}
          </p>
        )}

        <div className="flex gap-5 text-[#A09FB1] text-sm">
          <p>today</p>
          <p>{new Date().toString().slice(0, 11)}</p>
        </div>

        <div className="flex gap-1 text-[#A09FB1] items-center text-sm">
          <img src={currentLocationLogo} alt="" className="w-4" />
          {!currentWeather && <p>Helsinki</p>}
          {currentWeather && <p>{currentWeather.name}</p>}
        </div>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  setSearchScreen: propTypes.func,
};
