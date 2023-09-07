import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./SearchForm.css";
import axios from "axios";
import {Puff} from 'react-loader-spinner';


function SearchForm(props) {;
  const [details, setDetails] = useState({loaded: false});
  const[city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setDetails({
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      icon: response.data.condition.icon_url,
      iconAttr: response.data.condition.icon,
      temp: Math.round(response.data.temperature.current),
      loaded: true,
      coords: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = `9a96e3865c186c9fbo4aaef0cdb0e0dt`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if(details.loaded) {
      return (
          <div className="SearchForm">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control search-input"
                    autoFocus="on"
                    id="city-input"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                    id="search-button"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={details}/>
            <WeatherForecast coords={details.coords}/>
          </div>

    );
  } else {
    search();

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

export default SearchForm;
