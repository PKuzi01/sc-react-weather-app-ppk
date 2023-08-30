import './App.css';
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossOrigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <div className="container-fluid">
      <div className="weather">
        <SearchForm />
        <WeatherInfo />
        <WeatherForecast />
        <Footer />
      </div>
    </div>
  </div>
  );
}

export default App;
