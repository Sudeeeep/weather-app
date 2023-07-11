import propTypes from "prop-types";

export const SearchLocation = ({ setSearchScreen }) => {
  return (
    <div className="bg-[#1E213A] text-white min-h-screen px-6 py-2 flex-wrap">
      <div className="text-end mb-4">
        <span onClick={() => setSearchScreen(false)}>X</span>
      </div>
      <form className="flex gap-2 flex-wrap">
        <input
          type="text"
          className="grow bg-[#1E213A] border border-white px-2 py-2"
          placeholder="search location"
        />
        <button className="py-2 px-4 bg-[#3C47E9]">Search</button>
      </form>
      <div className="flex flex-col gap-2 mt-10 ">
        <button className="flex justify-between py-6 px-2 border border-[#616475] text-left">
          <span>Mumbai</span>
          <span className="text-[#616475]"> {">"} </span>
        </button>
        <button className="flex justify-between py-6 px-2 border border-[#616475] text-left">
          <span>London</span>
          <span className="text-[#616475]"> {">"} </span>
        </button>
        <button className="flex justify-between py-6 px-2 border border-[#616475] text-left">
          <span>Barcelona</span>
          <span className="text-[#616475]"> {">"} </span>
        </button>
      </div>
    </div>
  );
};

SearchLocation.propTypes = {
  setSearchScreen: propTypes.func,
};
