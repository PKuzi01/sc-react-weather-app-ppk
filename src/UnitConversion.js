import React, {useState} from "react";
import './UnitConversion.css'

function UnitConversion(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if(unit === "celsius") {
        return (
            <span>
                <span className="temperature" id="current-temp">
                    {props.celsius}
                </span>
                <span className="unit">
                    <sup>°C | <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>°F</a></sup>
                </span>
            </span>
        );
    } else {
        let fahrenheitTemp = Math.round((props.celsius * 9 / 5) + 32);
        return (
            <span>
                <span className="temperature" id="current-temp">
                    {fahrenheitTemp}
                </span>
                <span className="unit">
                    <sup><a href="/" className="fahrenheit" onClick={convertToCelsius}>°C</a> | °F</sup>
                </span>
            </span>
        );
    }

    
}

export default UnitConversion;