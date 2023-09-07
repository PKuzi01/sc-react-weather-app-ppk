import React from 'react';
import './WeatherForecastDay.css'


function WeatherForecastDay(props) {
    //console.log(props.data);

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return (days[day]);
    }

    function maxTemp() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function icon() {
        let icon = props.data.condition.icon_url;
        return `${icon}`;
    }

    function iconAlt() {
        let iconAlt = props.data.condition.icon;
        return `${iconAlt}`;
    }

    return (
        <div>
          <p className="dateForecast" id="date-forecast">
            {day()}
          </p>
          <img src={icon()}id="icon" className="fiveDayIcon" width="50" alt={iconAlt()}/>
          <div className="fiveDay" />
              <span id="five-day-max">
                {maxTemp()}
              </span>
              <span id="five-day-min" className="fiveDayMin">
                {" "}{minTemp()}
              </span>
          </div>  
    );
}



export default WeatherForecastDay;