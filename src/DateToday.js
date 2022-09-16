import React from "react";

export default function DateToday(props) {
    let day = props.date.getDate();
    let month = props.date.getMonth() + 1;
    let year = props.date.getFullYear();     
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <div className="Today">
            <p className="DateToday">{day}.{month}.{year}</p>
            <p className="Time">{hours}:{minutes}</p>
      </div>
    );
}