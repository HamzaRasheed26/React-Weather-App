import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchData = () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    console.log("Fetching weather data for", API_URL + city);
    fetch(API_URL + city)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          setError(data.message);
          setWeatherData(null);
        } else {
          setError(null);
          setWeatherData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setWeatherData(null);
      });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={fetchData}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
