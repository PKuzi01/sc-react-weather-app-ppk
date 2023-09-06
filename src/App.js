import './App.css';
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <SearchForm />
        <WeatherInfo defaultCity="Johannesburg"/>
        <WeatherForecast/>
        <Footer />
    </div>
  </div>
  );
}

export default App;
