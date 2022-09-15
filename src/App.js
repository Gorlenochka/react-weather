import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DateToday from "./DateToday";

export default function App() {
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });

  function forecastResponse(response) {
    setWeatherForecast({
      ready: true,
      city: "Paris",
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  if (weatherForecast.ready) {
    return (
      <div className="App">
        <div className="Border">
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
            <DateToday date={weatherForecast.date} />
            <div className="Container">
              <div className="Row">
                <div className="Col">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecast.icon}@2x.png`}
                    alt={weatherForecast.description}
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
                    Humidity: {weatherForecast.humidity}%
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
        </div>
        <div className="Author">
          <p>
            This project was created by{" "}
            <a
              href="https://eclectic-kringle-cd3e49.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Olena Gorlenko
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Gorlenochka?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  else {
    const apiKey = "4988ef9330d1f4546a10355cfd9c0b6f";
    let city = "Paris"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(forecastResponse);

    return (<p>Loading...</p>)
  }
}
