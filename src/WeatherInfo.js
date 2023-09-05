import React from "react";
import "./WeatherInfo.css";

function WeatherInfo() {
  return (
    <div className="WeatherInfo mt-3 mb-2">
      <div className="row">
        <div className="col-7">
          <h1 id="city">[City Name]</h1>
          <ul>
            <li>
              <span id="date">Day,{" "}HH:MM,</span>
              <span className="description" id="description">
              {" "}description
              </span>
            </li>
            <li>
              <span>
                Humidity:
                <strong id="humidity">{" "}[no]%{" "}</strong>
                Wind:
                <strong id="wind">{" "}[no]km/h{" "}</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-5 justify-content-end">
          <div className="temperatureContainer">
            <div className="weatherContainer">
              <img
                src="#"
                id="current-icon"
                className="weatherIcon"
                alt="weather-img"
              />
              <span className="temperature" id="current-temp">
                12
              </span>
              <span className="unit">
                <sup>°C</sup>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
