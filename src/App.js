import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import DataForecast from "./DataForecast";
import DailyForecast from "./DailyForecast";
import Author from "./Author";

export default function App() {
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });
  const [city, setCity] = useState("Kyiv");

  function forecastResponse(response) {
    console.log(response.data);
    setWeatherForecast({
      ready: true,  
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "4988ef9330d1f4546a10355cfd9c0b6f";    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(forecastResponse);
  }

  function showForecast(event) {
    event.preventDefault();
    search();
  }

  function showCity(event) {
    setCity(event.target.value);
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
            <form onSubmit={showForecast}>
              <input
                type="text"
                placeholder="Search a city"
                className="SearchACity"
                onChange={showCity}
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
          <DataForecast forecast={weatherForecast} city={city} />
          <DailyForecast coordinates={weatherForecast.coordinates} />
        </div>
        <Author />
      </div>
    );
  }
  
  else {
    search();
    return (<p>Loading...</p>);
  }
}
