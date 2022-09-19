import React, { useState } from "react";
import axios from "axios";
import ForecastWeekday from "./ForecastWeekday";

export default function DailyForecast(props) {
  let [load, setLoad] = useState(false);
  let [dailyForecast, setDailyForecast] = useState(null);

    function DailyWeather(response) {    
    setDailyForecast(response.data.daily);
    setLoad(true);
  }
  if (load) {
    return (
      <div className="DailyForecast">
        <table className="table table-hover">
          <tbody>
            <ForecastWeekday data={dailyForecast[0]} />
          </tbody>
        </table>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const APIKey = "4988ef9330d1f4546a10355cfd9c0b6f";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

    axios.get(ApiUrl).then(DailyWeather);

    return null;
  }
}
