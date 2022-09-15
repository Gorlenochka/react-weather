import React from "react";
import "./App.css";

export default function App() {
  let weatherForecast = {
    city: "Kiev",
    temperature: "15",
    date: "06.09.2022",
    time: "21.00",
    wind: "4",
    precipitation: "45",
    pressure: "1022",
  };
  return (
    <div className="App">
      <div className="PreviouslySearch">
        <p className="PreviouslyCities">Previously searched cities:</p>
        <a href="/" className="PreviouslyCity">
          Kyiv
        </a>
        <a href="/" className="PreviouslyCity">
          London
        </a>
        <a href="/" className="PreviouslyCity">
          Warsaw
        </a>
      </div>
      <div className="Search">
        <form>
          <input
            type="text"
            placeholder="Search a city"
            className="SearchACity"
          />
          <input type="submit" value="Let's go!" className="Go" id="go" />
          <input
            type="button"
            value="Current"
            className="Current"
            id="current"
          />
        </form>
      </div>
      <div className="MainCity">
        <h1 id="search-city">{weatherForecast.city}</h1>
        <div className="Today">
          <p className="DateToday">{weatherForecast.date}</p>
          <p className="Time">{weatherForecast.time}</p>
        </div>
        <div className="Container">
          <div className="Row">
            <div className="Col">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="shower rain"
                className="ImageWeatherToday"
              />
            </div>
            <div className="Col">
              <p className="TemperatureToday">
                {weatherForecast.temperature}
                <sup className="CelsiusFahrenheit">°С </sup>
              </p>
            </div>
            <div className="Col">
              <p className="PrecipitationToday">
                Precipitation: {weatherForecast.precipitation}%
              </p>
              <hr />
              <p className="WindToday">Wind: {weatherForecast.wind} km/h</p>
              <hr />
              <p className="PressureToday">
                Pressure: {weatherForecast.pressure} mb
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="Author">
        <p>
          Created by
          <a
            href="https://github.com/Gorlenochka?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Olena Gorlenko
          </a>
        </p>
      </div>
    </div>
  );
}


