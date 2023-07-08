import staticLogo from "../assets/Shower.png";
import currentLocation from "../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg";

export const CurrentWeather = () => {
  return (
    <div className="bg-[#1E213A] text-white w-screen min-h-screen">
      <div className="flex flex-col gap-2 items-center">
        <img src={staticLogo} alt="" className="w-32 mb-6" />

        <div>
          <span className="font-bold text-7xl mr-2">15</span>
          <span className="text-[#A09FB1] text-xl">℃</span>
        </div>
        <p className="text-[#A09FB1] text-3xl">Shower</p>

        <div className="flex gap-5 text-[#A09FB1] text-sm">
          <p>today</p>
          <p>Fri, 5 June</p>
        </div>

        <div className="flex gap-1 text-[#A09FB1] items-center text-sm">
          <img src={currentLocation} alt="" className="w-4" />
          <p>Helsinki</p>
        </div>
      </div>
    </div>
  );
};
