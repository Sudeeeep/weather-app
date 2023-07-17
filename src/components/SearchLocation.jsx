import propTypes from "prop-types";
import { useState } from "react";

export const SearchLocation = ({
  setSearchScreen,
  setLocation,
  setCurrentLocation,
}) => {
  const [searchLocation, setSearchLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(searchLocation);
    setCurrentLocation(null);
    setSearchScreen(false);
  }

  return (
    <div className="bg-[#1E213A] text-white min-h-screen px-6 py-2 flex-wrap sm:row-span-2">
      <div className="text-end mb-4">
        <span
          onClick={() => {
            setSearchScreen(false);
            setLocation("");
          }}
        >
          X
        </span>
      </div>
      <form className="flex gap-2 flex-wrap" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchLocation}
          className="grow bg-[#1E213A] border border-white px-2 py-2"
          placeholder="search location"
          onChange={(e) => setSearchLocation(() => e.target.value)}
        />
        <button className="py-2 px-4 bg-[#3C47E9]">Search</button>
      </form>
      <div className="flex flex-col gap-2 mt-10 ">
        <button
          className="flex justify-between py-6 pl-10 border border-[#616475] text-left"
          onClick={(e) => setSearchLocation(e.target.textContent)}
        >
          Mumbai
        </button>
        <button
          className="flex justify-between py-6 pl-10 border border-[#616475] text-left"
          onClick={(e) => setSearchLocation(e.target.textContent)}
        >
          London
        </button>
        <button
          className="flex justify-between py-6 pl-10 border border-[#616475] text-left"
          onClick={(e) => setSearchLocation(e.target.textContent)}
        >
          Barcelona
        </button>
      </div>
    </div>
  );
};

SearchLocation.propTypes = {
  setSearchScreen: propTypes.func,
  location: propTypes.string,
  setLocation: propTypes.func,
  setCurrentLocation: propTypes.func,
  setCurrentWeather: propTypes.func,
};
