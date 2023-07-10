import locationLogo from "../assets/my_location_FILL0_wght400_GRAD0_opsz48.svg";

export const SearchBar = () => {
  return (
    <div className="flex justify-between">
      <button className="bg-[#6E707A] px-3">Search for places</button>
      <button className="bg-[#6E707A] rounded-full p-1">
        <img src={locationLogo} className="w-8" />
      </button>
    </div>
  );
};
