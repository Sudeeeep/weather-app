import staticLogo from "../assets/Shower.png";

export const Forecast = () => {
  return (
    <div className="bg-[#100E1D] text-white p-10 pb-10 min-h-screen">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>Tomorrow</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>Sun, 7 June</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>Mon, 8 June</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>Tue, 9 June</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>Wed, 10 June</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};
