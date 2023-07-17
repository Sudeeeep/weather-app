import staticLogo from "../assets/Shower.png";
import propTypes from "prop-types";

export const Forecast = ({ forecast }) => {
  const now = new Date().toString();
  let day = now.slice(0, 3);
  let date = Number(now.slice(8, 10));
  let month = now.slice(4, 7);
  let year = now.slice(11, 16);

  function handleDate() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const monthArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (month === "Feb") {
      if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        if (date === 29) {
          date = 1;
          month = monthArray[monthArray.indexOf(month) + 1];
          day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
        } else {
          date++;
          day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
        }
      } else {
        if (date === 28) {
          date = 1;
          month = monthArray[monthArray.indexOf(month) + 1];
          day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
        } else {
          date++;
          day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
        }
      }
    } else if (
      month === "Apr" ||
      month === "Jun" ||
      month === "Sep" ||
      month === "Nov"
    ) {
      if (date === 30) {
        date = 1;
        month = monthArray[monthArray.indexOf(month) + 1];
        day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
      } else {
        date++;
        day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
      }
    } else if (
      month === "Jan" ||
      month === "Mar" ||
      month === "May" ||
      month === "Jul" ||
      month === "Aug" ||
      month === "Oct" ||
      month === "Dec"
    ) {
      if (date === 31) {
        date = 1;
        month = monthArray[monthArray.indexOf(month) + 1];
        day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
      } else {
        date++;
        day === "Sun" ? (day = "Mon") : (day = days[days.indexOf(day) + 1]);
      }
    }

    return `${day}, ${date} ${month}`;
  }

  if (forecast) {
    return (
      <div className="bg-[#100E1D] text-white p-10 pb-10 min-h-screen">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
            <p>{handleDate()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[7].weather[0].icon}@4x.png`}
              className="w-28"
            />

            <p>{Math.round(forecast[7].main.temp)}°C</p>
          </div>

          <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
            <p>{handleDate()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[15].weather[0].icon}@4x.png`}
              className="w-28"
            />

            <p>{Math.round(forecast[15].main.temp)}°C</p>
          </div>

          <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
            <p>{handleDate()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[23].weather[0].icon}@4x.png`}
              className="w-28"
            />

            <p>{Math.round(forecast[23].main.temp)}°C</p>
          </div>

          <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
            <p>{handleDate()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast[31].weather[0].icon}@4x.png`}
              className="w-28"
            />

            <p>{Math.round(forecast[31].main.temp)}°C</p>
          </div>

          <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
            <p>{handleDate()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${
                forecast[forecast.length - 1].weather[0].icon
              }@4x.png`}
              className="w-28"
            />

            <p>{Math.round(forecast[forecast.length - 1].main.temp)}°C</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#100E1D] text-white p-10 pb-10 min-h-screen">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>{handleDate()}</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>{handleDate()}</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>{handleDate()}</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>{handleDate()}</p>
          <img src={staticLogo} className="w-16" />
          <div className="flex gap-4">
            <p>16°C</p>
            <p>11°C</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-[#1E213A] items-center py-4">
          <p>{handleDate()}</p>
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

Forecast.propTypes = {
  forecast: propTypes.array,
};
