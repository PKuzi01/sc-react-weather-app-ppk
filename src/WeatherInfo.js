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
          <h1>{props.data.city}</h1>
          <ul>
            <li className="weatherDetails">
              <FormattedDate date={props.data.date} />
            </li>
            <li>
            <span className="description weatherDetails">
              {props.data.description}
              </span>
            </li>
            <li>
              <span className="weatherDetails">
                Humidity:
                <strong>{" "}{props.data.humidity}%{" "}</strong>
                Wind:
                <strong>{" "}{props.data.wind}km/h</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-5">
            <div className="weatherContainer">
              <img
                src={props.data.icon}
                className="weatherIcon"
                alt={props.data.iconAttr}
              />
              <UnitConversion celsius={props.data.temp} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;