import propTypes from "prop-types";

export const Highlights = ({ currentWeather }) => {
  return (
    <div className="bg-[#100E1D] text-white px-4 py-2 pb-10 min-h-screen sm:col-start-2 sm:min-h-full sm:px-10">
      <h1 className="font-bold text-2xl mb-4">Today's Highlights</h1>
      <div className="flex flex-col gap-6 items-center sm:grid sm:grid-cols-2">
        <div className="flex flex-col gap-2 bg-[#1E213A] w-full text-center py-4 sm:py-10">
          <p>Wind Speed</p>
          <p>
            {!currentWeather && (
              <span className="text-5xl font-bold mr-2">7</span>
            )}
            {currentWeather && (
              <span className="text-5xl font-bold mr-2">
                {currentWeather.wind.speed}
              </span>
            )}
            <span className="text-xl">m/s</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 bg-[#1E213A] w-full text-center py-4 sm:py-10">
          <p>Humidity</p>
          <p>
            {!currentWeather && (
              <span className="text-5xl font-bold mr-2">84</span>
            )}
            {currentWeather && (
              <span className="text-5xl font-bold mr-2">
                {currentWeather.main.humidity}
              </span>
            )}
            <span className="text-xl">%</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 bg-[#1E213A] w-full text-center py-4 sm:py-10">
          <p>Visibility</p>
          <p>
            {!currentWeather && (
              <span className="text-5xl font-bold mr-2">6.4</span>
            )}
            {currentWeather && (
              <span className="text-5xl font-bold mr-2">
                {currentWeather.visibility / 1000}
              </span>
            )}
            <span className="text-xl">km</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 bg-[#1E213A] w-full text-center py-4 sm:py-10">
          <p>Air Pressure</p>
          <p>
            {!currentWeather && (
              <span className="text-5xl font-bold mr-2">998</span>
            )}
            {currentWeather && (
              <span className="text-5xl font-bold mr-2">
                {currentWeather.main.pressure}
              </span>
            )}
            <span className="text-xl">mb</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Highlights.propTypes = {
  currentWeather: propTypes.object,
};
