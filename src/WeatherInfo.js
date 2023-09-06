import React, {useState} from "react";
import axios from "axios";
import "./WeatherInfo.css";
import {Puff} from 'react-loader-spinner';

function WeatherInfo() {
  const [loaded, setLoad] = useState(false);
  const [details, setDetails] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDetails({
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      // date: new Date(response.data.dt*1000),
      city: response.data.city,
      icon: response.data.condition.icon_url,
      iconAttr: response.data.condition.icon,
      temp: Math.round(response.data.temperature.current),
    });
    setLoad(true);
  }

  

  if(loaded) {
      return (
      <div className="WeatherInfo mt-3 mb-2">
        <div className="row">
          <div className="col-7">
            <h1 id="city">{details.city}</h1>
            <ul>
              <li>
                <span id="date">Date {" "}</span>
              </li>
              <li>
              <span className="description" id="description">
                {details.description}
                </span>
              </li>
              <li>
                <span>
                  Humidity:
                  <strong id="humidity">{" "}{details.humidity}%{" "}</strong>
                  Wind:
                  <strong id="wind">{" "}{details.wind}km/h</strong>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-5 justify-content-end">
            <div className="temperatureContainer">
              <div className="weatherContainer">
                <img
                  src={details.icon}
                  id="current-icon"
                  className="weatherIcon"
                  alt="weather-img"
                />
                <span className="temperature" id="current-temp">
                  {details.temp}
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
  } else {
    let city = `Johannesburg`;
    const apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    

    return(
      <div className="loader">
        <Puff
          height="150"
          width="150"
          radius={1}
          color="#03446d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )

  }
  
}

export default WeatherInfo;
