import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [units, setUnits] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnits("fahrenheit");
    }

    function showCelsius(event) {
      event.preventDefault();
      setUnits("celsius");
    }

    function fahrenheit() {
        return props.celsius * 9 / 5 + 32;
    }

    if (units === "celsius") {
        return (
            <p className="TemperatureToday">
                {props.celsius}
                <sup className="CelsiusFahrenheit">                    
                    {" "}°С|
                    <a href="/" onClick={showFahrenheit}>
                        F
                    </a>
                </sup>
            </p>
        );
    }
    else {
     return (
            <p className="TemperatureToday">
                {Math.round(fahrenheit())}
                <sup className="CelsiusFahrenheit">
                 <a href="/" onClick={showCelsius}>
                        {" "}
                        °С
                 </a>
                    |F                    
                </sup>
            </p>
        );
    }   
    }
