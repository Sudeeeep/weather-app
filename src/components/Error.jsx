import propTypes from "prop-types";

export const ErrorPage = ({ error, setError }) => {
  function handleClick() {
    setError(null);
  }

  if (error.code === "ERR_NETWORK") {
    return (
      <div className="bg-[#6E707A] text-white absolute top-1/2 min-w-full px-6 py-2">
        <div className="text-end">
          <span onClick={handleClick}>X</span>
        </div>
        <h1 className="text-center">NETWORK ERROR</h1>
        <p className="text-center">
          Please check you internet connection and try again
        </p>
      </div>
    );
  }
  if (error.code === "ERR_BAD_REQUEST") {
    return (
      <div className="bg-[#6E707A] text-white absolute top-1/2 min-w-full px-6 py-2">
        <div className="text-end">
          <span onClick={handleClick}>X</span>
        </div>
        <h1 className="text-center">ERROR</h1>
        <p className="text-center">
          Location not found. Please enter correct location
        </p>
      </div>
    );
  }
  return (
    <div className="absolute top-1/2 min-w-full px-6 bg-white">
      <h1 className="text-center">ERROR PAGE</h1>
      <p className="text-center"></p>
    </div>
  );
};

ErrorPage.propTypes = {
  error: propTypes.object,
  setError: propTypes.func,
};
