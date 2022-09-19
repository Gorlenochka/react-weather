import React from "react";
import DateToday from "./DateToday";
import WeatherTemperature from "./WeatherTemperature";

export default function DataForecast(props) {
  return (
    <div className="DataForecast">
      <h1 id="search-city">{props.city}</h1>
      <DateToday date={props.forecast.date} />
      <div className="Container">
        <div className="Row">
          <div className="Col">
            <img
              src={`http://openweathermap.org/img/wn/${props.forecast.icon}@2x.png`}
              alt={props.forecast.description}
              className="ImageWeatherToday"
            />
          </div>
          <div className="Col">
            <WeatherTemperature celsius={props.forecast.temperature} />
          </div>
          <div className="Col">
            <p className="PrecipitationToday">
              Humidity: {props.forecast.humidity}%
            </p>
            <hr />
            <p className="WindToday">Wind: {props.forecast.wind} km/h</p>
            <hr />
            <p className="PressureToday">
              Pressure: {props.forecast.pressure} mb
            </p>
            <hr />
          </div>
        </div>
      </div>     
    </div>
  );
}
