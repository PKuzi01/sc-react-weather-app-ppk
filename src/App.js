import './App.css';
import SearchForm from "./SearchForm";
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
        <SearchForm defaultCity="Johannesburg"/>
        <Footer />
    </div>
  </div>
  );
}

export default App;
