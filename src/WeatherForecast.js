import React, {useState, useEffect} from "react";
import axios from "axios";
import {ThreeDots} from 'react-loader-spinner';
import './WeatherForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    //console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }
  
  if (loaded) {
    return (
      <div className="weatherForecast row">
        {forecast.map(function(dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col p-2" key={index}>
                <WeatherForecastDay data={dailyForecast} /> 
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );

  } else {
    let lat = props.coords.latitude;
    let lon = props.coords.longitude;
    const apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          color="#03446d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
      
    );
  }
}

export default  WeatherForecast;