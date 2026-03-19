import { useState, useEffect } from "react";
import "./index.css";

const API_KEY = "87dd945e9f3d42d7f49e145edafbc7ba";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [unit, setUnit] = useState("C"); // "C" or "F"
  const [searchedCityTitle, setSearchedCityTitle] = useState("");

  // Check LocalStorage on initial load
  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      setCity(lastCity);
      fetchWeather(lastCity);
    }
  }, []);

  const fetchWeather = async (searchCity) => {
    if (!searchCity) return;
    setLoading(true);
    setError(false);
    setWeatherData(null);

    try {
      const response = await fetch(`${API_URL}${searchCity}&appid=${API_KEY}`);
      if (response.status === 404) {
        setError(true);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setSearchedCityTitle(data.name);
        localStorage.setItem("lastCity", data.name);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather(city);
    }
  };

  const toggleUnit = () => {
    setUnit(prev => (prev === "C" ? "F" : "C"));
  };

  // Determine weather icon
  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds": return "/images/clouds.png";
      case "Clear": return "/images/clear.png";
      case "Rain": return "/images/rain.png";
      case "Drizzle": return "/images/drizzle.png";
      case "Mist": return "/images/mist.png";
      default: return "/images/rain.png";
    }
  };

  // Convert temperature if needed
  const getDisplayTemp = (tempInCelsius) => {
    if (unit === "C") return Math.round(tempInCelsius);
    return Math.round((tempInCelsius * 9) / 5 + 32);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-center">Weather App</div>
      </nav>

      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name..."
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>
            <img src="/images/search.png" alt="search" />
          </button>
        </div>

        {error && (
          <div className="weather">
            <img src="/images/cry.png" className="weather-icon" alt="error icon" />
            <p className="error" style={{ marginLeft: 0, textAlign: "center", marginTop: "20px", fontSize: "18px" }}>
              Invalid City Name
            </p>
          </div>
        )}

        {loading && (
          <div className="loading-text">
            <p>Loading...</p>
          </div>
        )}

        {weatherData && !error && !loading && (
          <div className="weather" style={{ display: "block" }}>
            <button className="toggle-btn" onClick={toggleUnit}>
              Switch to °{unit === "C" ? "F" : "C"}
            </button>
            <br />
            <img
              src={getWeatherIcon(weatherData.weather[0].main)}
              className="weather-icon"
              alt="weather icon"
            />
            <h1 className="temp">
              {getDisplayTemp(weatherData.main.temp)}°{unit.toLowerCase()}
            </h1>
            <h2 className="city">{searchedCityTitle}</h2>
            <div className="details">
              <div className="col">
                <img src="/images/humidity.png" alt="humidity" />
                <div>
                  <p className="humidity">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="/images/wind.png" alt="wind" />
                <div>
                  <p className="wind">{weatherData.wind.speed} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
