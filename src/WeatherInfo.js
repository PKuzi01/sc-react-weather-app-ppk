import React from "react";
import FormattedDate from './FormattedDate';
import UnitConversion from "./UnitConversion";
import './WeatherInfo.css';

function WeatherInfo(props) {
  // console.log(props.data);
  return (
    <div className="WeatherInfo mt-3 mb-2">
      <div className="row">
        <div className="col-7">
          <h1 id="city">{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
            <span className="description" id="description">
              {props.data.description}
              </span>
            </li>
            <li>
              <span>
                Humidity:
                <strong id="humidity">{" "}{props.data.humidity}%{" "}</strong>
                Wind:
                <strong id="wind">{" "}{props.data.wind}km/h</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-5 justify-content-end">
          <div className="temperatureContainer">
            <div className="weatherContainer">
              <img
                src={props.data.icon}
                id="current-icon"
                className="weatherIcon"
                alt={props.data.iconAttr}
              />
              <UnitConversion celsius={props.data.temp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;