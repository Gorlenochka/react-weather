import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastWeekday from "./ForecastWeekday";

export default function DailyForecast(props) {
  let [load, setLoad] = useState(false);
  let [dailyWeatherForecast, setDailyWeatherForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.coordinates])

  function DailyWeather(response) {
    setDailyWeatherForecast(response.data.daily);
    setLoad(true);
  }
  if (load) {
    return (
      <div className="DailyForecast">
        <table className="table table-hover">
          <tbody>
            {dailyWeatherForecast.map(function (weekdayForecast, index) {
              if (index < 7) {
                return (<ForecastWeekday data={weekdayForecast}/>);
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;    
    const APIKey = "4988ef9330d1f4546a10355cfd9c0b6f";    
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`;

    axios.get(ApiUrl).then(DailyWeather);

    return null;
  }
}
