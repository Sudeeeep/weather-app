import staticLogo from "../assets/Shower.png";
import currentLocationLogo from "../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg";
import { SearchBar } from "./SearchBar";
import propTypes from "prop-types";

export const CurrentWeather = ({
  setSearchScreen,
  currentWeather,
  setLocation,
  setCurrentLocation,
  error,
  setError,
}) => {
  return (
    <div className="bg-[#1E213A] text-white min-h-screen px-6 py-4 sm:row-span-2">
      <SearchBar
        setSearchScreen={setSearchScreen}
        setLocation={setLocation}
        setCurrentLocation={setCurrentLocation}
        error={error}
        setError={setError}
      />
      <div className="flex flex-col gap-2 items-center mt-10">
        {!currentWeather && (
          <img src={staticLogo} alt="" className="w-32 mb-6 sm:mt-16" />
        )}
        {currentWeather && (
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            alt=""
            className="w-38 sm:mt-16"
          />
        )}
        <div className="sm:mt-4 sm:mb-2">
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
        {!currentWeather && (
          <p className="text-[#A09FB1] text-3xl sm:mb-20">Shower</p>
        )}
        {currentWeather && (
          <p className="text-[#A09FB1] text-3xl sm:mb-20">
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
  currentWeather: propTypes.object,
  setLocation: propTypes.func,
  setCurrentLocation: propTypes.func,
  error: propTypes.object,
  setError: propTypes.func,
};
