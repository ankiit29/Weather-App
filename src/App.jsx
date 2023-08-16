import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const getWeatherDetails = (input) => {
    if (!input) return;
    const APIkey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIkey}`;

    axios
      .get(apiURL)
      .then((res) => setData(res.data))
      .catch((err) => {
        toast.error("An error occurred. Please try again.", {
          autoClose: 2000, // Close after 2 seconds
        });
      });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(input);
    setInput("");
  };

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1>Weather App</h1>
        <div className=" d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="write here...."
            value={input}
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img
            className="weathorIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
          />
          {data ? (
            <div className="info">
              <h5 className="weathorCity">{data?.name}</h5>
              <h6 className="weathorTemp">
                {Math.ceil(data?.main?.temp - 273)}°C
              </h6>
            </div>
          ) : (
            <div className="info">
              <h3 className="weathorCity">City</h3>
              <h3 className="weathorTemp">Temperature</h3>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
