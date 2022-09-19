import React from "react";

export default function ForecastWeekday(props) {
  function TempMax() {
    let dailyMaxTemp = Math.round(props.data.temp.max);
    return `${dailyMaxTemp}`;
  }
  function TempMin() {
    let dailyMinTemp = Math.round(props.data.temp.min);
    return `${dailyMinTemp}`;
  }
  function data() {
    let date = new Date(props.data.dt * 1000);
    let data = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[data];
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();

    if (day < 10) {
      day = `0${day}`;
    }

    return day;
  }

  return (
    <tr className="ForecastWeekday">
      <th scope="row" className="Daily">
        {data()} {day()}
      </th>
      <td className="DailyMaxTemperature">
        {TempMax()} <sup>°С</sup>
      </td>
      <td className="DailyMinTemperature">
        {TempMin()} <sup>°С</sup>
      </td>
      <td>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
          className="DailyWeatherImage"
        />
      </td>
      <td className="DailyWeatherDescription">
        {props.data.weather[0].description}
      </td>
    </tr>
  );
}
